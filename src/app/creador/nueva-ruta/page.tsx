"use client";

import { useState } from "react";
import { Upload, Save, MapPinned, Mountain, Image as ImageIcon, Video, Activity, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DrawableMapComponent from "@/components/DrawableMapComponent";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NuevaRutaPage() {
    const [points, setPoints] = useState<[number, number][]>([]);

    const handleAddPoint = (point: [number, number]) => {
        setPoints(prev => [...prev, point]);
    };

    const handleClearMap = () => {
        setPoints([]);
    };

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] p-6 lg:p-8 xl:p-10 hide-scrollbar overflow-y-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Editor VirtuRoute Studio</h1>
                        <p className="text-white/50 text-sm">Traza la ruta, sube tu contenido 4K y comienza a monetizar.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" className="border-white/10 bg-[#121814] text-white hover:bg-white/5 transition-colors">
                            Guardar Borrador
                        </Button>
                        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                            <Save className="w-4 h-4 mr-2" /> Publicar Ruta
                        </Button>
                    </div>
                </div>
            </motion.div>

            <div className="flex flex-col xl:flex-row gap-8 w-full">
                {/* Visual / Editor Map Side */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="w-full xl:w-[60%] flex flex-col gap-6"
                >
                    <div className="bg-[#121814]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-2xl relative group h-[500px] lg:h-[600px] flex flex-col overflow-hidden">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2">
                                <MapPinned className="w-5 h-5 text-emerald-500" />
                                <h3 className="font-semibold text-lg">Trazado GPS Interactivo</h3>
                            </div>
                            <Button onClick={handleClearMap} variant="ghost" size="sm" className="h-8 text-white/40 hover:text-red-400 hover:bg-red-500/10">Limpiar Trazado</Button>
                        </div>

                        <div className="w-full flex-1 rounded-2xl overflow-hidden border border-white/10 relative bg-[#0a0f0c]">
                            <DrawableMapComponent points={points} onAddPoint={handleAddPoint} />
                        </div>
                    </div>

                    {/* Media Uploads */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-[#121814]/80 backdrop-blur-md border border-white/5 border-dashed rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all cursor-pointer group">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Video className="w-8 h-8 text-emerald-400" />
                            </div>
                            <h4 className="font-bold text-white mb-1">Subir Video 4K</h4>
                            <p className="text-xs text-white/40">MP4, MOV hasta 10GB. Renderizado automático.</p>
                        </div>

                        <div className="bg-[#121814]/80 backdrop-blur-md border border-white/5 border-dashed rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:border-sky-500/50 hover:bg-sky-500/5 transition-all cursor-pointer group">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <ImageIcon className="w-8 h-8 text-sky-400" />
                            </div>
                            <h4 className="font-bold text-white mb-1">Galería (Hero + Miniaturas)</h4>
                            <p className="text-xs text-white/40">JPG, PNG alta resolución.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Form Metadata Side */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-full xl:w-[40%] flex flex-col"
                >
                    <div className="bg-[#121814]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-xl flex-1 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

                        <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                            <Info className="w-5 h-5 text-emerald-500" /> Metadatos del Terreno
                        </h3>

                        <div className="space-y-6 relative z-10">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/60">Título de la Experiencia</label>
                                <Input placeholder="Ej. Ascenso Inmersivo al Mont Blanc" className="bg-black/20 border-white/10 h-12 rounded-xl focus-visible:ring-emerald-500/50" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/60">Historia & Descripción</label>
                                <Textarea placeholder="Vende tu ruta. ¿Qué se siente al hacerla?" className="bg-black/20 border-white/10 min-h-[140px] rounded-xl focus-visible:ring-emerald-500/50 resize-none" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/60 flex items-center gap-1"><Activity className="w-3.5 h-3.5" /> Distancia Total</label>
                                    <Input placeholder="Ej. 18.5 km" className="bg-black/20 border-white/10 h-11 rounded-xl" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/60 flex items-center gap-1"><Mountain className="w-3.5 h-3.5" /> Desnivel (+)</label>
                                    <Input placeholder="Ej. 1200 m" className="bg-black/20 border-white/10 h-11 rounded-xl" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/60">Tiempo Est.</label>
                                    <Input placeholder="Ej. 4h 30m" className="bg-black/20 border-white/10 h-11 rounded-xl" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/60">Dificultad</label>
                                    <select className="w-full bg-black/20 border border-white/10 text-white h-11 rounded-xl px-3 outline-none focus:ring-1 focus:ring-emerald-500">
                                        <option value="facil" className="bg-black text-white">Fácil (Rodada)</option>
                                        <option value="moderada" className="bg-black text-white">Moderada</option>
                                        <option value="dificil" className="bg-black text-white">Difícil</option>
                                        <option value="extrema" className="bg-black text-white">Extrema (Pro)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/10 mt-6">
                                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
                                    <h4 className="text-emerald-400 font-semibold mb-2">Monetización</h4>
                                    <p className="text-sm text-white/40 mb-4">Elige tu precio. Los usuarios de VirtuRoute Premium podrán desbloquear esta ruta.</p>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-lg font-medium">€</span>
                                        <Input type="number" placeholder="9.99" className="bg-black/40 border-emerald-500/30 h-14 rounded-xl pl-9 text-xl font-bold text-white focus-visible:ring-emerald-500 shadow-inner" />
                                    </div>
                                    <p className="text-xs text-emerald-500/60 mt-3 flex items-center gap-1">
                                        <CheckCircle2 className="w-3.5 h-3.5" /> Conservas el 75% neto de esta venta de por vida.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
