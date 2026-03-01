"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamic imports to prevent SSR mismatch for leaflet
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Polyline = dynamic(() => import("react-leaflet").then((mod) => mod.Polyline), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });

// Leaflet Events hook wrapper dynamically imported
const ClickEventWrapper = dynamic(
    () => import("react-leaflet").then((mod) => {
        return function useMapClick({ onClick }: { onClick: (e: any) => void }) {
            const mapEvents = require("react-leaflet").useMapEvents;
            mapEvents({ click: onClick });
            return null;
        }
    }),
    { ssr: false }
);

interface DrawableMapProps {
    points: [number, number][];
    onAddPoint: (point: [number, number]) => void;
    center?: [number, number];
    zoom?: number;
}

export default function DrawableMapComponent({
    points,
    onAddPoint,
    center = [40.4168, -3.7038], // Madrid default 
    zoom = 6
}: DrawableMapProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="w-full h-full bg-[#121814] flex items-center justify-center text-white/20">Cargando motor 3D...</div>;

    const handleMapClick = (e: any) => {
        onAddPoint([e.latlng.lat, e.latlng.lng]);
    };

    return (
        <div className="w-full h-full relative z-0">
            <MapContainer
                center={center}
                zoom={zoom}
                className="w-full h-full cursor-crosshair"
                style={{ height: "100%", width: "100%", background: "#1a231d" }}
                zoomControl={true}
                attributionControl={false}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />

                <ClickEventWrapper onClick={handleMapClick} />

                {points.length > 0 && (
                    <Polyline positions={points} color="#10b981" weight={4} opacity={0.9} dashArray="5, 10" />
                )}

                {/* Draw markers on start and end for visual feedback if points exist, or simple circles, but without leaflet icons to avoid missing assets error */}
                {points.map((p, i) => (
                    <Polyline key={i} positions={[p, p]} color={i === 0 ? "#3b82f6" : "#10b981"} weight={12} opacity={1} />
                ))}
            </MapContainer>

            {/* HUD Overlay */}
            <div className="absolute bottom-4 left-4 z-[400] bg-black/80 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10 shadow-lg flex items-center text-xs font-mono text-white/70 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
                Haz clic en el mapa para dibujar tus coordenadas maestras
            </div>
            {points.length > 0 && (
                <div className="absolute top-4 right-4 z-[400] bg-black/80 backdrop-blur-md px-3 py-2 rounded-lg border border-emerald-500/30 text-emerald-400 font-bold text-sm shadow-lg pointer-events-none">
                    {points.length} puntos trazados
                </div>
            )}
        </div>
    );
}
