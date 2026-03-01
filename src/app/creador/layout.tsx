"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CheckCircle2, Home, LayoutDashboard, BarChart3, Settings, HelpCircle, User } from "lucide-react";

export default function CreatorLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/", icon: Home },
        { name: "Dashboard", href: "/creador", icon: LayoutDashboard },
        { name: "Mis Rutas", href: "/creador/mis-rutas", icon: LayoutDashboard },
        { name: "Analytics", href: "/creador/analytics", icon: BarChart3 },
        { name: "Settings", href: "/creador/settings", icon: Settings },
        { name: "Help", href: "/creador/help", icon: HelpCircle },
    ];

    return (
        <div className="min-h-screen bg-[#1a1f1b] flex items-center justify-center p-4">
            <div className="w-full max-w-[1400px] h-[900px] bg-[#121814] rounded-[2rem] overflow-hidden flex border border-white/5 shadow-2xl shadow-black/50">

                {/* Sidebar */}
                <aside className="w-[280px] bg-[#181f1a] flex flex-col border-r border-white/5">
                    <div className="px-8 flex items-center gap-3 h-28 shrink-0">
                        <CheckCircle2 className="w-7 h-7 text-emerald-500" />
                        <span className="text-xl font-bold tracking-tight text-white">VirtuRoute</span>
                    </div>

                    <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto">
                        {links.map((link) => {
                            const isActive = pathname === link.href || (link.href === '/creador' && pathname === '/creador');
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`flex items-center gap-4 px-4 h-12 rounded-xl transition-all ${isActive
                                            ? 'bg-[#2a342e] text-white font-medium'
                                            : 'text-white/60 hover:bg-[#202723] hover:text-white'
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span className="text-[15px]">{link.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="p-4 shrink-0">
                        <div className="flex items-center gap-3 px-4 h-14 rounded-xl text-white/60 hover:text-white cursor-pointer transition-colors">
                            <Settings className="w-5 h-5" />
                            <span className="text-[15px]">Perfil SaaS</span>
                        </div>
                    </div>
                </aside>

                {/* Content Area */}
                <main className="flex-1 flex flex-col min-w-0 bg-[#121814]">
                    {children}
                </main>
            </div>
        </div>
    );
}
