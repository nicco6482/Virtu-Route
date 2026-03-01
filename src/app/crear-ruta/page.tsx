"use client";

import { CheckCircle2, Home, Compass, Map, User, LayoutDashboard, Route } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function CrearRutaOnboarding() {
    const session = null;
    if (!session) redirect('/auth/login');

    return (
        <div className="min-h-screen bg-[#0a0f0c] text-white flex flex-col items-center justify-center p-4 selection:bg-emerald-500/30">
            <div className="w-full max-w-2xl bg-[#121814] border border-white/5 p-12 rounded-[2rem] shadow-2xl relative text-center">

                <div className="mx-auto w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-8 border border-emerald-500/20">
                    <Route className="w-10 h-10 text-emerald-400" />
                </div>

                <h1 className="text-4xl font-bold tracking-tight mb-4">¿Listo para crear la siguiente aventura?</h1>
                <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                    Toma el control del mapa. Sube tu archivo GPX original, traza la ruta y compártela. Nosotros nos encargamos de las ventas, tú de ganar un 75%.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/creador/nueva-ruta">
                        <Button className="h-14 px-8 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-xl text-lg shadow-[0_4px_20px_0_rgba(16,185,129,0.39)] w-full sm:w-auto">
                            Ir al Dashboard para Creadores
                        </Button>
                    </Link>
                    <Link href="/">
                        <Button variant="outline" className="h-14 px-8 bg-transparent border border-white/10 hover:bg-white/5 font-medium rounded-xl text-lg text-white/90 w-full sm:w-auto">
                            Volver al inicio
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
