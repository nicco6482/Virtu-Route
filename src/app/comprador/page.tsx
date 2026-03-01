"use client";

import { Search, PenLine } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BuyerDashboard() {
    const routes = Array(8).fill({
        title: "Ruta de la Costa",
        completion: 70,
        mapImg: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=600&auto=format&fit=crop"
    });

    return (
        <div className="flex flex-col h-full bg-[#0a0f0c] text-white overflow-y-auto w-full">
            {/* Header */}
            <header className="px-12 h-24 flex items-center justify-between shrink-0">
                <h1 className="text-2xl font-bold tracking-tight text-white/90">Bienvenido de nuevo, Ana</h1>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2">
                            <Search className="w-4 h-4 text-white/40" />
                        </div>
                        <input type="text" placeholder="Base" className="h-10 pl-9 pr-4 bg-[#121814] border border-white/5 rounded-full text-sm outline-none focus:border-emerald-500/50 w-48 text-white/70" />
                    </div>
                    <div className="w-10 h-10 rounded-xl border border-white/5 flex items-center justify-center bg-[#121814] hover:bg-white/5 cursor-pointer transition-colors">
                        <PenLine className="w-4 h-4 text-white/60" />
                    </div>
                </div>
            </header>

            <div className="px-12 pb-12 flex-1">
                <h2 className="text-3xl font-bold tracking-tight mb-10">Mis rutas compradas</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {routes.map((route, i) => (
                        <Card key={i} className="bg-[#121814] border-white/5 rounded-2xl overflow-hidden shadow-xl shadow-black/40">
                            <CardContent className="p-4 flex flex-col gap-4">

                                {/* Header Completada */}
                                <div className="flex items-center justify-between text-[15px] font-medium px-1">
                                    <span className="text-white/80">Completada</span>
                                    <span className="text-white/90">{route.completion}%</span>
                                </div>

                                {/* Simulated Map Previews */}
                                <div className="relative h-36 w-full overflow-hidden rounded-xl border border-white/5 group">
                                    <Image
                                        src={route.mapImg}
                                        alt="Map"
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                    {/* Fake Satellite route polyline */}
                                    <svg className="absolute inset-0 w-full h-full drop-shadow-md pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <polyline points="10,60 30,50 40,70 60,60 80,40 90,30" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="80" cy="40" r="3" fill="white" />
                                    </svg>
                                </div>

                                {/* Acciones */}
                                <div className="flex flex-col gap-3 mt-2">
                                    <Button className="w-full h-11 bg-emerald-600/90 hover:bg-emerald-500 text-white font-medium rounded-lg text-[15px] shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] transition-all">
                                        Acceder al mapa
                                    </Button>
                                    <Button variant="link" className="w-full text-white/60 hover:text-white font-medium text-sm h-8 underline decoration-white/30 underline-offset-4 font-sans">
                                        Descargar GPX
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
