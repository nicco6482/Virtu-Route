"use client";

import { CheckCircle2, Search, Filter, MapPinned, Star, ChevronDown, Activity } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RUTAS } from "@/lib/data/rutas";
import MapComponent from "@/components/MapComponent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";

export default function MarketplacePage() {
    return (
        <div className="min-h-screen bg-[#0a0f0c] text-white selection:bg-emerald-500/30">
            {/* Navbar Premium Glassmorphism */}
            <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0f0c]/60 backdrop-blur-xl transition-all">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-emerald-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                            <CheckCircle2 className="relative w-8 h-8 text-emerald-500" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-50 transition-colors">VirtuRoute</span>
                    </Link>
                    <div className="flex-1 max-w-2xl px-8 hidden md:block">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-emerald-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full pointer-events-none" />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-emerald-500 transition-colors" />
                            <Input
                                placeholder="Buscar rutas premium, ubicaciones o creadores..."
                                className="w-full bg-[#121814]/80 backdrop-blur-sm border-white/10 text-white pl-12 h-12 rounded-full focus-visible:ring-emerald-500/50 shadow-inner text-base transition-all"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard" className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-medium text-sm cursor-pointer hover:bg-emerald-500/20 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all">
                            U
                        </Link>
                    </div>
                </div>
            </header>

            <main className="pt-28 pb-16 container mx-auto px-6 flex flex-col lg:flex-row gap-8">
                {/* Sidebar Filtros Glassmorphism */}
                <aside className="w-full lg:w-[280px] flex-shrink-0">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="sticky top-28 bg-[#121814]/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 shadow-xl"
                    >
                        <div className="flex items-center gap-2 mb-8 pb-4 border-b border-white/5">
                            <Filter className="w-5 h-5 text-emerald-500" />
                            <h2 className="font-semibold text-lg tracking-tight">Filtros Premium</h2>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xs font-bold tracking-wider uppercase text-white/40 mb-4">Categoría</h3>
                                <div className="space-y-3">
                                    {['Ciclismo', 'Running', 'Senderismo', 'Escalada', 'MTB', 'Multiactividad'].map((cat, i) => (
                                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                            <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${i < 3 ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)] text-white' : 'bg-white/5 border border-white/10 group-hover:border-emerald-500/50'}`}>
                                                {i < 3 && <CheckCircle2 className="w-3.5 h-3.5" />}
                                            </div>
                                            <span className={`text-sm transition-colors ${i < 3 ? 'text-white font-medium' : 'text-white/60 group-hover:text-white/90'}`}>{cat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xs font-bold tracking-wider uppercase text-white/40 mb-5">Dificultad</h3>
                                <div className="space-y-3">
                                    <div className="text-sm text-emerald-400 font-medium flex justify-between">
                                        <span>Moderada</span>
                                        <span>Extrema</span>
                                    </div>
                                    <Slider defaultValue={[20, 80]} max={100} step={1} className="w-full [&>span:first-child]:bg-white/10 [&_[role=slider]]:bg-emerald-500 [&_[role=slider]]:border-emerald-500 [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_[role=slider]]:shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xs font-bold tracking-wider uppercase text-white/40 mb-5">Distancia (km)</h3>
                                <Slider defaultValue={[50]} max={100} step={1} className="w-full [&>span:first-child]:bg-white/10 [&_[role=slider]]:bg-emerald-500 [&_[role=slider]]:border-emerald-500 [&_[role=slider]]:w-5 [&_[role=slider]]:h-5" />
                                <div className="flex justify-between text-xs text-white/40 mt-2">
                                    <span>0 km</span>
                                    <span>+100 km</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </aside>

                {/* Content Grid */}
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col sm:flex-row items-baseline sm:items-center justify-between mb-8 pb-4 border-b border-white/5 gap-4"
                    >
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight mb-1">Explora {RUTAS.length} rutas premium</h1>
                            <p className="text-sm text-white/50">Simulaciones hiperrealistas listas para tu rodillo o cinta.</p>
                        </div>
                        <Button variant="outline" className="bg-[#121814]/80 backdrop-blur-sm border-white/10 hover:bg-white/5 text-white h-11 px-5 rounded-xl whitespace-nowrap">
                            Recomendados <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
                        </Button>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {RUTAS.map((route, i) => (
                            <motion.div
                                key={route.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className="h-full"
                            >
                                <Link href={`/ruta/${route.slug}`} className="block h-full">
                                    <Card className="bg-[#121814]/60 backdrop-blur-md border-white/5 overflow-hidden rounded-2xl transition-all group cursor-pointer hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/40 h-full flex flex-col">
                                        <div className="relative h-48 w-full overflow-hidden bg-[#1a231d]">
                                            <div className="w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none grayscale-[30%] group-hover:grayscale-0">
                                                <MapComponent center={route.center} zoom={route.zoom - 1} coordinates={route.coordinates} interactive={false} />
                                            </div>
                                            {/* Top Overlay Badge */}
                                            <div className="absolute top-3 left-3 flex flex-col gap-1 pointer-events-none z-10">
                                                <div className="bg-[#0a0f0c]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5">
                                                    <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                                                    <span className="text-xs font-bold text-white">{route.stars}.0</span>
                                                </div>
                                            </div>
                                            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0a0f0c]/80 backdrop-blur-md flex items-center justify-center border border-white/10 z-10 pointer-events-none group-hover:bg-emerald-500 transition-colors">
                                                <MapPinned className="w-4 h-4 outline-none text-white/80 group-hover:text-white" />
                                            </div>
                                            {/* Bottom Overlay Gradient */}
                                            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#121814] to-transparent z-10 pointer-events-none" />
                                        </div>

                                        <CardContent className="p-5 flex-1 flex flex-col">
                                            <h3 className="text-white font-semibold text-lg mb-2 line-clamp-1 group-hover:text-emerald-400 transition-colors">
                                                {route.title}
                                            </h3>

                                            <div className="flex items-center justify-between mb-4 mt-auto">
                                                <p className="text-xs text-white/40 font-medium">por <span className="text-emerald-500/80">{route.creatorHandle}</span></p>
                                                {/* Avatars de compradores */}
                                                <div className="flex -space-x-1.5">
                                                    <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=64&auto=format&fit=crop" width={22} height={22} className="rounded-full border-[1.5px] border-[#121814]" alt="User" />
                                                    <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=64&auto=format&fit=crop" width={22} height={22} className="rounded-full border-[1.5px] border-[#121814]" alt="User" />
                                                    <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=64&auto=format&fit=crop" width={22} height={22} className="rounded-full border-[1.5px] border-[#121814]" alt="User" />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                                <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-lg">
                                                    {route.price}
                                                </div>
                                                <div className="flex items-center text-white/60 text-sm gap-2 font-medium">
                                                    <Badge variant="outline" className={`text-[10px] px-1.5 py-0 border-white/10 ${route.difficulty === 'Extrema' ? 'text-red-400 bg-red-500/10 border-red-500/20' : route.difficulty === 'Difícil' ? 'text-orange-400 bg-orange-500/10 border-orange-500/20' : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'}`}>
                                                        {route.difficulty}
                                                    </Badge>
                                                    <span className="flex items-center ml-1">
                                                        <Activity className="w-3.5 h-3.5 mr-1 text-sky-500" />
                                                        {route.distance}
                                                    </span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
