"use client";

import { CheckCircle2, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BuyerFavoritos() {
    const routes = Array(4).fill({
        title: "Monte Fuji Virtual",
        price: "15,00 €",
        distance: "12,4 km",
        stars: 5,
        mapImg: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=600&auto=format&fit=crop"
    });

    return (
        <div className="flex flex-col h-full bg-[#0a0f0c] text-white overflow-y-auto w-full">
            <header className="px-12 h-24 flex items-center shrink-0">
                <h1 className="text-2xl font-bold tracking-tight text-white/90">Mis Favoritos</h1>
            </header>

            <div className="px-12 pb-12 flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {routes.map((route, i) => (
                        <Card key={i} className="bg-[#121814] border-white/5 rounded-2xl overflow-hidden shadow-xl">
                            <div className="relative h-44 w-full overflow-hidden bg-[#1a231d]">
                                <Image
                                    src={route.mapImg}
                                    alt={route.title}
                                    fill
                                    className="object-cover opacity-80"
                                />
                                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <Star className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                                </div>
                            </div>

                            <CardContent className="p-4 flex flex-col gap-2">
                                <h3 className="text-white font-medium text-[16px]">{route.title}</h3>
                                <div className="flex justify-between items-center text-sm mt-2">
                                    <span className="text-emerald-400 font-semibold">{route.price}</span>
                                    <span className="text-white/50">{route.distance}</span>
                                </div>
                                <Button className="w-full mt-3 h-10 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 font-medium rounded-lg text-sm transition-all border border-emerald-500/20">
                                    Ver ruta
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
