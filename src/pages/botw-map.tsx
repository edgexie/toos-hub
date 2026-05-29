import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Layers, LocateFixed, MapPinned, Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { ToolPage } from "@/components/layout/tool-page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type MarkerType = "tower" | "shrine" | "stable" | "village" | "memory" | "korok" | "landmark";

type MapMarker = {
  id: string;
  name: string;
  type: MarkerType;
  x: number;
  y: number;
  region: string;
  description: string;
};

const mapSize = {
  height: 5200,
  width: 6500,
};

const mapImage = {
  attribution: "Map image: Zelda Dungeon Wiki Korok Map, fair-use game map",
  url: `${import.meta.env.BASE_URL}maps/botw-korok-map.jpg`,
};

const markerTypes: Array<{ id: MarkerType; label: string; color: string }> = [
  { id: "tower", label: "塔", color: "#f59e0b" },
  { id: "shrine", label: "神庙", color: "#22d3ee" },
  { id: "stable", label: "驿站", color: "#a16207" },
  { id: "village", label: "村镇", color: "#22c55e" },
  { id: "memory", label: "回忆点", color: "#a78bfa" },
  { id: "korok", label: "呀哈哈", color: "#84cc16" },
  { id: "landmark", label: "地点", color: "#f43f5e" },
];

const markers: MapMarker[] = [];

const markerTypeMap = Object.fromEntries(markerTypes.map((type) => [type.id, type])) as Record<
  MarkerType,
  (typeof markerTypes)[number]
>;

const fallbackMapSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${mapSize.width}" height="${mapSize.height}" viewBox="0 0 ${mapSize.width} ${mapSize.height}">
  <defs>
    <linearGradient id="land" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#c5d99a"/>
      <stop offset="0.45" stop-color="#8fb878"/>
      <stop offset="1" stop-color="#d7bd7b"/>
    </linearGradient>
    <radialGradient id="snow" cx="0.25" cy="0.18" r="0.45">
      <stop offset="0" stop-color="#f5f7f3"/>
      <stop offset="1" stop-color="#93a58d"/>
    </radialGradient>
    <filter id="paper">
      <feTurbulence baseFrequency="0.012" numOctaves="4" seed="8"/>
      <feColorMatrix type="saturate" values="0.28"/>
      <feBlend mode="multiply" in2="SourceGraphic"/>
    </filter>
  </defs>
  <rect width="${mapSize.width}" height="${mapSize.height}" fill="#91b5a4"/>
  <path d="M250 225 C530 80 835 150 1110 120 C1515 75 1945 160 2180 455 C2365 685 2295 1035 2100 1270 C1835 1590 1360 1525 1065 1475 C720 1415 260 1535 115 1160 C-5 850 20 390 250 225Z" fill="url(#land)" stroke="#60724b" stroke-width="12"/>
  <path d="M0 1140 C315 990 520 1085 790 995 C1115 885 1270 655 1590 690 C1910 725 2080 930 2400 845 L2400 1600 L0 1600Z" fill="#cda05f" opacity="0.72"/>
  <path d="M0 0 H820 C725 170 595 245 410 270 C220 296 95 250 0 195Z" fill="url(#snow)" opacity="0.95"/>
  <path d="M1805 110 C1975 95 2165 198 2265 360 C2155 430 2015 450 1870 420 C1765 355 1748 220 1805 110Z" fill="#b75d45" opacity="0.62"/>
  <path d="M1260 0 C1370 210 1312 395 1180 520 C1060 632 1065 795 1195 942 C1285 1044 1288 1188 1180 1320" fill="none" stroke="#4ba3b7" stroke-width="34" opacity="0.68"/>
  <path d="M642 410 C820 472 910 585 1018 708 C1140 848 1245 900 1448 888" fill="none" stroke="#4ba3b7" stroke-width="23" opacity="0.55"/>
  <g fill="#617957" opacity="0.65">
    <path d="M955 610 l70 -135 l82 135Z"/>
    <path d="M1060 635 l62 -118 l76 118Z"/>
    <path d="M1510 1015 l68 -130 l76 130Z"/>
    <path d="M1588 1038 l54 -106 l64 106Z"/>
    <path d="M450 780 l72 -134 l88 134Z"/>
    <path d="M540 802 l58 -112 l71 112Z"/>
  </g>
  <g fill="#5f8d57" opacity="0.35">
    <circle cx="1030" cy="440" r="150"/>
    <circle cx="1115" cy="390" r="112"/>
    <circle cx="925" cy="470" r="95"/>
    <circle cx="1840" cy="1035" r="160"/>
    <circle cx="1965" cy="965" r="105"/>
  </g>
  <g fill="#38533f" font-family="serif" font-size="42" opacity="0.72">
    <text x="132" y="165">Hebra</text>
    <text x="980" y="455">Great Forest</text>
    <text x="1810" y="360">Akkala</text>
    <text x="1380" y="760">Lanayru</text>
    <text x="1110" y="1115">Necluda</text>
    <text x="440" y="1345">Gerudo</text>
    <text x="650" y="1180">Great Plateau</text>
  </g>
  <rect width="${mapSize.width}" height="${mapSize.height}" fill="transparent" filter="url(#paper)" opacity="0.18"/>
</svg>`;

const fallbackMapUrl = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(fallbackMapSvg)}`;

export function BotwMapPage() {
  const mapElementRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerLayerRef = useRef<L.LayerGroup | null>(null);
  const [activeTypes, setActiveTypes] = useState<Set<MarkerType>>(() => new Set(markerTypes.map((type) => type.id)));
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  const filteredMarkers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return markers.filter((marker) => {
      const matchesType = activeTypes.has(marker.type);
      const matchesQuery = normalizedQuery
        ? `${marker.name} ${marker.region} ${marker.description}`.toLowerCase().includes(normalizedQuery)
        : true;
      return matchesType && matchesQuery;
    });
  }, [activeTypes, query]);

  useEffect(() => {
    if (!mapElementRef.current || mapRef.current) {
      return;
    }

    const bounds = L.latLngBounds([0, 0], [mapSize.height, mapSize.width]);
    const map = L.map(mapElementRef.current, {
      attributionControl: false,
      crs: L.CRS.Simple,
      maxBounds: bounds.pad(0.18),
      maxBoundsViscosity: 0.6,
      maxZoom: 2,
      minZoom: -4,
      zoomSnap: 0.25,
    });

    const imageLayer = L.imageOverlay(mapImage.url, bounds, {
      errorOverlayUrl: fallbackMapUrl,
      crossOrigin: "anonymous",
    }).addTo(map);
    imageLayer.once("error", () => {
      setCursor(null);
    });
    map.fitBounds(bounds);
    map.on("click", (event) => {
      setCursor({
        x: Math.round(event.latlng.lng),
        y: Math.round(event.latlng.lat),
      });
    });

    mapRef.current = map;
    markerLayerRef.current = L.layerGroup().addTo(map);

    return () => {
      map.remove();
      mapRef.current = null;
      markerLayerRef.current = null;
    };
  }, []);

  useEffect(() => {
    const markerLayer = markerLayerRef.current;
    if (!markerLayer) {
      return;
    }

    markerLayer.clearLayers();
    filteredMarkers.forEach((marker) => {
      const type = markerTypeMap[marker.type];
      L.circleMarker([marker.y, marker.x], {
        color: "#111827",
        fillColor: type.color,
        fillOpacity: 0.95,
        radius: 8,
        weight: 2,
      })
        .bindPopup(
          `<strong>${marker.name}</strong><br/><span>${type.label} / ${marker.region}</span><br/><small>${marker.description}</small><br/><small>x: ${marker.x}, y: ${marker.y}</small>`,
        )
        .addTo(markerLayer);
    });
  }, [filteredMarkers]);

  const toggleType = (type: MarkerType) => {
    setActiveTypes((current) => {
      const next = new Set(current);
      if (next.has(type)) {
        next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
  };

  const focusMarker = (marker: MapMarker) => {
    const map = mapRef.current;
    if (!map) {
      return;
    }

    map.setView([marker.y, marker.x], Math.max(map.getZoom(), 0.8), { animate: true });
    setCursor({ x: marker.x, y: marker.y });
  };

  const resetView = () => {
    mapRef.current?.fitBounds(L.latLngBounds([0, 0], [mapSize.height, mapSize.width]), { animate: true });
  };

  return (
    <ToolPage icon={<MapPinned size={28} />} kicker="BOTW Map" title="旷野之息地图">
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Card className="overflow-hidden">
          <CardHeader className="border-b">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <CardTitle>地图漫游</CardTitle>
                <CardDescription>Leaflet 图片底图模式，当前底图自带全部呀哈哈位置标注。</CardDescription>
              </div>
              <Button variant="outline" type="button" onClick={resetView}>
                <LocateFixed />
                复位
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div ref={mapElementRef} className="botw-map h-[min(72svh,720px)] min-h-[520px] w-full bg-stone-900" />
          </CardContent>
        </Card>

        <aside className="grid gap-4 self-start xl:sticky xl:top-5">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="size-4" />
                搜索
              </CardTitle>
              <CardDescription>叠加标注数据接入后，可按名称、区域或备注筛选。</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索：神庙、村镇、区域..." />
              <div className="grid max-h-64 gap-2 overflow-auto pr-1">
                {markers.length === 0 ? (
                  <p className="rounded-lg border bg-muted/35 p-3 text-sm leading-6 text-muted-foreground">
                    当前版本使用自带兴趣点的底图，全部呀哈哈位置已经画在图片上；可先通过拖拽和缩放查看。后续再接入结构化 POI 数据后，这里会恢复搜索定位。
                  </p>
                ) : null}
                {markers.length > 0 && filteredMarkers.length === 0 ? <p className="text-sm text-muted-foreground">没有匹配的标注。</p> : null}
                {filteredMarkers.map((marker) => {
                  const type = markerTypeMap[marker.type];
                  return (
                    <button
                      key={marker.id}
                      type="button"
                      onClick={() => focusMarker(marker)}
                      className="grid gap-1 rounded-lg border bg-muted/35 p-3 text-left transition hover:border-primary/35 hover:bg-muted"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <strong className="text-sm">{marker.name}</strong>
                        <Badge variant="outline">{type.label}</Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {marker.region} / x {marker.x}, y {marker.y}
                      </span>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="size-4" />
                标注图层
              </CardTitle>
              <CardDescription>结构化叠加标注接入后，可在这里切换类型。</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              {markers.length === 0 ? (
                <div className="rounded-lg border bg-muted/35 p-3 text-sm text-muted-foreground">底图标注已内嵌在图片中，暂不支持按类型隐藏。</div>
              ) : (
                markerTypes.map((type) => (
                  <label key={type.id} className="flex items-center justify-between gap-3 rounded-lg border bg-muted/35 p-3">
                    <span className="flex items-center gap-2 text-sm">
                      <span className="size-3 rounded-full border border-black/30" style={{ background: type.color }} />
                      {type.label}
                    </span>
                    <input
                      type="checkbox"
                      checked={activeTypes.has(type.id)}
                      onChange={() => toggleType(type.id)}
                      className="size-4 accent-primary"
                    />
                  </label>
                ))
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>坐标</CardTitle>
              <CardDescription>点击地图读取图片坐标，方便后续录入标注。</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              <div className="rounded-lg border bg-muted/35 p-3 font-mono text-sm">
                {cursor ? `x: ${cursor.x}, y: ${cursor.y}` : "点击地图获取坐标"}
              </div>
              <div className="text-xs leading-5 text-muted-foreground">
                当前底图来自在线高清图源：{mapImage.attribution}。后续替换为本地授权资源时，保持图片宽高和标注坐标体系一致即可。
              </div>
            </CardContent>
          </Card>
        </aside>
      </section>
    </ToolPage>
  );
}
