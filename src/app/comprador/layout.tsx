"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CheckCircle2, Compass, Map, Heart, User, LogOut } from "lucide-react";

export default function BuyerLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const links = [
        { name: "Explorar", href: "/explorar", icon: Compass },
        { name: "Mis rutas", href: "/comprador", icon: Map },
        { name: "Favoritos", href: "/comprador/favoritos", icon: Heart },
        { name: "Perfil", href: "/comprador/perfil", icon: User },
    ];

    return (
        <div className="min-h-screen bg-[#070b09] flex items-center justify-center p-4">
            <div className="w-full max-w-[1400px] h-[900px] bg-[#121814] rounded-[2rem] overflow-hidden flex shadow-2xl shadow-emerald-900/10 border border-white/5 relative">

                {/* Sidebar */}
                <aside className="w-[260px] flex flex-col pt-10 px-6 z-10 shrink-0">
                    <div className="flex items-center gap-3 mb-10 h-10">
                        <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                        <span className="text-xl font-bold tracking-tight text-white">VirtuRoute</span>
                    </div>

                    <nav className="flex-1 space-y-2">
                        {links.map((link) => {
                            const isActive = pathname === link.href;
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`flex items-center gap-4 px-4 h-12 rounded-xl transition-all ${isActive
                                        ? 'bg-[#1a231d] border border-white/10 text-white font-medium shadow-[0_2px_10px_rgba(0,0,0,0.5)]'
                                        : 'text-white/50 hover:text-white'
                                        }`}
                                >
                                    <Icon className="w-[22px] h-[22px]" />
                                    <span className="text-[15px]">{link.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="mt-auto pb-10">
                        <div className="flex items-center gap-4 px-4 h-12 rounded-xl text-white/50 hover:text-white cursor-pointer transition-colors">
                            <LogOut className="w-[20px] h-[20px]" />
                            <span className="text-[15px]">Degiar</span>
                        </div>
                    </div>
                </aside>

                {/* Content Area */}
                <main className="flex-1 flex flex-col min-w-0 bg-[#0a0f0c] rounded-[2rem] border border-white/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] m-3 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
