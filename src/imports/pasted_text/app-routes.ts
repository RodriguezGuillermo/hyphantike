Construye la landing page completa de "Hyphantiké: Arquitectura Política", una consultora de arquitectura política. Usa React + TypeScript + Tailwind CSS v4 + React Router v7 + pnpm. Crea todos los archivos exactamente como se indican.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PALETA DE COLORES — NO CAMBIAR NUNCA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#F0E9D2 → fondo principal (crema)
#E6DDC4 → fondo secundario / tarjetas
#678983 → color acento (verde oliva)
#181D31 → fondo oscuro / texto principal (azul marino)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FUENTES GOOGLE — importar en src/styles/fonts.css
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');

Playfair Display → títulos grandes, cursiva
EB Garamond → cuerpo de texto, párrafos
Inter → etiquetas, botones, navegación

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ESTRUCTURA DE ARCHIVOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
src/app/App.tsx
src/app/routes.ts
src/app/context/CMSContext.tsx
src/app/hooks/useIntersectionObserver.ts
src/app/components/figma/ImageWithFallback.tsx
src/app/components/SectionHeader.tsx
src/app/components/Navbar.tsx
src/app/components/Hero.tsx
src/app/components/Nosotros.tsx
src/app/components/Servicios.tsx
src/app/components/Ensayos.tsx
src/app/components/Footer.tsx
src/app/pages/Root.tsx
src/app/pages/Home.tsx
src/app/pages/ServicioPage.tsx
src/app/pages/VisorPublicacion.tsx
src/app/pages/AdminPanel.tsx
src/styles/fonts.css

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REGLAS DE DISEÑO GLOBALES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Todos los estilos van en style={} inline. No usar clases Tailwind salvo para responsive: "hidden md:flex", "md:hidden", "flex-col".
- border-radius máximo 2px en cualquier elemento. Estética de bordes rectos.
- Sin sombras llamativas. Solo box-shadow sutil en navbar al hacer scroll.
- Separadores: líneas de 1px solid con rgba(103,137,131,0.3–0.4).
- maxWidth de contenido: 1152px centrado con margin: "0 auto".
- padding lateral: 24px en mobile, automático en desktop.
- Sin emojis, sin gradientes de colores, sin glassmorphism.
- Estética minimalista tipo editorial impresa.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMÁGENES UNSPLASH — URLs EXACTAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NOSOTROS:
https://images.unsplash.com/photo-1760304840498-ed66b33b22da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGdvdmVybmFuY2UlMjBhcmNoaXRlY3R1cmUlMjBwbGFubmluZ3xlbnwxfHx8fDE3NzMyNzgyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080

SERVICIO 1 (Diagnóstico Político):
https://images.unsplash.com/photo-1557318041-4290eaf63158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpdGljYWwlMjBjb25zdWx0aW5nJTIwc3RyYXRlZ3klMjBtZWV0aW5nfGVufDF8fHx8MTc3MzI3ODIzNXww&ixlib=rb-4.1.0&q=80&w=1080

SERVICIO 2 (Arquitectura Institucional):
https://images.unsplash.com/photo-1742867114418-add25fecaa89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9va3MlMjBzdHVkeSUyMGFjYWRlbWljfGVufDF8fHx8MTc3MzI3ODIzOHww&ixlib=rb-4.1.0&q=80&w=1080

SERVICIO 3 (Estrategia Comunicacional):
https://images.unsplash.com/photo-1599584403014-03e148e02ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzcyUyMGNvbmZlcmVuY2UlMjBwb2RpdW0lMjBtaWNyb3Bob25lJTIwc3BlZWNofGVufDF8fHx8MTc3MzI3ODI0MXww&ixlib=rb-4.1.0&q=80&w=1080

ENSAYO 1:
https://images.unsplash.com/photo-1758294449756-3b1c31a68362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBwb2xpY3klMjBkZW1vY3JhY3klMjBjaXZpYyUyMGRvY3VtZW50fGVufDF8fHx8MTc3MzI3ODIzOHww&ixlib=rb-4.1.0&q=80&w=1080

ENSAYO 2: (misma que Servicio 2)
ENSAYO 3: (misma que Nosotros)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO: src/app/App.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { CMSProvider } from "./context/CMSContext";

export default function App() {
  return (
    <CMSProvider>
      <RouterProvider router={router} />
    </CMSProvider>
  );
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO: src/app/routes.ts
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import { createBrowserRouter } from "react-router";
import { Root }             from "./pages/Root";
import { Home }             from "./pages/Home";
import { ServicioPage }     from "./pages/ServicioPage";
import { VisorPublicacion } from "./pages/VisorPublicacion";
import { AdminPanel }       from "./pages/AdminPanel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true,           Component: Home },
      { path: "servicios/:id", Component: ServicioPage },
      { path: "ensayos",       Component: Home },
      { path: "ensayos/:id",   Component: VisorPublicacion },
    ],
  },
  { path: "/admin", Component: AdminPanel },
]);

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO: src/app/context/CMSContext.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sistema CMS con React Context + localStorage. Clave de storage: "hyphantiké_cms_v1".

Tipos:
- Ensayo: { id: string; titulo: string; descripcion: string; fecha: string; image: string; }
- Servicio: { id: number; title: string; description: string; image: string; }
- CMSData: { logoUrl: string; nosotros: { imageUrl, parrafo1, parrafo2, parrafo3 }; serviciosIntro: string; servicios: Servicio[]; ensayos: Ensayo[]; }

Valores por defecto (defaultCMS):
- logoUrl: "" (vacío, usa logo tipográfico)
- nosotros.imageUrl: URL Nosotros de Unsplash arriba
- nosotros.parrafo1: "Hyphantiké parte de una premisa filosófica: la política no es el escenario en que las cosas ocurren, sino la trama misma que las hace posibles. Tejido de relaciones, poderes y sentidos, la política configura lo que existe y lo que puede existir en el espacio colectivo."
- nosotros.parrafo2: "Nuestra consultora trabaja con actores políticos, instituciones públicas y organizaciones sociales para diseñar arquitecturas que den forma duradera a sus proyectos. Combinamos rigor analítico con comprensión estratégica de las dinámicas de poder."
- nosotros.parrafo3: "No ofrecemos recetas genéricas: construimos junto a cada cliente las herramientas conceptuales e institucionales que su situación particular requiere, desde el diagnóstico hasta la implementación y el seguimiento."
- serviciosIntro: "Hyphantiké trabaja en tres niveles complementarios de análisis e intervención política: comprender la estructura de los problemas, diseñar soluciones institucionales y organizar la expresión pública de las ideas."
- servicios[0]: id=1, title="Diagnóstico Político", description="Análisis profundo de las estructuras de poder...", image=URL Servicio 1
- servicios[1]: id=2, title="Arquitectura Institucional", description="Diseño de estructuras organizativas...", image=URL Servicio 2
- servicios[2]: id=3, title="Estrategia Comunicacional", description="Construcción de narrativas políticas coherentes...", image=URL Servicio 3
- ensayos[0]: id="1", titulo="La Trama Invisible del Poder", descripcion="Un análisis de las redes de poder subyacentes...", fecha="Febrero 2026", image=URL Ensayo 1
- ensayos[1]: id="2", titulo="Filosofía y Gestión Pública", descripcion="Sobre los fundamentos filosóficos...", fecha="Enero 2026", image=URL Ensayo 2
- ensayos[2]: id="3", titulo="Arquitectura del Consenso", descripcion="Exploración de los mecanismos institucionales...", fecha="Diciembre 2025", image=URL Ensayo 3

Funciones del contexto: update, updateNosotros, updateServicio, addEnsayo, updateEnsayo, removeEnsayo, reset. Usar useCallback. Guardar en localStorage en cada cambio con useEffect.

Exportar: CMSProvider, useCMS, defaultCMS, tipos Ensayo/Servicio/CMSData.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO: src/app/hooks/useIntersectionObserver.ts
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hook que recibe { threshold, rootMargin, triggerOnce=true }. Retorna { ref, isVisible }. Usa useRef + useState + IntersectionObserver. Por defecto triggerOnce=true: una vez visible no vuelve a ocultarse.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO: src/app/components/figma/ImageWithFallback.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Wrapper de <img> con manejo de error. Si src está vacío o falla, muestra un div con backgroundColor: "#E6DDC4" y texto "imagen" en color rgba(103,137,131,0.4). Acepta los mismos props que <img>.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO: src/app/components/SectionHeader.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Props: { title: string; dark?: boolean }
Diseño: div con borderTop y borderBottom de 1px solid (rgba(103,137,131,0.35) en claro, rgba(103,137,131,0.4) en oscuro). padding: "18px 0". marginBottom: "52px". textAlign: "center".
Dentro: h2 con fontFamily Inter, letterSpacing "0.42em", textTransform uppercase, fontSize clamp(0.7rem,1.5vw,0.8rem), fontWeight 600. Color: #181D31 si claro, #F0E9D2 si oscuro.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO: src/app/components/Navbar.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DISEÑO EXACTO:
- position fixed, top/left/right 0, zIndex 50
- backgroundColor: "#F0E9D2"
- height 60px
- borderBottom: 1px solid rgba(103,137,131,0.3) → al hacer scroll cambia a 1px solid #678983
- boxShadow al hacer scroll: "0 2px 12px rgba(24,29,49,0.08)"
- Transición suave de borde y sombra

LOGO (izquierda):
- Si data.logoUrl existe: <img> con height 36px
- Si no: cuadrado 34x34 con border "2px solid #678983", dentro letra "H" en #678983 tamaño 18px bold + texto "Hyphantiké" en Playfair Display italic #181D31 fontSize 1rem

LINKS DE NAVEGACIÓN (derecha, ocultos en mobile):
- "Inicio" → href "/"
- "Nosotros" → href "/#nosotros"
- "Servicios" → href "/#servicios"
- "Ensayos" → href "/#ensayos"
- Cada link: color #181D31, fontSize 13px, letterSpacing 0.08em, padding "6px 16px"
- Al hover: color #678983, backgroundColor rgba(103,137,131,0.08)
- Smooth scroll: al hacer click en links /#seccion, prevenir default y hacer scrollIntoView

BURGER MOBILE (solo en mobile, md:hidden):
- Icono Menu/X de lucide-react tamaño 22
- Al abrir: menú desplegable debajo del navbar con backgroundColor #F0E9D2, borderTop, links apilados con borderBottom

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO: src/app/components/Hero.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DISEÑO EXACTO:
- section id="inicio"
- backgroundColor: "#181D31"
- paddingTop: "60px" (compensa navbar fija)
- minHeight: "100vh"
- display flex, flexDirection column
- Patrón de cuadrícula sutil (aria-hidden): dos repeating-linear-gradient superpuestos con líneas cada 45px en rgba(103,137,131,0.05), absolute inset 0

BLOQUE CENTRAL (flex:1, centra verticalmente):
- display flex, flexDirection column, alignItems center, justifyContent center
- textAlign center, padding "80px 24px 60px"
- Animación fade-in + translateY al montar (setTimeout 80ms → opacity 1, translateY 0, transition 1s ease)

  TÍTULO:
  - <h1> "Hyphantiké"
  - fontFamily: 'Playfair Display', Georgia, serif
  - fontStyle: italic
  - color: "#F0E9D2"
  - fontSize: clamp(3.5rem, 10vw, 7rem)
  - lineHeight: 1.0
  - letterSpacing: "-0.02em"

  LÍNEA DIVISORIA:
  - div width 80px, height 1px, backgroundColor "#678983", margin "28px auto"

  SUBTÍTULO:
  - <p> "Arquitectura política"
  - fontFamily: Inter, sans-serif
  - color: "#678983"
  - fontSize: clamp(0.7rem, 1.6vw, 0.85rem)
  - letterSpacing: "0.5em"
  - textTransform: uppercase

FRANJA INFERIOR (al fondo del hero):
- borderTop: "1px solid rgba(103,137,131,0.2)"
- padding: "28px 24px", textAlign center
- Fade-in con delay 0.5s
- <p> en EB Garamond italic, color rgba(240,233,210,0.55), fontSize clamp(0.85rem,1.4vw,1rem)
- Texto: "Pensamiento estructural para la política. " + <span color rgba(103,137,131,0.8)>"Ramírez Jerónimo."</span>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO: src/app/components/Nosotros.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- section id="nosotros", backgroundColor "#F0E9D2", padding "80px 0"
- SectionHeader title="Nosotros"
- Grid 1 columna mobile → 2 columnas desktop (className nosotros-grid con media query)
- gap 48px, animación IntersectionObserver (threshold 0.12): fade-in + translateY(40px→0) en 0.85s

COLUMNA IZQUIERDA (imagen):
- div aspectRatio "4/3", overflow hidden, border "1px solid rgba(103,137,131,0.4)"
- ImageWithFallback con objectFit cover, src desde data.nosotros.imageUrl

COLUMNA DERECHA (texto):
- backgroundColor "#E6DDC4", border "1px solid rgba(103,137,131,0.3)", padding 40px
- Línea acento: div width 36px, height 3px, backgroundColor "#678983", marginBottom 24px
- 3 párrafos (parrafo1, parrafo2, parrafo3 del CMS) en EB Garamond, color #181D31, fontSize 1.05rem, lineHeight 1.9
- Firma al pie: borderTop rgba(103,137,131,0.3), paddingTop 24px, display flex, gap 16px
  - Cuadrado 32x32 border "2px solid #678983" con "H" en #678983 fontSize 14px bold
  - Texto "Consultora de Arquitectura Política" en Inter uppercase letterSpacing 0.18em color #678983 fontSize 12px

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO: src/app/components/Servicios.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- section id="servicios", backgroundColor "#E6DDC4", padding "80px 0"
- SectionHeader title="Servicios"
- Párrafo introductorio: EB Garamond, color rgba(24,29,49,0.75), fontSize 1.05rem, lineHeight 1.85, maxWidth 780px, marginBottom 48px. Texto desde data.serviciosIntro.
- Grid 1 columna mobile → 3 columnas desktop (className servicios-grid)

TARJETA DE SERVICIO (ServiceCard):
- backgroundColor "#F0E9D2", border "1px solid rgba(103,137,131,0.4)", display flex flexDirection column
- Animación IntersectionObserver threshold 0.08: fade-in + translateY(52px→0) en 0.75s
- En mobile: delay escalonado 160ms × índice. En desktop: sin delay.

  IMAGEN DE TARJETA:
  - aspectRatio "16/9", overflow hidden, backgroundColor "#E6DDC4"
  - ImageWithFallback objectFit cover

  CONTENIDO DE TARJETA (padding 28px):
  - Línea acento: 28px × 2px, backgroundColor "#678983", marginBottom 14px
  - Título: Inter uppercase letterSpacing 0.14em fontSize 0.78rem fontWeight 600 color #181D31
  - Descripción: EB Garamond color rgba(24,29,49,0.8) fontSize 0.97rem lineHeight 1.8 flex:1
  - Link "Ver servicio →": color #678983, Inter uppercase 11px letterSpacing 0.14em, borderBottom 1px solid transparent → #678983 en hover, alignSelf flex-start

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO: src/app/components/Ensayos.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- section id="ensayos", backgroundColor "#F0E9D2", padding "80px 0"
- SectionHeader title="Ensayos"
- Si ensayos.length === 0: párrafo en EB Garamond italic "Próximamente se publicarán ensayos."

DESKTOP (hidden md:flex flex-col, gap 16px):
Cada fila (EnsayoRow):
- Animación: fade-in + translateY(40px→0), delay=index×140ms
- Link a /ensayos/:id
- article: display flex, alignItems stretch, border "1px solid rgba(103,137,131,0.4)", backgroundColor "#F0E9D2", minHeight 110px
- En hover: borderColor "#678983", backgroundColor "#EAE3CC"
  - Imagen izquierda: 110px de ancho fijo, objectFit cover, backgroundColor "#E6DDC4"
  - Texto (flex:1, padding "20px 28px"):
    - Fecha: Inter 10px letterSpacing 0.22em uppercase color #678983
    - Título: Playfair Display italic color #181D31 fontSize 1.1rem
    - Descripción: EB Garamond color rgba(24,29,49,0.7) fontSize 0.9rem lineHeight 1.6
  - Flecha: <ArrowRight size={16} color="#678983"/> a la derecha (padding "0 24px")

MOBILE (md:hidden):
Solo el primer ensayo del array como tarjeta grande:
- Imagen 16:9 arriba
- Debajo: etiqueta "Último Ensayo · {fecha}", título grande en Playfair italic, descripción, link "Leer ensayo" con icono FileText

BOTÓN "Ver todos los ensayos":
- Alineado a la derecha, marginTop 32px
- padding "12px 28px", backgroundColor "#678983", color "#F0E9D2"
- Inter uppercase 11px letterSpacing 0.18em fontWeight 500
- En hover: backgroundColor "#556f6a"
- Link a /ensayos

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO: src/app/components/Footer.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- footer: backgroundColor "#181D31", borderTop "3px solid #678983"
- Contenido centrado, padding "32px 24px"
- Solo un párrafo: "© {año} Hyphantiké · Arquitectura Política. Todos los derechos reservados."
- Inter, color rgba(240,233,210,0.35), fontSize 11px, letterSpacing 0.06em
- SIN logo, SIN enlaces, SIN iconos sociales.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO: src/app/pages/Root.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
div con minHeight 100vh, display flex, flexDirection column, backgroundColor "#F0E9D2".
Dentro: <Navbar/> + <div style={{flex:1}}><Outlet/></div> + <Footer/>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO: src/app/pages/Home.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<main> con: <Hero/> <Nosotros/> <Servicios/> <Ensayos/>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO: src/app/pages/ServicioPage.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ruta /servicios/:id. Lee el id de useParams.

Datos internos (objeto estático, NO desde CMS):

id "1":
- title: "Diagnóstico Político"
- subtitle: "Análisis profundo de estructuras y coyunturas"
- image: URL Servicio 1
- descripcion[0]: "Toda acción política eficaz comienza por un diagnóstico honesto y riguroso. En Hyphantiké construimos mapas de situación que revelan las correlaciones de fuerza, los actores relevantes y las líneas de conflicto que definen el escenario político de cada cliente."
- descripcion[1]: "Nuestro método combina análisis estructural de largo plazo con lectura coyuntural de alta sensibilidad. Utilizamos herramientas tanto cualitativas —entrevistas, grupos focales, análisis discursivo— como cuantitativas —encuestas, análisis de redes, modelado estadístico."
- descripcion[2]: "El resultado es un documento estratégico que no sólo describe la situación, sino que abre un conjunto de opciones de intervención con sus respectivas condiciones de posibilidad y riesgo."
- cita: "\"Sólo quien conoce el terreno puede construir sobre él. El diagnóstico no es el mapa: es la capacidad de leer el territorio.\""

id "2":
- title: "Arquitectura Institucional"
- subtitle: "Diseño de estructuras de poder y gobernanza"
- image: URL Servicio 2
- descripcion[0]: "Las instituciones son las formas sedimentadas del poder político. Diseñarlas bien significa construir estructuras que articulen eficacia con legitimidad, que resistan las presiones del corto plazo y que sean capaces de adaptarse a contextos cambiantes."
- descripcion[1]: "Trabajamos en el diseño de organismos públicos, partidos políticos, coaliciones y organizaciones de la sociedad civil, acompañando tanto la fase fundacional como los procesos de reforma y reestructuración."
- descripcion[2]: "Nuestro enfoque integra perspectivas de la teoría política, el derecho público y la sociología de las organizaciones, ofreciendo soluciones que van más allá del puro formalismo jurídico para abordar la dimensión política real de cada estructura."
- cita: "\"Las instituciones no son jaulas: son las formas que da el colectivo a su voluntad de persistir en el tiempo.\""

id "3":
- title: "Estrategia Comunicacional"
- subtitle: "Narrativas políticas y comunicación estratégica"
- image: URL Servicio 3
- descripcion[0]: "La política se juega también en el campo del sentido. Las narrativas que construyen los actores políticos no son decorativas: son el tejido simbólico que da coherencia a sus proyectos y que conecta o desconecta con las experiencias y expectativas ciudadanas."
- descripcion[1]: "Desarrollamos estrategias comunicacionales que parten de un diagnóstico del campo semántico y de los públicos relevantes, para construir mensajes que sean a la vez auténticos, eficaces y éticamente responsables."
- descripcion[2]: "Acompañamos la construcción de identidades institucionales, el diseño de campañas, la preparación de voceros y la gestión de crisis comunicacionales, siempre desde una perspectiva política integral."
- cita: "\"Comunicar políticamente no es convencer: es hacer visible lo que ya está latente en la experiencia compartida.\""

LAYOUT DE ServicioPage:
- paddingTop 60px (navbar)
- Cabecera: backgroundColor "#181D31", borderBottom "3px solid #678983", padding "56px 24px"
  - Link "← Volver al inicio" (color rgba(240,233,210,0.55) → #678983 hover)
  - Etiqueta "Servicios" en Inter 10px uppercase letterSpacing 0.32em color #678983
  - h1 en Playfair italic #F0E9D2 fontSize clamp(2rem,5vw,3.2rem)
  - Subtítulo en Inter rgba(240,233,210,0.6) fontSize 0.95rem
- Cuerpo: grid 1→2 col desktop, gap 48px, padding "64px 24px"
  - Imagen 4:3 con border "1px solid rgba(103,137,131,0.4)"
  - Párrafos en EB Garamond #181D31 1.05rem lineHeight 1.9
  - Cita: backgroundColor "#E6DDC4", borderLeft "3px solid #678983", padding "24px 28px", Playfair italic #181D31

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO: src/app/pages/VisorPublicacion.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ruta /ensayos/:id. Lee id de useParams.

Datos meta estáticos para ids "1","2","3" (titulo, fecha, autor="Equipo Hyphantiké", resumen).

LAYOUT:
- paddingTop 60px
- Cabecera oscura #181D31 borderBottom "3px solid #678983":
  - Link "← Volver a publicaciones"
  - Etiqueta "Documento · {fecha}" en Inter 10px #678983 uppercase
  - h1 en Playfair italic #F0E9D2
  - Autor en Inter rgba(240,233,210,0.5) 12px
  - Botones: "Descargar" (outline #678983) y "Abrir" (filled #678983, color #F0E9D2)

- Cuerpo padding "48px 24px":
  - Bloque resumen: backgroundColor "#E6DDC4", borderLeft "3px solid #678983", padding "24px 28px"
  - Visor placeholder: border, backgroundColor "#E6DDC4", minHeight 60vh, centrado
    - Icono FileText 28px color #678983 en cuadrado 56x56 con border
    - Texto "Visor de Documento" en Playfair italic
    - Descripción técnica en Inter rgba(24,29,49,0.55)
    - Badge: "● Integración pendiente · Slot dinámico activo" en #678983
  - Nota técnica (border dashed): explicación de cómo conectar con Supabase Storage

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO: src/app/pages/AdminPanel.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ruta /admin (fuera del Root, sin Navbar ni Footer propios del sitio).

HEADER STICKY:
- backgroundColor "#181D31", height 60px, position sticky top 0 zIndex 40
- Izquierda: link "← Volver al sitio" (router Link a "/") + título "Panel de administración" en Playfair italic #F0E9D2
- Derecha: botón "Restaurar" (outline #678983, icono RefreshCw) con confirm() + botón "Guardar" (backgroundColor #678983, icono Save) que al clicar muestra "¡Guardado!" 2 segundos

TABS (4 pestañas):
Logo | Nosotros | Servicios | Ensayos
- borderBottom 1px rgba(103,137,131,0.3)
- Tab activa: borderBottom "2px solid #678983", color #678983, fontWeight 600
- Tab inactiva: borderBottom "2px solid transparent", color rgba(24,29,49,0.5)

PESTAÑA LOGO:
- Explicación: "Si se carga una imagen, reemplaza el logo tipográfico. Déjelo vacío para usar el logo estándar."
- Componente ImageField para logoUrl

PESTAÑA NOSOTROS:
- ImageField para nosotros.imageUrl
- 3 textareas para parrafo1, parrafo2, parrafo3

PESTAÑA SERVICIOS:
- Textarea para serviciosIntro
- Para cada servicio (3): título en Inter uppercase #678983, input para title, textarea para description, ImageField para image

PESTAÑA ENSAYOS:
- Botón "+ Nuevo ensayo" (backgroundColor #678983)
- Al clicar: formulario inline con campos titulo, descripcion, fecha, ImageField + botones "Guardar ensayo" y "Cancelar"
- Lista de ensayos existentes como EnsayoEditor: cabecera colapsable con título + fecha + botón "Eliminar" (rojo outline, confirm()) + botón "Editar/Cerrar"
- Al expandir: inputs para titulo, descripcion, fecha, ImageField

COMPONENTE ImageField (dentro del AdminPanel):
- Props: { label, value, onChange }
- Toggle "URL" / "Subir archivo"
- Modo URL: input text para la URL
- Modo Subir: input file oculto + botón "Seleccionar imagen" que dispara el file input → readAsDataURL → llama onChange con base64
- Preview: si hay value, mostrar img 120px de alto con objectFit cover + botón "×" para limpiar

ESTILOS DEL ADMIN:
- Fondo: #F0E9D2
- Tarjetas/secciones: backgroundColor "#E6DDC4", border "1px solid rgba(103,137,131,0.3)", padding 28px
- Inputs: backgroundColor "#F0E9D2", border "1px solid rgba(103,137,131,0.4)", padding "10px 12px", fontFamily EB Garamond
- Labels: Inter 10px uppercase letterSpacing 0.2em color #678983
- Sin border-radius

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Breakpoint único: 768px.
Usar <style> con media query dentro de los componentes:
- .nosotros-grid → 1fr mobile / 1fr 1fr desktop
- .servicios-grid → 1fr mobile / repeat(3,1fr) desktop
- .servicio-content-grid → 1fr mobile / 1fr 1fr desktop
Usar className="hidden md:flex" y className="md:hidden" de Tailwind para alternar visibilidad.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ANIMACIONES EXACTAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hero: setTimeout 80ms → setVisible(true). Transición opacity + translateY de 1s ease.
Nosotros: IntersectionObserver threshold 0.12 → opacity + translateY(40px) en 0.85s.
Servicios tarjetas: threshold 0.08 → opacity + translateY(52px) en 0.75s. Delay mobile: índice × 160ms.
Ensayos filas: threshold 0.08 → opacity + translateY(40px) en 0.65s. Delay: índice × 140ms.
Todos los observers: triggerOnce = true (no se repite).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESUMEN VISUAL PÁGINA A PÁGINA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/ (Home):
  [Navbar crema sticky]
  [Hero azul marino 100vh — "Hyphantiké" italic gigante centrado — línea — "Arquitectura política" — franja inferior con frase]
  [Nosotros crema — grid imagen 4:3 + caja crema oscuro con 3 párrafos]
  [Servicios crema oscuro — intro — 3 tarjetas con imagen 16:9 + texto]
  [Ensayos crema — lista de filas horizontales con imagen 110px + texto + flecha]
  [Footer marino — solo copyright]

/servicios/1, /servicios/2, /servicios/3:
  Cabecera marino + cuerpo con imagen 4:3 y párrafos + cita

/ensayos/:id:
  Visor simulado de documentos con placeholder

/admin:
  Panel de gestión de contenidos con 4 pestañas