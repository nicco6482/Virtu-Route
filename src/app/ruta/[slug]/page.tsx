"use client";

import React, { use, useState } from "react";
import { CheckCircle2, ChevronLeft, Activity, Mountain, Share2, CreditCard, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RUTAS } from "@/lib/data/rutas";
import MapComponent from "@/components/MapComponent";
import { motion } from "framer-motion";

// Lightbox Premium Plugin
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export default function RouteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const ruta = RUTAS.find(r => r.slug === slug);
    const [openLightbox, setOpenLightbox] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    if (!ruta) return notFound();

    const slides = ruta.gallery.map(src => ({ src }));

    const handleOpenGallery = (index: number) => {
        setPhotoIndex(index);
        setOpenLightbox(true);
    };

    return (
        <div className="min-h-screen bg-[#0a0f0c] text-white selection:bg-emerald-500/30 font-sans">
            {/* Navbar Premium Glassmorphism */}
            <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0f0c]/60 backdrop-blur-xl transition-all">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/explorar" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group bg-white/5 px-4 py-2 rounded-xl border border-white/5 shadow-inner">
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Volver a explorar</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-emerald-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                            <CheckCircle2 className="relative w-8 h-8 text-emerald-500" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-50 transition-colors hidden sm:block">VirtuRoute</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" className="hidden sm:flex hover:bg-white/5 text-white/70 hover:text-white rounded-xl">
                            <Share2 className="w-4 h-4 mr-2" /> Compartir
                        </Button>
                        <Link href="/dashboard" className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-medium text-sm cursor-pointer hover:bg-emerald-500/20 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all">
                            U
                        </Link>
                    </div>
                </div>
            </header>

            <main className="pt-28 pb-16 container mx-auto px-4 lg:px-6 max-w-[1400px]">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* Columna Izquierda: Mapa y Medios */}
                    <div className="w-full lg:w-[60%] xl:w-[65%] flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative w-full aspect-[4/3] lg:aspect-[16/9] bg-[#121814] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group z-10"
                        >
                            {/* Real Leaflet Map integration */}
                            <MapComponent center={ruta.center} zoom={ruta.zoom} coordinates={ruta.coordinates} interactive={true} />

                            {/* Premium Map Overlays */}
                            <div className="absolute top-4 left-4 z-[400] bg-[#0a0f0c]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-lg flex items-center gap-2 pointer-events-none">
                                <Activity className="w-4 h-4 text-emerald-500" />
                                <span className="text-sm font-semibold tracking-wide">Live GPS</span>
                            </div>
                        </motion.div>

                        {/* Galería de 4 Fotos Unsplash Premium */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-2"
                        >
                            {ruta.gallery.map((img, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    onClick={() => handleOpenGallery(i)}
                                    className="aspect-video relative rounded-2xl overflow-hidden border border-white/5 group bg-[#121814] cursor-pointer shadow-lg"
                                >
                                    <Image
                                        src={`${img}`}
                                        alt={`Galeria ${i}`}
                                        fill
                                        className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Columna Derecha: Información de Compra Premium */}
                    <div className="w-full lg:w-[40%] xl:w-[35%] flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-[#121814]/80 border border-white/5 rounded-[2rem] p-8 lg:p-10 sticky top-28 backdrop-blur-xl shadow-2xl relative overflow-hidden"
                        >
                            {/* Glow radial background */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-white/70 mb-6 font-mono">
                                    <Mountain className="w-3.5 h-3.5 text-emerald-500" /> 4K Simulation
                                </div>

                                <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-white pr-4 mb-6 drop-shadow-md">
                                    {ruta.title}
                                </h1>

                                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                                    <div className="flex items-center gap-3">
                                        <Image src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" width={36} height={36} alt="Creator" className="rounded-full border border-white/20" />
                                        <div>
                                            <p className="text-emerald-400 font-bold text-sm leading-tight">{ruta.creatorHandle}</p>
                                            <p className="text-white/40 text-xs">Partner Certificado</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-yellow-500 font-bold text-lg leading-tight">★ {ruta.stars}.0</div>
                                        <p className="text-white/40 text-xs">24 reseñas</p>
                                    </div>
                                </div>

                                <p className="text-white/60 font-light leading-relaxed mb-10 text-lg">
                                    {ruta.description}
                                </p>

                                {/* Premium Stats Layout */}
                                <div className="grid grid-cols-2 gap-4 mb-10">
                                    <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col gap-1 hover:bg-white/10 transition-colors">
                                        <span className="text-white/40 text-xs font-bold uppercase tracking-wider">Distancia</span>
                                        <span className="text-xl font-bold text-white tracking-tight">{ruta.distance}</span>
                                    </div>
                                    <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col gap-1 hover:bg-white/10 transition-colors">
                                        <span className="text-white/40 text-xs font-bold uppercase tracking-wider">Desnivel</span>
                                        <span className="text-xl font-bold text-white tracking-tight">{ruta.elevation}</span>
                                    </div>
                                    <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col gap-1 hover:bg-white/10 transition-colors">
                                        <span className="text-white/40 text-xs font-bold uppercase tracking-wider">Tiempo Est.</span>
                                        <span className="text-xl font-bold text-white tracking-tight">{ruta.time}</span>
                                    </div>
                                    <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col gap-1 hover:bg-white/10 transition-colors border-l-2 border-l-emerald-500">
                                        <span className="text-white/40 text-xs font-bold uppercase tracking-wider">Dificultad</span>
                                        <span className={`text-xl font-bold tracking-tight ${ruta.difficulty === 'Extrema' ? 'text-red-400' : ruta.difficulty === 'Difícil' ? 'text-orange-400' : 'text-emerald-400'}`}>
                                            {ruta.difficulty}
                                        </span>
                                    </div>
                                </div>

                                {/* Call to action Area */}
                                <div className="pt-8 flex flex-col gap-6">
                                    <div className="flex items-end justify-between px-2">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-white/50 mb-1">Inversión única</span>
                                            <div className="text-5xl font-black tracking-tighter drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">
                                                {ruta.price}
                                            </div>
                                        </div>
                                    </div>

                                    <button className="relative group w-full h-16 rounded-2xl overflow-hidden flex items-center justify-center font-bold text-xl text-white shadow-[0_0_40px_-5px_rgba(16,185,129,0.5)] transition-all mt-2">
                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 transition-transform group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="relative flex items-center gap-2">
                                            Adquirir Experiencia <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>

                                    <p className="text-center text-xs font-medium text-white/30 flex items-center justify-center gap-1.5 mt-2">
                                        <CreditCard className="w-4 h-4" /> Pagos cifrados por Stripe
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </main>

            {/* Lightbox Premium Integrado */}
            <Lightbox
                open={openLightbox}
                close={() => setOpenLightbox(false)}
                index={photoIndex}
                slides={slides}
                plugins={[Zoom]}
                className="z-[99999]"
            />
        </div>
    );
}
