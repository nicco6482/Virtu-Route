import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "VirtuRoute | Rutas Virtuales Premium",
  description: "Explora rutas virtuales épicas, sube las tuyas y genera ingresos. La plataforma premium para aventureros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Forcing dark mode internally as requested
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0f0c] text-white selection:bg-emerald-500/30`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
