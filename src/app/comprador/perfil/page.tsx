"use client";

import { User } from "lucide-react";

export default function PerfilCompradorPage() {
    return (
        <div className="flex flex-col h-full bg-[#0a0f0c] text-white overflow-y-auto w-full">
            <header className="px-12 h-24 flex items-center shrink-0 border-b border-white/5">
                <h1 className="text-2xl font-bold tracking-tight text-white/90">Mi Perfil</h1>
            </header>

            <div className="px-12 py-12 flex-1 flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
                    <User className="w-10 h-10 text-white/40" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Ana Aventurera</h2>
                <p className="text-white/50 mb-8">ana@ejemplo.com</p>

                <div className="bg-[#121814] border border-white/5 p-8 rounded-3xl max-w-md w-full text-left">
                    <h3 className="font-semibold text-lg mb-4 text-white/90">Información</h3>
                    <p className="text-white/60 text-sm mb-6 leading-relaxed">Desde esta sección puedes cambiar tu idioma, zona horaria y preferencias de notificación para cuando haya nuevas rutas disponibles en tus categorías favoritas.</p>
                </div>
            </div>
        </div>
    );
}
