"use client";

import Link from "next/link";
import { CheckCircle2, ChevronLeft, Zap, ShieldCheck, Globe, Infinity, PieChart, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function PreciosPage() {
    return (
        <div className="min-h-screen bg-[#0a0f0c] text-white selection:bg-emerald-500/30 overflow-hidden relative">
            <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0f0c]/60 backdrop-blur-xl transition-all">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-emerald-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                            <CheckCircle2 className="relative w-8 h-8 text-emerald-500" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-50 transition-colors">VirtuRoute</span>
                    </Link>
                    <Link href="/" className="text-sm font-medium text-white/50 hover:text-white transition-colors flex items-center group bg-white/5 px-4 py-2 rounded-lg">
                        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Volver
                    </Link>
                </div>
            </header>

            {/* Glowing Orbs */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />

            <main className="pt-40 pb-32 container mx-auto px-6 max-w-5xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
                        Precios simples y <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">transparentes</span>
                    </h1>
                    <p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                        Crea tu cuenta gratis, explora rutas increíbles en simulaciones 4K o conviértete en creador hoy y monetiza tus ascensiones épicas.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 text-left">

                    {/* Compradores */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#121814]/60 backdrop-blur-xl rounded-[2rem] p-10 lg:p-12 border border-white/5 shadow-2xl flex flex-col h-full relative group hover:border-white/10 transition-colors"
                    >
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-3xl font-bold">Atletas</h3>
                            <Globe className="w-8 h-8 text-white/20 group-hover:text-white/40 transition-colors" />
                        </div>
                        <p className="text-white/50 mb-8 text-lg font-light">Paga solo por lo que exploras. Entrena desde casa como un profesional.</p>

                        <div className="text-6xl font-black mb-10 tracking-tighter">
                            0 € <span className="text-2xl text-white/30 font-medium tracking-normal">/ mes</span>
                        </div>

                        <ul className="space-y-5 mb-12 flex-1 text-white/80">
                            <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-sky-400" /> <span className="text-lg">Acceso al catálogo Premium</span></li>
                            <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-sky-400" /> <span className="text-lg">Descargas GPX de por vida</span></li>
                            <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-sky-400" /> <span className="text-lg">Simulación de Video 4K interactivo</span></li>
                            <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-sky-400" /> <span className="text-lg">Sincronización con rodillo Smart</span></li>
                        </ul>

                        <Link href="/auth/register">
                            <Button className="w-full bg-white text-[#0a0f0c] hover:bg-neutral-200 h-16 rounded-2xl text-xl font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
                                Crear cuenta gratis
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Creadores / Partners */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-[#121814]/80 backdrop-blur-xl rounded-[2rem] p-10 lg:p-12 border border-emerald-500/20 shadow-[0_0_80px_-20px_rgba(16,185,129,0.3)] relative flex flex-col h-full group hover:border-emerald-500/40 transition-colors overflow-hidden"
                    >
                        {/* Glow Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-colors pointer-events-none" />

                        <div className="absolute top-6 right-8 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider backdrop-blur-md">
                            Creadores Reales
                        </div>

                        <div className="mb-6 flex items-center justify-between z-10">
                            <h3 className="text-3xl font-bold">Partners</h3>
                        </div>

                        <p className="text-emerald-400 mb-8 text-lg font-medium drop-shadow-sm z-10">Monetiza tus aventuras en la montaña de forma recurrente.</p>

                        <div className="text-6xl font-black text-white mb-2 tracking-tighter z-10">
                            25% <span className="text-2xl text-emerald-500/60 font-medium tracking-normal">comisión</span>
                        </div>
                        <p className="text-base text-white/50 mb-10 font-light z-10">Gana el 75% neto de cada venta en ingresos pasivos.</p>

                        <ul className="space-y-5 mb-12 flex-1 text-white/80 z-10">
                            <li className="flex items-center gap-4"><Infinity className="w-6 h-6 text-emerald-500" /> <span className="text-lg">Sube rutas ilimitadas gratis</span></li>
                            <li className="flex items-center gap-4"><Zap className="w-6 h-6 text-emerald-500" /> <span className="text-lg">Payouts semanales con Stripe</span></li>
                            <li className="flex items-center gap-4"><PieChart className="w-6 h-6 text-emerald-500" /> <span className="text-lg">Dashboard Analytics en tiempo real</span></li>
                            <li className="flex items-center gap-4"><Video className="w-6 h-6 text-emerald-500" /> <span className="text-lg">Procesador de Video + GPX Nativo</span></li>
                        </ul>

                        <Link href="/crear-ruta" className="z-10">
                            <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white h-16 rounded-2xl text-xl font-bold shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]">
                                Empezar a vender <ShieldCheck className="w-5 h-5" />
                            </Button>
                        </Link>
                    </motion.div>

                </div>

                {/* Enterprise/Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 pt-16 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <p className="text-white/40 text-sm">¿Representas a un organizador de eventos o tienes un catálogo masivo?</p>
                    <Button variant="outline" className="h-10 border-white/10 bg-white/5 hover:bg-white/10 text-white/80 rounded-lg">
                        Contactar para integración Pro
                    </Button>
                </motion.div>
            </main>
        </div>
    );
}
