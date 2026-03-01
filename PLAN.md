# PLAN.md - VirtuRoute (SaaS Premium de Rutas Virtuales)

## 1. Visión y Arquitectura del Sistema

**Objetivo:** Construir una plataforma de rutas virtuales premium con un modelo de marketplace (creadores y compradores) con una comisión por venta del 25% y un diseño "pixel-perfect" ultrarrealista, oscuro y elegante basado 100% en las referencias visuales proporcionadas.

**Stack Tecnológico Core:**
- **Framework Frontend & Backend**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos y Componentes**: Tailwind CSS + shadcn/ui + Lucide Icons
- **Base de Datos & Auth**: Supabase (PostgreSQL, Authentication interactiva, Storage)
- **Mapas y Geolocalización**: Leaflet + React-Leaflet + OpenStreetMap + Parseo de archivos GPX
- **Gráficos**: Recharts (para los dashboards de creadores con temática esmeralda)
- **Pagos**: Stripe (Checkout Sessions & Stripe Connect Webhooks para el split de 75%/25%)

## 2. Esquema de Base de Datos (Supabase PostgreSQL)

Supabase PostgreSQL alojará la lógica transaccional con RLS. Tablas principales:

### `users`
- `id` (uuid, PK, references auth.users)
- `email` (string)
- `full_name` (string)
- `avatar_url` (string)
- `role` (enum: 'buyer', 'creator')
- `stripe_account_id` (string, nullable) - ID de Stripe Connect para recibir payouts
- `created_at` (timestamp)

### `routes`
- `id` (uuid, PK)
- `creator_id` (uuid, FK users.id)
- `title` (string)
- `description` (text)
- `category` (string) - Ej: Senderismo, Ciclismo, Running, BTT
- `difficulty` (enum: 'Easy', 'Moderate', 'Hard', 'Expert')
- `distance_km` (numeric)
- `elevation_gain_m` (integer)
- `price` (numeric)
- `gpx_file_url` (string) - Ruta original en formato GPX en Storage
- `route_coordinates` (jsonb) - Coordenadas pre-procesadas (GeoJSON) para pintado rápido en el frontend en Leaflet sin necesidad de re-parsear el GPX
- `created_at` (timestamp)

### `route_photos`
- `id` (uuid, PK)
- `route_id` (uuid, FK routes.id)
- `photo_url` (string)
- `lat` (numeric) - Latitud exacta donde se tomó
- `lng` (numeric) - Longitud exacta donde se tomó
- `is_cover` (boolean)

### `purchases`
- `id` (uuid, PK)
- `buyer_id` (uuid, FK users.id)
- `route_id` (uuid, FK routes.id)
- `stripe_checkout_session` (string)
- `amount` (numeric)
- `creator_earnings` (numeric) - 75%
- `platform_fee` (numeric) - 25%
- `completed_percentage` (integer) - Progreso de la ruta virtual (0-100%)
- `created_at` (timestamp)

### `reviews` (Opcional para mostrar las estrellas)
- `id` (uuid, PK)
- `route_id` (uuid, FK routes.id)
- `user_id` (uuid, FK users.id)
- `rating` (smallint, 1-5)

## 3. Guía de Interfaz y UI/UX (Aesthetics & Pixel-Perfect)

Cumpliremos estrictamente al 100% con el "feeling" premium descrito, enfocado en un Look & Feel de alto rendimiento:

**Design Tokens Globales:**
- **Fondo principal**: `#0a0f0c` (negro bosque) y variaciones sutiles.
- **Acento Primario**: `#10b981` (Emerald Green) para call-to-actions, checkmarks de logo, líneas interactivas de mapas y progreso.
- **Acento Secundario**: `#0ea5e9` (Sky Blue) - Solo para detalles o estados nativos.
- **Bordes y Superficies**: Cajas y ventanas en `rounded-xl` (12px) y botones en `rounded-lg` (8px). Fondos de tarjetas con cristal o transparencias (glassmorphism leve), limitados por un `border-white/5` estricto.
- **Sombras**: Ambientales, bajas y difusas, evitando lo saturado. Ej. `shadow-2xl shadow-emerald-500/5`. Generoso "breathing room" (padding/margin extensos).
- **Tipografía**: `Inter`. Títulos potentes y legibles.

**Estructura Detallada de Vistas:**

1. **Landing Hero**: 
   - Background "héroe" con foto inmersiva o vídeo oscuro simulado. 
   - Logo "VirtuRoute" en blanco puro + Check verde (`#10b981`).
   - Botones Emerald prominentes. Presentación compacta tipo 4-Market Cards embebidas debajo.
   
2. **Marketplace (Explorador)**: 
   - Barra de búsqueda prominente en el header superior.
   - Sidebar a la izquierda con facetas/filtros estilo checkbox minimalista o sliders (Categoría, Dificultad, Distancia).
   - Card Grid de 3-4 columnas. En cada tarjeta: un mini `react-leaflet` interactivo en la cabecera cubriendo la mitad superior del card, detalles y estrellas amarillas.

3. **Página de Detalle de Ruta (Split View)**: 
   - Layout asimétrico. Mitad izquierda panorámica (55-60% width) con el mapa Leaflet embebido y polyline roja gruesa. Pop-ups y markers 100% fotográficos.
   - Mitad derecha oscura, limpia para narrativa completa, grandes claims de Stats al centro, y un enorme botón de pago integrado a Stripe.

4. **Dashboard Creador (Subir ruta)**: 
   - Formulario dividido, tipografías amplias.
   - Componente core central: Un mapa interactivo Leaflet tipo pizarra, donde los creadores pueden clickear y arrastrar. Dropzone de archivos GPX/Fotos incorporado elegante.

5. **Dashboard Creador (Mis Rutas)**: 
   - Diseño estilo SaaS B2B moderno. 3 tarjetas superiores estáticas ('Total vendido', etc.).
   - Gran tabla estilizada o list-view sin grids agresivos.
   - Gráfico expansible Recharts a la cola con línea esmeralda suave.

6. **Dashboard Comprador**: 
   - Grid enfocado en progreso. Cards con "Completada X%". 
   - Integración directa en la tarjeta de dos botones limpios: "Acceder al mapa" / "Descargar GPX".

## 4. Estructura de Rutas Next.js App Router (Fase 2 MVP Completo)

Para garantizar la navegación entre todas las pantallas de la plataforma sin falsos 404, implementaremos la siguiente estructura de carpetas `app/`:

- `app/page.tsx` → Landing Hero (Ya implementado, Intacto)
- `app/explorar/page.tsx` → Marketplace completo con filtros funcionales, buscador interactivo, y cards clicables (lleva a `/ruta/[id]`).
- `app/ruta/[id]/page.tsx` → Página pública de Detalle de Ruta. Mapa Leaflet, Galería interactiva, y CTA para Comprar (Stripe checkout loop).
- `app/precios/page.tsx` → Página de información de comisiones (25% split) e incentivos del ecosistema VirtuRoute.
- `app/auth/login/page.tsx` → UI de Login Supabase Auth (Email y Google OAuth).
- `app/auth/register/page.tsx` → UI de Registro Supabase Auth (Email, Full Name, Creador o Comprador checkbox).
- `app/dashboard/page.tsx` → Server Component Router. Redirige al usuario logueado automáticamente a `/comprador` o `/creador` basándose en la base de datos `users.role`.
- `app/creador/layout.tsx` → Layout global para Creadores. Navegación en el Sidebar. (Ya implementado parcialmente, se conectan subrutas).
- `app/creador/page.tsx` → Dashboard principal del creador (Estadísticas 3 cards, Tabla Recharts Mis Rutas).
- `app/creador/nueva-ruta/page.tsx` → Modalidad Subir Ruta para vender con formulario Leaflet draw.
- `app/creador/analytics/page.tsx` → Analítica extendida mock.
- `app/creador/settings/page.tsx` → Configuración de cuenta.
- `app/comprador/layout.tsx` → Layout global Comprador.
- `app/comprador/page.tsx` → Panel de Rutas Compradas con mapa track.
- `app/comprador/favoritos/page.tsx` → Wishlist de rutas.
- `app/comprador/perfil/page.tsx` → Configuración comprador.
- `app/crear-ruta/page.tsx` → Wrapper o página informativa para onboarding hacia el Dashboard Creador.

> **Importante en Navbar Global:** Todos los enlaces del Header (Landing, Marketplace, Explorar, etc.) utilizarán `<Link href="...">` de `next/link` de manera estricta para navegación SPA.

## 5. Implementación Supabase & Auth
- Interfaz pixel-perfect con el mismo color esmeralda (`#10b981`).
- Usaremos el API client `@supabase/supabase-js` para loguear en backend. 

## 6. Fases de Implementación a Seguir (FASE 2)

**Fase 2.1: Actualizar Plan y Checklist (Actualizado)**
**Fase 2.2: Crear Estructura de Carpetas 404 Fix**
- `precios`, `auth`, `dashboard` y sus subcarpetas.
**Fase 2.3: Configurar Navbars Globlales**
- Modificar el archivo `src/app/page.tsx` (Landing page) sólo para añadir valid `<Link>` tags en el Navbar, respetando visualmente todo el resto 100%.
**Fase 2.4: Auth Forms (Login y Register)**
- Implementación pixel-perfect oscura.
**Fase 2.5: Marketplace y Detalle Dinámicos**
- Lógica de estados en React (búsqueda, filtros simulados). Enrutamiento idéntico (slug routing).

---

> El plan ha sido formulado siguiendo tus precisos requerimientos de diseño premium, esquema tecnológico y necesidades base.
