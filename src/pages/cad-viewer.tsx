import DxfParser from "dxf-parser";
import { FileSearch, Maximize2, RefreshCw, Upload, ZoomIn, ZoomOut } from "lucide-react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { ToolPage } from "@/components/layout/tool-page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Point = {
  x: number;
  y: number;
};

type RenderEntity =
  | { type: "line"; points: Point[]; layer?: string }
  | { type: "circle"; center: Point; radius: number; layer?: string }
  | { type: "text"; point: Point; value: string; height: number; layer?: string };

type CadRenderData = {
  bounds: {
    maxX: number;
    maxY: number;
    minX: number;
    minY: number;
  };
  entities: RenderEntity[];
  entityCount: number;
  layers: string[];
  unsupportedCount: number;
};

type CadViewBox = {
  height: number;
  width: number;
  x: number;
  y: number;
};

type DragState = {
  clientX: number;
  clientY: number;
  viewBox: CadViewBox;
};

type DxfEntity = {
  center?: Point;
  endAngle?: number;
  height?: number;
  layer?: string;
  position?: Point;
  radius?: number;
  startAngle?: number;
  startPoint?: Point;
  text?: string;
  textHeight?: number;
  type: string;
  vertices?: Point[];
};

const sampleDxf = `0
SECTION
2
ENTITIES
0
LINE
8
Walls
10
0
20
0
11
160
21
0
0
LINE
8
Walls
10
160
20
0
11
160
21
90
0
LINE
8
Walls
10
160
20
90
11
0
21
90
0
LINE
8
Walls
10
0
20
90
11
0
21
0
0
CIRCLE
8
Fixture
10
45
20
45
40
18
0
ARC
8
Door
10
120
20
0
40
35
50
0
51
90
0
TEXT
8
Notes
10
12
20
105
40
8
1
Sample DXF
0
ENDSEC
0
EOF`;

const emptyBounds = {
  maxX: 100,
  maxY: 100,
  minX: 0,
  minY: 0,
};

const toPoint = (point?: Point): Point | null => {
  if (!point || !Number.isFinite(point.x) || !Number.isFinite(point.y)) {
    return null;
  }
  return { x: point.x, y: point.y };
};

const arcPoints = (entity: DxfEntity) => {
  if (!entity.center || !entity.radius || entity.startAngle === undefined || entity.endAngle === undefined) {
    return [];
  }

  const start = entity.startAngle;
  const end = entity.endAngle < start ? entity.endAngle + 360 : entity.endAngle;
  const steps = Math.max(12, Math.ceil((end - start) / 8));

  return Array.from({ length: steps + 1 }, (_, index) => {
    const angle = ((start + ((end - start) * index) / steps) * Math.PI) / 180;
    return {
      x: entity.center!.x + Math.cos(angle) * entity.radius!,
      y: entity.center!.y + Math.sin(angle) * entity.radius!,
    };
  });
};

const includePoint = (bounds: CadRenderData["bounds"], point: Point) => {
  bounds.minX = Math.min(bounds.minX, point.x);
  bounds.minY = Math.min(bounds.minY, point.y);
  bounds.maxX = Math.max(bounds.maxX, point.x);
  bounds.maxY = Math.max(bounds.maxY, point.y);
};

const buildRenderData = (dxf: { entities?: DxfEntity[] }): CadRenderData => {
  const bounds = {
    maxX: Number.NEGATIVE_INFINITY,
    maxY: Number.NEGATIVE_INFINITY,
    minX: Number.POSITIVE_INFINITY,
    minY: Number.POSITIVE_INFINITY,
  };
  const entities: RenderEntity[] = [];
  const layers = new Set<string>();
  let unsupportedCount = 0;

  for (const entity of dxf.entities ?? []) {
    if (entity.layer) {
      layers.add(entity.layer);
    }

    if (entity.type === "LINE" && entity.vertices?.length) {
      const points = entity.vertices.map(toPoint).filter(Boolean) as Point[];
      points.forEach((point) => includePoint(bounds, point));
      entities.push({ type: "line", points, layer: entity.layer });
      continue;
    }

    if ((entity.type === "LWPOLYLINE" || entity.type === "POLYLINE") && entity.vertices?.length) {
      const points = entity.vertices.map(toPoint).filter(Boolean) as Point[];
      points.forEach((point) => includePoint(bounds, point));
      entities.push({ type: "line", points, layer: entity.layer });
      continue;
    }

    if (entity.type === "CIRCLE" && entity.center && entity.radius) {
      const center = entity.center;
      includePoint(bounds, { x: center.x - entity.radius, y: center.y - entity.radius });
      includePoint(bounds, { x: center.x + entity.radius, y: center.y + entity.radius });
      entities.push({ type: "circle", center, radius: entity.radius, layer: entity.layer });
      continue;
    }

    if (entity.type === "ARC") {
      const points = arcPoints(entity);
      if (points.length) {
        points.forEach((point) => includePoint(bounds, point));
        entities.push({ type: "line", points, layer: entity.layer });
        continue;
      }
    }

    if ((entity.type === "TEXT" || entity.type === "MTEXT") && entity.text) {
      const point = toPoint(entity.startPoint ?? entity.position);
      if (point) {
        includePoint(bounds, point);
        entities.push({
          type: "text",
          point,
          value: entity.text.replaceAll("\\P", " "),
          height: entity.textHeight ?? entity.height ?? 10,
          layer: entity.layer,
        });
        continue;
      }
    }

    unsupportedCount += 1;
  }

  const hasBounds = [bounds.minX, bounds.minY, bounds.maxX, bounds.maxY].every(Number.isFinite);

  return {
    bounds: hasBounds ? bounds : emptyBounds,
    entities,
    entityCount: dxf.entities?.length ?? 0,
    layers: Array.from(layers).sort(),
    unsupportedCount,
  };
};

const renderPath = (points: Point[]) => points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${-point.y}`).join(" ");

const sampleFiles = [
  {
    description: "QCAD 教程里的简单房屋平面图，包含墙体、门和房间标签。",
    fileName: "qcad-floorplan.dxf",
    title: "QCAD 房屋平面图",
  },
  {
    description: "JSCAD 示例库里的大型 floorplan，用来测试复杂图纸加载。",
    fileName: "jscad-floorplan.dxf",
    title: "JSCAD 大型平面图",
  },
  {
    description: "包含多类常见 2D 实体的综合示例。",
    fileName: "three-dxf-demo.dxf",
    title: "综合 demo",
  },
  {
    description: "适合测试折线、线段和图层解析。",
    fileName: "polylines.dxf",
    title: "Polylines",
  },
];

export function CadViewerPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [fileName, setFileName] = useState("sample.dxf");
  const [source, setSource] = useState(sampleDxf);
  const [sampleError, setSampleError] = useState("");
  const [viewBox, setViewBox] = useState<CadViewBox | null>(null);
  const [dragState, setDragState] = useState<DragState | null>(null);

  const parsed = useMemo(() => {
    try {
      const parser = new DxfParser();
      return {
        data: buildRenderData(parser.parseSync(source) as { entities?: DxfEntity[] }),
        error: "",
      };
    } catch (parseError) {
      return {
        data: buildRenderData({}),
        error: parseError instanceof Error ? parseError.message : "DXF 解析失败",
      };
    }
  }, [source]);
  const renderData = parsed.data;

  const fittedViewBox = useMemo(() => {
    const width = Math.max(1, renderData.bounds.maxX - renderData.bounds.minX);
    const height = Math.max(1, renderData.bounds.maxY - renderData.bounds.minY);
    const padding = Math.max(width, height) * 0.08;
    return {
      height: height + padding * 2,
      width: width + padding * 2,
      x: renderData.bounds.minX - padding,
      y: -renderData.bounds.maxY - padding,
    };
  }, [renderData]);

  useEffect(() => {
    setViewBox(fittedViewBox);
  }, [fittedViewBox]);

  const activeViewBox = viewBox ?? fittedViewBox;
  const viewBoxValue = `${activeViewBox.x} ${activeViewBox.y} ${activeViewBox.width} ${activeViewBox.height}`;
  const zoomPercent = Math.round((fittedViewBox.width / activeViewBox.width) * 100);

  const zoomView = (factor: number, origin?: Point) => {
    setViewBox((current) => {
      const next = current ?? fittedViewBox;
      const zoomOrigin = origin ?? {
        x: next.x + next.width / 2,
        y: next.y + next.height / 2,
      };

      return {
        height: next.height * factor,
        width: next.width * factor,
        x: zoomOrigin.x - (zoomOrigin.x - next.x) * factor,
        y: zoomOrigin.y - (zoomOrigin.y - next.y) * factor,
      };
    });
  };

  const resetView = () => {
    setDragState(null);
    setViewBox(fittedViewBox);
  };

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || parsed.error) {
      return;
    }

    const handleNativeWheel = (event: WheelEvent) => {
      event.preventDefault();
      const rect = svg.getBoundingClientRect();
      const origin = {
        x: activeViewBox.x + ((event.clientX - rect.left) / rect.width) * activeViewBox.width,
        y: activeViewBox.y + ((event.clientY - rect.top) / rect.height) * activeViewBox.height,
      };

      zoomView(event.deltaY > 0 ? 1.18 : 0.85, origin);
    };

    svg.addEventListener("wheel", handleNativeWheel, { passive: false });
    return () => svg.removeEventListener("wheel", handleNativeWheel);
  }, [activeViewBox, fittedViewBox, parsed.error]);

  const loadFile = async (file?: File) => {
    if (!file) {
      return;
    }

    setSampleError("");
    setFileName(file.name);
    setSource(await file.text());
  };

  const loadSampleFile = async (nextFileName: string) => {
    try {
      const response = await fetch(`${import.meta.env.BASE_URL}samples/${nextFileName}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setSampleError("");
      setFileName(nextFileName);
      setSource(await response.text());
    } catch (error) {
      setSampleError(error instanceof Error ? error.message : "示例文件加载失败");
    }
  };

  const handlePointerMove = (event: ReactPointerEvent<SVGSVGElement>) => {
    if (!dragState || !svgRef.current) {
      return;
    }

    const rect = svgRef.current.getBoundingClientRect();
    const dx = ((event.clientX - dragState.clientX) / rect.width) * dragState.viewBox.width;
    const dy = ((event.clientY - dragState.clientY) / rect.height) * dragState.viewBox.height;

    setViewBox({
      ...dragState.viewBox,
      x: dragState.viewBox.x - dx,
      y: dragState.viewBox.y - dy,
    });
  };

  return (
    <ToolPage icon={<FileSearch size={28} />} kicker="CAD Viewer" title="CAD 文件查看器">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <Card className="overflow-hidden">
          <CardHeader className="border-b">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <CardTitle>{fileName}</CardTitle>
                <CardDescription>当前支持 DXF 文件的常见 2D 实体预览。</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" type="button" onClick={() => inputRef.current?.click()}>
                  <Upload />
                  上传 DXF
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => {
                    setSampleError("");
                    setFileName("sample.dxf");
                    setSource(sampleDxf);
                  }}
                >
                  <RefreshCw />
                  示例
                </Button>
              </div>
            </div>
            <input
              ref={inputRef}
              className="hidden"
              type="file"
              accept=".dxf,text/plain"
              onChange={(event) => void loadFile(event.target.files?.[0])}
            />
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative h-[620px] bg-zinc-950">
              {!parsed.error ? (
                <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-lg border border-white/10 bg-zinc-950/85 p-1 text-zinc-100 shadow-lg backdrop-blur">
                  <Button size="icon" variant="ghost" type="button" title="放大" onClick={() => zoomView(0.82)}>
                    <ZoomIn />
                  </Button>
                  <Button size="icon" variant="ghost" type="button" title="缩小" onClick={() => zoomView(1.22)}>
                    <ZoomOut />
                  </Button>
                  <Button size="icon" variant="ghost" type="button" title="适配视图" onClick={resetView}>
                    <Maximize2 />
                  </Button>
                  <span className="min-w-14 px-2 text-center text-xs tabular-nums text-zinc-300">{zoomPercent}%</span>
                </div>
              ) : null}
              {parsed.error ? (
                <div className="grid h-full place-items-center p-6 text-center text-sm text-destructive">{parsed.error}</div>
              ) : (
                <svg
                  ref={svgRef}
                  className={`h-full w-full touch-none select-none ${dragState ? "cursor-grabbing" : "cursor-grab"}`}
                  viewBox={viewBoxValue}
                  role="img"
                  aria-label="CAD 预览"
                  onDoubleClick={resetView}
                  onPointerDown={(event) => {
                    event.currentTarget.setPointerCapture(event.pointerId);
                    setDragState({
                      clientX: event.clientX,
                      clientY: event.clientY,
                      viewBox: activeViewBox,
                    });
                  }}
                  onPointerLeave={() => setDragState(null)}
                  onPointerMove={handlePointerMove}
                  onPointerUp={() => setDragState(null)}
                >
                  <rect x="-100000" y="-100000" width="200000" height="200000" fill="#09090b" />
                  <g fill="none" stroke="#67e8f9" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke">
                    {renderData.entities.map((entity, index) => {
                      if (entity.type === "line") {
                        return <path key={index} d={renderPath(entity.points)} strokeWidth={1.5} />;
                      }

                      if (entity.type === "circle") {
                        return <circle key={index} cx={entity.center.x} cy={-entity.center.y} r={entity.radius} strokeWidth={1.5} />;
                      }

                      return (
                        <text
                          key={index}
                          x={entity.point.x}
                          y={-entity.point.y}
                          fill="#e0f2fe"
                          fontSize={entity.height}
                          stroke="none"
                        >
                          {entity.value}
                        </text>
                      );
                    })}
                  </g>
                </svg>
              )}
            </div>
          </CardContent>
        </Card>

        <aside className="grid gap-4 self-start lg:sticky lg:top-5">
          <Card>
            <CardHeader>
              <CardTitle>测试文件</CardTitle>
              <CardDescription>已下载到项目里的 DXF 样例，点一下就能加载。</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              {sampleFiles.map((sample) => (
                <Button
                  key={sample.fileName}
                  className="h-auto justify-start px-3 py-2 text-left"
                  variant={fileName === sample.fileName ? "default" : "outline"}
                  type="button"
                  onClick={() => void loadSampleFile(sample.fileName)}
                >
                  <span>
                    <span className="block font-medium">{sample.title}</span>
                    <span className="block text-xs opacity-75">{sample.description}</span>
                  </span>
                </Button>
              ))}
              {sampleError ? <p className="text-sm text-destructive">加载失败：{sampleError}</p> : null}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>文件信息</CardTitle>
              <CardDescription>解析后的 DXF 概览。</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              <div className="flex items-center justify-between rounded-lg border bg-muted/35 p-3">
                <span className="text-sm text-muted-foreground">实体总数</span>
                <strong>{renderData.entityCount}</strong>
              </div>
              <div className="flex items-center justify-between rounded-lg border bg-muted/35 p-3">
                <span className="text-sm text-muted-foreground">已渲染</span>
                <strong>{renderData.entities.length}</strong>
              </div>
              <div className="flex items-center justify-between rounded-lg border bg-muted/35 p-3">
                <span className="text-sm text-muted-foreground">暂未支持</span>
                <strong>{renderData.unsupportedCount}</strong>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>图层</CardTitle>
              <CardDescription>{renderData.layers.length ? "文件中的图层名称。" : "没有读取到图层。"}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {renderData.layers.length ? renderData.layers.map((layer) => <Badge key={layer} variant="secondary">{layer}</Badge>) : <Badge variant="outline">无图层</Badge>}
            </CardContent>
          </Card>
        </aside>
      </section>
    </ToolPage>
  );
}
