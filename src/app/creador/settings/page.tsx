"use client";

import { CheckCircle2, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SettingsPlaceholder() {
    return (
        <div className="min-h-screen bg-[#0a0f0c] text-white flex flex-col p-4 selection:bg-emerald-500/30">
            <header className="px-10 h-28 flex items-center justify-between shrink-0 mb-8 border-b border-white/5">
                <h1 className="text-2xl font-bold tracking-tight">Configuración</h1>
                <Link href="/creador">
                    <Button variant="outline" className="text-white border-white/10 hover:bg-white/5 bg-transparent h-10 px-4 rounded-xl flex items-center gap-2">
                        <ChevronLeft className="w-4 h-4" /> Volver a Mis Rutas
                    </Button>
                </Link>
            </header>

            <div className="flex-1 flex flex-col items-center justify-center px-6">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mb-8 border border-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-bold mb-4 tracking-tight">Perfil y Configuración</h2>
                <p className="text-white/50 text-center max-w-lg leading-relaxed mb-6">
                    Aquí podrás ajustar tus datos personales, cambiar tu avatar de creador y conectar tu cuenta de Stripe Express para recibir los payouts semanales automáticos.
                </p>
            </div>
        </div>
    );
}
