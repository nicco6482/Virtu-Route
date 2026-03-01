# 🌍 VirtuRoute - Premium Virtual Route SaaS

![VirtuRoute Banner](https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=400&fit=crop)

Bienvenido a **VirtuRoute**, una plataforma SaaS nivel *Ultra-Premium* diseñada para conectar a atletas outdoor, ciclistas de salón y exploradores con rutas mapeadas hiper-realistas en todo el planeta. 

Ya sea que busques desafiar el Paso de Mahoma en el Pirineo Aragonés o pedalear por los prados de los Dolomitas desde tu *Smart Trainer*, VirtuRoute procesa, vende y streamea el entorno ideal para ti.

🔗 **[Visita la aplicación en vivo aquí](https://virtu-route.vercel.app/)** *(Actualiza por tu URL final de Vercel)*

---

## 💎 Características Premium (SaaS Ready)
- **Animaciones Cinematográficas**: UI potenciada enteramente por `framer-motion` (Parallax scroll, fade-ins, hovers con glow radial).
- **Glassmorphism Inteligente**: Sidebars, navbars y tarjetas con efecto cristalino sobre la densa interfaz oscura.
- **Rutas GPX Reales**: Integración experta con Leaflet interactivo permitiendo visualizar trazados de rutas exactos con puntos de inicio y final precisos.
- **Modo Inmersivo (Lightbox)**: Zoom hiper-detallado sobre imágenes fotográficas exclusivas 4K a través de modales.
- **Dual Dashboard**: Paneles limpios y específicos tanto para el "Usuario Comprador" como para el "Atleta Creador".
- **Creador Studio**: Innovador componente web GIS que permite dibujar a mano alzada las coordenadas reales al subir nuevas rutas al ecosistema. 
- **Integrado para Monetizar**: Estructurado pensando en la futura escalabilidad a suscripciones con Stripe Connect (75/25 split).

---

## 🛠 Stack Tecnológico

1. **Core**: Next.js 15 (App Router Server Components), React 19, TypeScript.
2. **Estilado**: Tailwind CSS v4, `shadcn/ui`, Lucide Icons.
3. **Motores de Mapas**: `react-leaflet`, LeafletJS.
4. **Interactividad**: `framer-motion`, `yet-another-react-lightbox`.
5. **Preparación Base de Datos**: `@supabase/supabase-js`.
6. **Deploy Sugerido**: Vercel.

---

## 🚀 Empezando en Local (Desarrolladores)

El proyecto está diseñado para funcionar out-of-the-box sin necesidad de instalar bases de datos externas en la Fase actual MVP.

### 1. Clona el Repositorio
```bash
git clone https://github.com/nicco6482/Virtu-Route.git
cd Virtu-Route
```

### 2. Instala Dependencias
Usando `npm` o tu gestor favorito:
```bash
npm install
```

### 3. Levanta el Servidor de Desarrollo
```bash
npm run dev
```
La aplicación vivirá mágicamente en **[http://localhost:3000](http://localhost:3000)**. 

*(**Nota para desarrolladores**: Asegúrate de tener los dominios fotográficos aprobados en el `next.config.ts` o Next.js Image Component bloqueará su renderizado).*

---

## 🖼 Galería Rápida (Screenshots)
*(Añade aquí capturas de tu pantalla si lo deseas)*
- **Landing Page Hero:** Diseño impactante parallax oscuro con botón focal Esmeralda.
- **Marketplace Global:** Grid de tarjetas dinámico, mapas Leaflet en cabecera y lightbox.

---

## 📄 Licencia y Autores

Desarrollado con obsesión *pixel-perfect*. © 2026 VirtuRoute Inc. (Demo Portfolio).
Todos los derechos reservados sobre el código fuente a menos que se indique lo contrario. Las imágenes fotográficas pueden pertenecer a Unsplash, Dreamstime, Alamy u otros servicios en la capa de prueba de datos en `rutas.ts`.

> "Porque las montañas más altas ya no requieren comprarse un billete de avión."
