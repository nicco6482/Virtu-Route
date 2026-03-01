"use client";

import { Bell, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
    { name: "Mar", value: 10 },
    { name: "Abr", value: 300 },
    { name: "May", value: 320 },
    { name: "Jun", value: 780 },
    { name: "Jul", value: 650 },
    { name: "Ago", value: 920 }
];

export default function CreatorMisRutas() {
    return (
        <div className="flex flex-col h-full bg-[#121814] text-white overflow-y-auto">
            {/* Header */}
            <header className="px-10 h-28 flex items-center gap-4 shrink-0 justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Mis Rutas</h1>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-[#1a231d] px-3 py-1.5 rounded-full border border-white/5">
                        <Bell className="w-5 h-5 text-white/60" />
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <div className="h-10 px-4 flex items-center bg-[#1a231d] border border-white/5 rounded-full text-sm font-medium">
                        Por meses <ChevronDownIcon className="w-4 h-4 ml-2 text-white/40" />
                    </div>
                </div>
            </header>

            <div className="px-10 pb-10 flex flex-col gap-8">

                {/* Stats & Actions */}
                <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-between items-start">
                    <div className="flex gap-4">
                        <Card className="bg-[#1a231d] border-white/5 w-64 shadow-md rounded-2xl">
                            <CardContent className="p-5">
                                <p className="text-white/50 text-sm font-medium mb-1">Total vendido</p>
                                <h3 className="text-3xl font-bold text-white">347 €</h3>
                            </CardContent>
                        </Card>
                        <Card className="bg-[#1a231d] border-white/5 w-48 shadow-md rounded-2xl">
                            <CardContent className="p-5">
                                <p className="text-white/50 text-sm font-medium mb-1">Rutas publicadas</p>
                                <h3 className="text-3xl font-bold text-white">12</h3>
                            </CardContent>
                        </Card>
                        <Card className="bg-[#1a231d] border-white/5 w-48 shadow-md rounded-2xl">
                            <CardContent className="p-5">
                                <p className="text-white/50 text-sm font-medium mb-1">Visitantes este mes</p>
                                <h3 className="text-3xl font-bold text-white">1.284</h3>
                            </CardContent>
                        </Card>
                    </div>

                    <Link href="/creador/nueva-ruta">
                        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)] h-12 px-6 rounded-xl text-[15px]">
                            Nueva ruta
                        </Button>
                    </Link>
                </div>

                {/* Tabla de rutas */}
                <div className="bg-[#1a231d] border border-white/5 rounded-3xl overflow-hidden shadow-xl p-2 hidden md:block">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                        <div className="flex space-x-6 text-sm">
                            <span className="font-semibold border-b-2 border-emerald-500 pb-4 -mb-[17px]">My Routes</span>
                            <span className="text-white/40 font-medium">5 activas</span>
                        </div>
                        <div className="text-sm font-medium text-white/40 bg-white/5 px-3 py-1 rounded-lg">Ascendente</div>
                    </div>

                    <table className="w-full text-left border-collapse mt-2">
                        <thead>
                            <tr className="text-white/40 text-sm font-medium border-b border-white/5">
                                <th className="font-medium pb-3 px-6 w-1/2 pt-4">Ruta publicada</th>
                                <th className="font-medium pb-3 px-4 pt-4">Precio</th>
                                <th className="font-medium pb-3 px-4 pt-4">Ventas</th>
                                <th className="font-medium pb-3 px-6 text-right pt-4">Ganancias</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { title: "Callejear por Granada", img: "https://images.unsplash.com/photo-1524661135-423995f22d0b", price: "4 €", sales: 12, earnings: "600 €" },
                                { title: "Ruta por Sevilla", img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256", price: "10 €", sales: 12, earnings: "600 €" },
                                { title: "Ascenso Moderado", img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606", price: "15 €", sales: 24, earnings: "300 €" },
                                { title: "Picos de Europa Norte", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b", price: "15 €", sales: 24, earnings: "360 €" }
                            ].map((item, i) => (
                                <tr key={i} className="group hover:bg-white/[0.02] transition-colors border-b border-white/5 last:border-0">
                                    <td className="py-4 px-6 flex items-center gap-4">
                                        <div className="w-14 h-10 relative rounded-lg overflow-hidden bg-white/5 shrink-0">
                                            <Image src={`${item.img}?w=100&h=70&auto=format&fit=crop`} alt={item.title} fill className="object-cover" />
                                        </div>
                                        <span className="font-medium text-[15px]">{item.title}</span>
                                    </td>
                                    <td className="py-4 px-4 text-white/70 font-medium">{item.price}</td>
                                    <td className="py-4 px-4 text-white/70 font-medium">{item.sales}</td>
                                    <td className="py-4 px-6 text-right text-emerald-400 font-semibold">{item.earnings}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Gráfico Recharts */}
                <div className="bg-[#1a231d] border border-white/5 p-6 rounded-3xl mt-4 relative min-h-[300px] shadow-xl">
                    <div className="absolute top-6 right-8 flex items-center gap-2 text-sm text-emerald-500 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        Recharts <span className="text-white/40 ml-2">Ingresos netos</span>
                    </div>

                    <div className="h-[250px] w-full mt-10">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }} dx={-10} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#121814', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                                    itemStyle={{ color: '#10b981' }}
                                />
                                <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </div>
    );
}

function ChevronDownIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}
