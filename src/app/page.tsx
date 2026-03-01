"use client";

import { CheckCircle2, ChevronRight, Star, MapPinned, Play, ShieldCheck, Zap, Activity } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RUTAS } from "@/lib/data/rutas";
import MapComponent from "@/components/MapComponent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function LandingPage() {
  const { scrollY } = useScroll();
  const heroParallaxY = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div className="min-h-screen bg-[#0a0f0c] selection:bg-emerald-500/30 font-sans overflow-hidden">
      {/* Navbar Premium Glassmorphism */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0f0c]/60 backdrop-blur-xl"
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
              <CheckCircle2 className="relative w-8 h-8 text-emerald-500" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-50 transition-colors">VirtuRoute</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/explorar" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Explorar</Link>
            <Link href="/crear-ruta" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Para Creadores</Link>
            <Link href="/precios" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Precios</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              Iniciar sesión
            </Link>
            <Link href="/auth/register">
              <Button className="bg-white text-[#0a0f0c] hover:bg-emerald-100 font-medium px-6 rounded-lg transition-colors cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                Empezar
              </Button>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Hero Section with Parallax */}
      <section className="relative pt-32 pb-24 md:pt-52 md:pb-40 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0c]/50 via-[#0a0f0c]/80 to-[#0a0f0c] z-10" />
          <motion.div style={{ y: heroParallaxY }} className="absolute inset-x-0 -top-[20%] -bottom-[20%]">
            <Image
              src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2560&auto=format&fit=crop"
              alt="Mountain Sunset"
              fill
              className="object-cover object-top opacity-50"
              priority
            />
          </motion.div>
        </div>

        <motion.div
          className="container relative z-20 mx-auto px-6 flex flex-col items-center text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUpVariant}>
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 px-5 py-2 mb-8 rounded-full font-medium text-sm backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <span className="relative flex h-2 w-2 mr-2 inline-flex">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Explora el mundo desde casa
            </Badge>
          </motion.div>

          <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight max-w-5xl leading-[1.05] drop-shadow-2xl">
            Rutas Virtuales Premium <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-sky-500 drop-shadow-[0_0_30px_rgba(16,185,129,0.4)]">para tus aventuras</span>
          </motion.h1>

          <motion.p variants={fadeUpVariant} className="mt-8 text-lg md:text-2xl text-white/70 max-w-2xl font-light leading-relaxed">
            Sube a la bicicleta o a la cinta de correr y recorre los senderos más épicos del planeta.
            Calidad impecable, inmersión total y seguimiento GPS realista.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="mt-12 flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link href="/explorar">
              <Button size="lg" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl h-16 px-10 text-lg shadow-[0_0_40px_-5px_rgba(16,185,129,0.5)] hover:shadow-[0_0_60px_-10px_rgba(16,185,129,0.7)] transition-all cursor-pointer group flex items-center justify-center">
                <Play className="w-5 h-5 mr-3 fill-white" />
                Explorar rutas ahora
              </Button>
            </Link>
            <Link href="/precios">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white bg-white/5 backdrop-blur-md h-16 px-10 text-lg rounded-xl group cursor-pointer transition-all">
                Ver cómo funciona
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform text-white/50" />
              </Button>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div variants={fadeUpVariant} className="mt-16 pt-10 border-t border-white/10 w-full max-w-4xl flex justify-center">
            <div className="flex flex-col items-center gap-6">
              <p className="text-sm font-medium text-white/40 tracking-widest uppercase">Únete a +12.400 deportistas. Integrado con:</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="text-xl font-black tracking-tighter">STRAVA</div>
                <div className="text-xl font-bold tracking-tight text-orange-500">Komoot</div>
                <div className="text-lg font-bold italic font-serif">Runner's World</div>
                <div className="text-lg font-bold flex items-center gap-1"><Activity className="w-5 h-5" /> Garmin Connect</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Routes (4 Cards) */}
      <section className="relative z-20 pb-32">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Rutas Destacadas</h2>
              <p className="text-lg text-white/50 max-w-xl">Descubre las experiencias mejor valoradas por nuestra comunidad de atletas.</p>
            </div>
            <Link href="/explorar" className="hidden md:flex items-center text-emerald-400 font-medium hover:text-emerald-300 transition-colors group">
              Ver todas las rutas <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {RUTAS.slice(0, 4).map((route, i) => (
              <motion.div
                key={route.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Link href={`/ruta/${route.slug}`}>
                  <Card className="bg-[#121814]/60 border-white/5 backdrop-blur-xl overflow-hidden rounded-2xl transition-all group cursor-pointer shadow-lg shadow-black hover:shadow-emerald-500/20 hover:border-emerald-500/50 h-full flex flex-col">
                    <div className="relative h-56 w-full overflow-hidden bg-[#1a231d]">
                      {/* Real Image loaded from Premium Unsplash */}
                      <Image
                        src={route.mapImg}
                        alt={route.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                      />
                      {/* Glassmorphism Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121814] via-transparent to-transparent opacity-80" />

                      <div className="absolute top-3 left-3 bg-[#0a0f0c]/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                        <span className="text-xs font-bold text-white">{route.stars}.0</span>
                      </div>

                      <div className="absolute bottom-3 left-3 text-white/90 font-mono text-[10px] bg-[#0a0f0c]/60 backdrop-blur-md px-2 py-1 rounded border border-white/10">
                        {route.difficulty}
                      </div>
                    </div>

                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h3 className="text-white font-bold text-xl leading-tight mb-2 line-clamp-1 group-hover:text-emerald-400 transition-colors">
                        {route.title}
                      </h3>

                      <p className="text-sm text-white/50 line-clamp-2 mb-4">
                        {route.description}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                        <span className="text-emerald-400 font-bold text-xl">{route.price}</span>
                        <div className="flex items-center text-white/60 text-sm gap-2 font-medium">
                          <Activity className="w-4 h-4 text-emerald-500" />
                          {route.distance}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          <Link href="/explorar" className="md:hidden mt-8 flex w-full justify-center items-center text-emerald-400 font-medium h-12 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
            Ver todas las rutas
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#121814]/80 border-y border-white/5 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Lo que dicen nuestros atletas</h2>
            <p className="text-lg text-white/50">Miles de deportistas ya han llevado sus entrenamientos al siguiente nivel.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "Entrenar para el maratón desde casa nunca había sido tan inmersivo. La calidad del vídeo en 4K y la sincronización con mi cinta es simplemente perfecta.",
                name: "Carlos M.",
                handle: "@carlos_runs",
                avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
              },
              {
                text: "Compré la ruta circular de Covadonga y me ahorró un viaje de 6 horas. Pude estudiar las pendientes exactas en el rodillo antes de la carrera real.",
                name: "Ana P.",
                handle: "@ana_cyclist",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              },
              {
                text: "Impresionante. Como creador de rutas, he podido monetizar mis fines de semana en la montaña. La plataforma es limpia, rápida y premium.",
                name: "David T.",
                handle: "@davidtrails",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
              },
              {
                text: "Los gráficos interactivos y el mapa Leaflet en tiempo real hacen que mi rodillo inteligente se coordine al milímetro con las durezas del vídeo.",
                name: "Sara L.",
                handle: "@sara_tri",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
              },
              {
                text: "Acabo de completar la ruta del Mont Blanc desde mi salón. Sientes la inmensidad de los Alpes. Vale cada céntimo que pagué.",
                name: "Javier G.",
                handle: "@javi_alpin",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
              },
              {
                text: "Simplemente la mejor herramienta para entrenamientos indoor. VirtuRoute ha destrozado a la competencia con su diseño y fluidez.",
                name: "Elena R.",
                handle: "@elenafit",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
              }
            ].map((testi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#0a0f0c]/80 backdrop-blur-sm border border-white/5 p-8 rounded-2xl shadow-xl hover:border-white/10 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-emerald-500 fill-emerald-500" />)}
                </div>
                <p className="text-white/80 font-light leading-relaxed mb-6">"{testi.text}"</p>
                <div className="flex items-center gap-4">
                  <Image src={testi.avatar} alt={testi.name} width={48} height={48} className="rounded-full border-2 border-emerald-500/20" />
                  <div>
                    <div className="font-semibold text-white">{testi.name}</div>
                    <div className="text-sm text-emerald-400">{testi.handle}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="bg-[#0a0f0c] pt-20 pb-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                <span className="text-xl font-bold tracking-tight text-white">VirtuRoute</span>
              </Link>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                La plataforma de experiencias virtuales outdoor líder mundial. Entrena, compite y monetiza tus aventuras en 4K.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6">Producto</h4>
              <ul className="space-y-4 text-sm text-white/50">
                <li><Link href="/explorar" className="hover:text-emerald-400 transition-colors">Explorar Rutas</Link></li>
                <li><Link href="/precios" className="hover:text-emerald-400 transition-colors">Precios</Link></li>
                <li><Link href="/descargar" className="hover:text-emerald-400 transition-colors">App Desktop</Link></li>
                <li><Link href="/integraciones" className="hover:text-emerald-400 transition-colors">Integraciones GPS</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6">Creadores</h4>
              <ul className="space-y-4 text-sm text-white/50">
                <li><Link href="/crear-ruta" className="hover:text-emerald-400 transition-colors">Sube tu Ruta</Link></li>
                <li><Link href="/programa-partners" className="hover:text-emerald-400 transition-colors">Programa Partners</Link></li>
                <li><Link href="/guia" className="hover:text-emerald-400 transition-colors">Guía de Grabación</Link></li>
                <li><Link href="/dashboard" className="hover:text-emerald-400 transition-colors">Dashboard Creador</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6">Compañía</h4>
              <ul className="space-y-4 text-sm text-white/50">
                <li><Link href="/about" className="hover:text-emerald-400 transition-colors">Sobre Nosotros</Link></li>
                <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link></li>
                <li><Link href="/empleo" className="hover:text-emerald-400 transition-colors">Empleo</Link></li>
                <li><Link href="/contacto" className="hover:text-emerald-400 transition-colors">Contacto</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/30">© 2026 VirtuRoute Inc. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6 text-sm text-white/30">
              <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
              <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
