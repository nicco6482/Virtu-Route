# Contribuyendo a VirtuRoute

¡Gracias por tu interés en contribuir a VirtuRoute! Como un proyecto de código abierto, damos la bienvenida a las contribuciones de la comunidad que nos ayuden a mejorar y expandir las capacidades de esta plataforma premium de rutas virtuales.

## ¿Cómo puedo contribuir?

### Reportar Bugs
Si encuentras un error o un comportamiento inesperado, por favor abre un **Issue** en el repositorio. Asegúrate de incluir:
- Una descripción clara del problema.
- Pasos para reproducirlo.
- El comportamiento esperado vs el comportamiento actual.
- Capturas de pantalla si aplica.

### Sugerir Mejoras
¿Tienes una idea para una nueva característica (e.g. integrar nuevos mapas satelitales en Leaflet, añadir telemetría Bluetooth, etc.)? Abre un **Issue** describiendo tu propuesta y los beneficios que aportaría al proyecto.

### Contribuir con Código
1. **Haz un Fork** del repositorio en tu cuenta de GitHub.
2. **Clona** tu fork localmente (`git clone https://github.com/TU_USUARIO/Virtu-Route.git`).
3. **Crea una rama** para tu nueva funcionalidad o arreglo (`git checkout -b feature/AmazingFeature` o `fix/BugName`).
4. **Haz commit** de tus cambios siguiendo la convención de Commits Convencionales (`git commit -m 'feat: Add some AmazingFeature'`).
5. **Haz push** a tu rama en GitHub (`git push origin feature/AmazingFeature`).
6. **Abre un Pull Request** (PR) desde tu rama hacia la rama principal (`main`) del repositorio original de VirtuRoute. Aporta una descripción clara de los cambios realizados.

## Estilo de Código y Buenas Prácticas
- VirtuRoute utiliza **Next.js 15**, **React 19**, y **TypeScript**. Por favor, asegúrate de mantener un tipado estricto.
- Utilizamos **Tailwind CSS v4** y **shadcn/ui** para los estilos. Mantén el diseño coherente con la temática oscura y minimalista del proyecto (glassmorphism, animaciones suaves con framer-motion).
- Antes de abrir un PR, ejecuta `npm run build` y `npm run lint` en tu entorno local para asegurar que la compilación es exitosa y no hay errores de linter.

¡Esperamos con interés tu contribución!
