import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Home, Layers, LocateFixed, Search, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  botwMapMarkers,
  botwMarkerCategories,
  defaultBotwCategoryIds,
  type BotwMapMarker,
} from '@/data/botw-map-data';

const mapBounds = {
  northEast: [-206, 221] as L.LatLngTuple,
  southWest: [-49.875, 34.25] as L.LatLngTuple,
};

const tileMap = {
  attribution: 'Map tiles: dragonir/zelda-map assets/maps',
  maxZoom: 7,
  minZoom: 0,
  nativeMinZoom: 0,
  nativeMaxZoom: 7,
  url: `${import.meta.env.BASE_URL}maps/zelda-tiles/{z}/{x}/{y}.png`,
};

const displayMarkerCategories = botwMarkerCategories.map((category) =>
  category.id === '1925' ? { ...category, label: '神庙' } : category,
);

const categoryMap = Object.fromEntries(
  displayMarkerCategories.map((category) => [category.id, category]),
);

const categoriesByParent = displayMarkerCategories
  .filter((category) => category.parentId === null)
  .map((parent) => ({
    ...parent,
    children: displayMarkerCategories.filter(
      (category) => category.parentId === parent.id,
    ),
  }))
  .map((parent) => ({
    ...parent,
    groupCount:
      parent.count +
      parent.children.reduce((total, child) => total + child.count, 0),
  }));

const botwGameIconUrl = `${import.meta.env.BASE_URL}icons/botw-logo.jpg`;

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const getMarkerDisplayName = (marker: BotwMapMarker) =>
  marker.nameZh || marker.name;

const getMarkerDisplayDescription = (marker: BotwMapMarker) =>
  marker.descriptionZh || marker.description;

const isLocationMarker = (marker: BotwMapMarker) => {
  const category = categoryMap[marker.categoryId];
  return marker.categoryId === '1920' || category?.parentId === '1920';
};

const shouldShowLabel = (marker: BotwMapMarker) => {
  // 呀哈哈（Korok Seeds）数量太多，不显示文字标签，避免遮盖地图
  if (marker.categoryId === '1916') return false;
  return true;
};

const getLabelMinZoom = (marker: BotwMapMarker) => {
  // 地点类：神庙在 zoom 4 才显示，时之神殿/大精灵在 zoom 3，其余地点 zoom 2
  if (isLocationMarker(marker)) {
    if (marker.categoryId === '1925') return 4;
    if (marker.categoryId === '1927' || marker.categoryId === '1937') return 3;
    return 2;
  }
  // 非地点类标注：在较高缩放级别才显示标签，避免低缩放时过于密集
  return 5;
};

const getMarkerPopupHtml = (marker: BotwMapMarker) => {
  const category = categoryMap[marker.categoryId];
  const displayName = getMarkerDisplayName(marker);
  const displayDescription = getMarkerDisplayDescription(marker);

  return [
    `<strong>${escapeHtml(displayName)}</strong>`,
    displayName !== marker.name
      ? `<br/><small>${escapeHtml(marker.name)}</small>`
      : '',
    `<br/><span>${escapeHtml(category?.label ?? '未分类')} / ${escapeHtml(category?.parentName ?? category?.name ?? '标注')}</span>`,
    displayDescription
      ? `<br/><small>${escapeHtml(displayDescription)}</small>`
      : '',
    displayDescription && displayDescription !== marker.description
      ? `<br/><small>${escapeHtml(marker.description)}</small>`
      : '',
    `<br/><small>x: ${marker.x.toFixed(3)}, y: ${marker.y.toFixed(3)}</small>`,
  ].join('');
};

export function BotwMapPage() {
  const mapElementRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerLayerRef = useRef<L.LayerGroup | null>(null);
  const [activeCategoryIds, setActiveCategoryIds] = useState<Set<string>>(
    () => new Set(defaultBotwCategoryIds),
  );
  const [query, setQuery] = useState('');
  const [searchPanelOpen, setSearchPanelOpen] = useState(false);
  const [layerPanelOpen, setLayerPanelOpen] = useState(false);
  const [zoom, setZoom] = useState(2);

  const filteredMarkers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return botwMapMarkers.filter((marker) => {
      const category = categoryMap[marker.categoryId];
      const matchesCategory = normalizedQuery
        ? true
        : activeCategoryIds.has(marker.categoryId);
      const matchesQuery = normalizedQuery
        ? `${marker.name} ${marker.nameZh} ${marker.description} ${marker.descriptionZh} ${category?.label ?? ''} ${category?.name ?? ''} ${category?.parentName ?? ''}`
            .toLowerCase()
            .includes(normalizedQuery)
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [activeCategoryIds, query]);

  useEffect(() => {
    if (!mapElementRef.current || mapRef.current) {
      return;
    }

    const bounds = L.latLngBounds(mapBounds.southWest, mapBounds.northEast);
    const map = L.map(mapElementRef.current, {
      attributionControl: false,
      crs: L.CRS.Simple,
      maxBounds: bounds,
      maxBoundsViscosity: 1,
      maxZoom: tileMap.maxZoom,
      minZoom: tileMap.minZoom,
      zoomDelta: 0.5,
      zoomControl: false,
      zoomSnap: 0.5,
    });

    L.tileLayer(tileMap.url, {
      attribution: tileMap.attribution,
      bounds,
      maxNativeZoom: tileMap.nativeMaxZoom,
      maxZoom: tileMap.maxZoom,
      minNativeZoom: tileMap.nativeMinZoom,
      minZoom: tileMap.minZoom,
      noWrap: true,
    }).addTo(map);
    map.setView([0, 0], 2);
    setZoom(map.getZoom());
    window.setTimeout(() => map.invalidateSize(), 0);
    map.on('zoomend', () => setZoom(map.getZoom()));
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
      const category = categoryMap[marker.categoryId];
      const popupHtml = getMarkerPopupHtml(marker);

      L.circleMarker([marker.y, marker.x], {
        color: '#111827',
        fillColor: category?.color ?? '#38bdf8',
        fillOpacity: 0.95,
        radius: marker.categoryId === '1916' ? 5 : 7,
        weight: 2,
      })
        .bindPopup(popupHtml, { className: 'botw-marker-popup' })
        .addTo(markerLayer);

      if (
        shouldShowLabel(marker) &&
        (query.trim() || zoom >= getLabelMinZoom(marker))
      ) {
        L.marker([marker.y, marker.x], {
          icon: L.divIcon({
            className: 'botw-location-label',
            html: escapeHtml(getMarkerDisplayName(marker)),
            iconAnchor: [-10, 14],
          }),
          keyboard: false,
        })
          .bindPopup(popupHtml, { className: 'botw-marker-popup' })
          .addTo(markerLayer);
      }
    });
  }, [filteredMarkers, query, zoom]);

  useEffect(() => {
    if (!searchPanelOpen) {
      return;
    }

    window.setTimeout(() => searchInputRef.current?.focus(), 0);
  }, [searchPanelOpen]);

  const toggleCategory = (categoryId: string) => {
    setActiveCategoryIds((current) => {
      const next = new Set(current);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  const focusMarker = (marker: BotwMapMarker) => {
    const map = mapRef.current;
    if (!map) {
      return;
    }

    map.setView([marker.y, marker.x], Math.max(map.getZoom(), 5), {
      animate: true,
    });
    window.setTimeout(() => {
      L.popup({ className: 'botw-marker-popup' })
        .setLatLng([marker.y, marker.x])
        .setContent(getMarkerPopupHtml(marker))
        .openOn(map);
    }, 260);
  };

  const resetView = () => {
    mapRef.current?.setView([0, 0], 2, { animate: true });
  };

  return (
    <main className="relative h-svh overflow-hidden bg-stone-950">
      <div
        ref={mapElementRef}
        className="botw-map absolute inset-0 bg-stone-900"
      />

      <div className="pointer-events-none absolute inset-0 z-[500] p-3 sm:p-4">
        <div className="pointer-events-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="size-10 rounded-full border border-white/20 bg-black/45 text-white shadow-xl backdrop-blur hover:bg-black/60"
          >
            <Link to="/" aria-label="返回入口">
              <Home className="size-4" />
            </Link>
          </Button>
          <img
            src={botwGameIconUrl}
            alt="Zelda Breath of the Wild"
            className="size-10 rounded-full border border-white/20 object-cover shadow-xl"
            draggable={false}
          />
        </div>

        <div className="pointer-events-auto absolute right-3 top-20 sm:right-4 sm:top-4">
          {searchPanelOpen ? (
            <section className="w-[min(calc(100vw-24px),390px)]">
              <div className="grid gap-3 rounded-lg border bg-card/92 p-3 shadow-xl backdrop-blur">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="flex items-center gap-2 text-sm font-semibold">
                      <Search className="size-4" />
                      搜索
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      {botwMapMarkers.length} 个标注，当前显示{' '}
                      {filteredMarkers.length} 个
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1">
                    {query ? (
                      <Button
                        variant="ghost"
                        size="icon"
                        type="button"
                        onClick={() => setQuery('')}
                        aria-label="清空搜索"
                        className="size-8"
                      >
                        <X className="size-4" />
                      </Button>
                    ) : null}
                    <Button
                      variant="ghost"
                      size="icon"
                      type="button"
                      onClick={() => setSearchPanelOpen(false)}
                      aria-label="关闭搜索"
                      className="size-8"
                    >
                      <X className="size-4" />
                    </Button>
                  </div>
                </div>
                <Input
                  ref={searchInputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="搜索：神庙、驿站、Korok..."
                />
                <div className="grid max-h-[min(42svh,380px)] gap-2 overflow-auto pr-1">
                  {filteredMarkers.length === 0 ? (
                    <p className="rounded-md border bg-muted/35 p-3 text-sm text-muted-foreground">
                      没有匹配的标注。
                    </p>
                  ) : null}
                  {filteredMarkers.map((marker) => {
                    const category = categoryMap[marker.categoryId];
                    const displayName = getMarkerDisplayName(marker);
                    return (
                      <button
                        key={marker.id}
                        type="button"
                        onClick={() => focusMarker(marker)}
                        className="grid gap-1 rounded-md border bg-background/72 p-3 text-left transition hover:border-primary/35 hover:bg-background"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <strong className="truncate text-sm">
                            {displayName}
                          </strong>
                          <Badge
                            variant="outline"
                            className="shrink-0 bg-card/80"
                          >
                            {category?.label ?? '标注'}
                          </Badge>
                        </div>
                        {displayName !== marker.name ? (
                          <span className="truncate text-xs text-muted-foreground">
                            {marker.name}
                          </span>
                        ) : null}
                        <span className="truncate text-xs text-muted-foreground">
                          {category?.parentName ?? category?.name ?? '未分类'} /
                          x {marker.x.toFixed(3)}, y {marker.y.toFixed(3)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>
          ) : (
            <Button
              variant={query ? 'default' : 'secondary'}
              size="icon"
              type="button"
              onClick={() => setSearchPanelOpen(true)}
              aria-label="展开搜索"
              className="size-10 shadow-xl"
            >
              <Search className="size-4" />
            </Button>
          )}
        </div>

        <div className="pointer-events-auto absolute bottom-3 left-3 flex flex-col gap-2 sm:bottom-4 sm:left-4">
          <Button
            variant="secondary"
            size="icon"
            type="button"
            onClick={resetView}
            aria-label="复位地图"
            className="size-10 shadow-xl"
          >
            <LocateFixed className="size-4" />
          </Button>
          <Button
            variant={layerPanelOpen ? 'default' : 'secondary'}
            size="icon"
            type="button"
            onClick={() => setLayerPanelOpen((open) => !open)}
            aria-label="标注图层"
            className="size-10 shadow-xl"
          >
            <Layers className="size-4" />
          </Button>
        </div>

        {layerPanelOpen ? (
          <section className="pointer-events-auto absolute bottom-28 left-3 w-[min(calc(100vw-24px),360px)] rounded-lg border bg-card/92 p-3 shadow-xl backdrop-blur sm:left-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <h2 className="flex items-center gap-2 text-sm font-semibold">
                  <Layers className="size-4" />
                  标注图层
                </h2>
                <p className="text-xs text-muted-foreground">默认显示神庙</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={() => setLayerPanelOpen(false)}
                aria-label="关闭图层"
                className="size-8"
              >
                <X className="size-4" />
              </Button>
            </div>
            <div className="mb-3 grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                type="button"
                onClick={() =>
                  setActiveCategoryIds(
                    new Set(
                      botwMarkerCategories
                        .filter((category) => category.count > 0)
                        .map((category) => category.id),
                    ),
                  )
                }
              >
                全部
              </Button>
              <Button
                variant="outline"
                size="sm"
                type="button"
                onClick={() => setActiveCategoryIds(new Set())}
              >
                清空
              </Button>
            </div>
            <div className="grid max-h-[min(48svh,420px)] gap-3 overflow-auto pr-1">
              {categoriesByParent.map((parent) => (
                <div key={parent.id} className="grid gap-2">
                  <div className="flex items-center justify-between gap-3 text-xs font-medium uppercase text-muted-foreground">
                    <span>{parent.label}</span>
                    {parent.groupCount > 0 ? (
                      <span>{parent.groupCount}</span>
                    ) : null}
                  </div>
                  {[parent, ...parent.children].map((category) =>
                    category.count > 0 ? (
                      <label
                        key={category.id}
                        className="flex items-center justify-between gap-3 rounded-md border bg-background/72 p-3"
                      >
                        <span className="flex min-w-0 items-center gap-2 text-sm">
                          <span
                            className="size-3 shrink-0 rounded-full border border-black/30"
                            style={{ background: category.color }}
                          />
                          <span className="truncate">{category.label}</span>
                          <span className="text-xs text-muted-foreground">
                            ({category.count})
                          </span>
                        </span>
                        <input
                          type="checkbox"
                          checked={activeCategoryIds.has(category.id)}
                          onChange={() => toggleCategory(category.id)}
                          className="size-4 shrink-0 accent-primary"
                        />
                      </label>
                    ) : null,
                  )}
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
