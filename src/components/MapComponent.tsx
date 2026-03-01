"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { Maximize } from "lucide-react";

// Dynamic imports to prevent SSR mismatch for leaflet
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Polyline = dynamic(() => import("react-leaflet").then((mod) => mod.Polyline), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const CircleMarker = dynamic(() => import("react-leaflet").then((mod) => mod.CircleMarker), { ssr: false });

interface MapComponentProps {
    center: [number, number];
    zoom: number;
    coordinates?: [number, number][];
    interactive?: boolean;
}

export default function MapComponent({
    center,
    zoom,
    coordinates = [],
    interactive = true
}: MapComponentProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="w-full h-full bg-[#121814] flex items-center justify-center text-white/20">Cargando 3D Engine...</div>;

    // Toggle container classes if fullscreen is active
    const containerClasses = isFullscreen
        ? "fixed inset-0 z-[9999] bg-black"
        : "w-full h-full relative z-0";

    return (
        <div className={containerClasses}>
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={interactive}
                dragging={interactive}
                doubleClickZoom={interactive}
                zoomControl={interactive}
                attributionControl={false}
                style={{ height: "100%", width: "100%", background: "#1a231d" }}
                className={interactive ? "cursor-grab active:cursor-grabbing" : "cursor-default"}
            >
                {/* Premium Dark Theme Tile for CartoDB */}
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />

                {/* Real tracking path simulating a GPX */}
                {coordinates.length > 0 && (
                    <Polyline
                        positions={coordinates}
                        color="#10b981"
                        weight={5}
                        opacity={0.9}
                        lineJoin="round"
                    />
                )}

                {/* Start and End visual markers using standard SVG circles */}
                {coordinates.length > 0 && (
                    <>
                        <CircleMarker
                            center={coordinates[0]}
                            radius={8}
                            pathOptions={{ fillColor: "#3b82f6", color: "white", weight: 2, fillOpacity: 1 }}
                        />
                        <CircleMarker
                            center={coordinates[coordinates.length - 1]}
                            radius={8}
                            pathOptions={{ fillColor: "#ef4444", color: "white", weight: 2, fillOpacity: 1 }}
                        />
                    </>
                )}
            </MapContainer>

            {interactive && (
                <button
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="absolute top-4 right-4 z-[400] bg-black/80 backdrop-blur-md p-2.5 rounded-lg border border-white/10 shadow-lg text-white/70 hover:text-white hover:bg-emerald-500 hover:border-emerald-400 transition-all"
                    title={isFullscreen ? "Cerrar pantalla completa" : "Ver en pantalla completa"}
                >
                    <Maximize className="w-5 h-5" />
                </button>
            )}
        </div>
    );
}
