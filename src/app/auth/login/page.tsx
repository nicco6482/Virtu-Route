"use client";

import { CheckCircle2, ChevronLeft, Github, Chrome } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#0a0f0c] text-white selection:bg-emerald-500/30 flex flex-col justify-center items-center relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Back button */}
            <Link href="/" className="absolute top-8 left-8 text-white/50 hover:text-white transition-colors flex items-center group bg-white/5 px-4 py-2 rounded-lg z-20">
                <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Volver
            </Link>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md z-10 px-6"
            >
                <div className="flex flex-col items-center mb-8">
                    <div className="relative group mb-6">
                        <div className="absolute inset-0 bg-emerald-500 blur-xl opacity-30 group-hover:opacity-70 transition-opacity rounded-full" />
                        <CheckCircle2 className="relative w-16 h-16 text-emerald-500 drop-shadow-lg" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Bienvenido de nuevo</h1>
                    <p className="text-white/50 text-center font-light">
                        Inicia sesión para continuar tu entrenamiento con VirtuRoute.
                    </p>
                </div>

                <div className="bg-[#121814]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <div className="space-y-4 mb-6">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-white/60 uppercase tracking-wider ml-1">Email</label>
                            <Input placeholder="tu@email.com" className="bg-white/5 border-white/10 h-12 rounded-xl focus-visible:ring-emerald-500/50" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-xs font-medium text-white/60 uppercase tracking-wider">Contraseña</label>
                                <Link href="#" className="text-xs text-emerald-400 hover:text-emerald-300">¿Olvidaste tu contraseña?</Link>
                            </div>
                            <Input type="password" placeholder="••••••••" className="bg-white/5 border-white/10 h-12 rounded-xl focus-visible:ring-emerald-500/50" />
                        </div>
                    </div>

                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold h-12 rounded-xl mb-6 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-[1.02]">
                        Iniciar sesión
                    </Button>

                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10" />
                        </div>
                        <div className="relative flex justify-center text-xs">
                            <span className="bg-[#121814] px-2 text-white/40">o continúa con</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10 text-white h-11 rounded-xl w-full">
                            <Github className="w-4 h-4 mr-2" /> GitHub
                        </Button>
                        <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10 text-white h-11 rounded-xl w-full">
                            <Chrome className="w-4 h-4 mr-2 text-white" /> Google
                        </Button>
                    </div>
                </div>

                <p className="text-center text-sm text-white/50 mt-8">
                    ¿No tienes una cuenta? <Link href="/auth/register" className="text-emerald-400 font-medium hover:text-emerald-300">Regístrate gratis</Link>
                </p>
            </motion.div>
        </div>
    );
}
