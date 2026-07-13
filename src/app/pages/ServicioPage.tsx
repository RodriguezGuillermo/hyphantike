import { useState } from "react";
import { useParams, Link } from "react-router";
import imgAnalisis from "../../imports/arquitectura_del_discurso-1.png";
import imgDiseño from "../../imports/Dise_o_y_planificaicion.png";
import imgArquitectura from "../../imports/analisis_discursivos.png";


interface ServicioData {
  title: string;
  subtitle: string;
  image: string;
  intro: string[];
  bloques: { heading?: string; body: string }[];
  cita?: string;
}

const SERVICIOS: Record<string, ServicioData> = {
  "1": {
    title: "Análisis estructural",
    subtitle: "Diagnóstico, coyuntura y lectura estratégica multinivel",
    image: imgAnalisis,
    intro: [
      "El análisis estructural se compone de tres niveles de estudio que, en la práctica, se articulan entre sí para ofrecer una comprensión integral del funcionamiento político e institucional.",
      "Diagnóstico político, análisis de coyuntura y escenarios, y lectura estratégica multinivel conforman un mismo proceso de análisis. Cuando se requiere una evaluación profunda de una institución o de un contexto político, estos tres niveles permiten construir una lectura estructurada de la situación. Muchas veces este análisis requiere de la recopilación de datos, por ejemplo a través de encuestas.",
    ],
    bloques: [
      {
        heading: "Diagnóstico político",
        body: "Consiste en realizar una radiografía del sistema institucional actual. Se identifican los actores relevantes, se analiza la correlación de fuerzas, se detectan conflictos presentes y se examinan las dinámicas internas de la institución. Este proceso permite construir un mapa estructural del funcionamiento político.",
      },
      {
        heading: "Análisis de coyuntura y escenarios",
        body: "Este nivel introduce una dimensión dinámica del análisis, vinculada al contexto específico en el que se desarrolla la institución. Permite interpretar los acontecimientos recientes, identificar tendencias y proyectar posibles escenarios a corto plazo, evaluando cómo pueden evolucionar los conflictos o las decisiones institucionales.",
      },
      {
        heading: "Lectura estratégica multinivel",
        body: "Es el nivel más integral del análisis. Considera cómo interactúan distintos niveles de poder y diferentes actores sociales frente a determinadas decisiones o políticas. Una norma o decisión institucional puede impactar de manera distinta en diversos sectores —económicos, sociales o políticos—, por lo que este análisis permite anticipar reacciones, identificar intereses en juego y comprender las implicancias más amplias de cada medida.",
      },
    ],
  },
  "2": {
    title: "Diseño y Planificacion",
    subtitle: "Arquitectura institucional y normativa estratégica",
    image: imgDiseño,
    intro: [
      "A partir del análisis estructural, Hyphantiké trabaja en el diseño de soluciones institucionales concretas. Este nivel se orienta a transformar diagnósticos políticos en instrumentos, estructuras y planes de acción que permitan ordenar decisiones, resolver conflictos y fortalecer el funcionamiento institucional.",
    ],
    bloques: [
      {
        heading: "Proyectos de ordenanza, ley o normativa",
        body: "Consiste en traducir ideas políticas, demandas institucionales o diagnósticos estratégicos en instrumentos normativos concretos. Esto incluye la redacción de proyectos de ordenanza, leyes o reglamentos que permitan implementar políticas públicas de forma clara, coherente y operativa.",
      },
      {
        heading: "Planeamiento estratégico",
        body: "Implica el diseño de hojas de ruta políticas o institucionales orientadas a alcanzar determinados objetivos o resolver situaciones de conflicto. Se trabaja sobre la definición de prioridades, la secuencia de decisiones y la articulación de actores necesarios para llevar adelante un proceso político o institucional.",
      },
      {
        heading: "Arquitectura institucional",
        body: "Consiste en el diseño o la reorganización de la estructura de funcionamiento de una institución u organización. Este trabajo puede incluir la redefinición de roles, procesos de decisión y mecanismos de coordinación interna, con el objetivo de mejorar la coherencia, la eficacia y la sostenibilidad institucional.",
      },
    ],
  },
  "3": {
    title: "Arquitectura del discurso",
    subtitle: "Narrativa política y comunicación estratégica",
    image: imgArquitectura,
    intro: [
      "Las ideas políticas no solo deben formularse, sino también organizarse y expresarse con claridad en el espacio público. La forma en que se narran, se explican y se presentan influye directamente en su comprensión, recepción y eficacia política.",
    ],
    bloques: [
      {
        body: "En un contexto donde la política se comunica a través de medios, redes sociales y formatos audiovisuales, Hyphantiké trabaja en la estructura conceptual y narrativa de los mensajes para que las propuestas políticas se presenten de forma clara, coherente y estratégicamente adecuada a cada interlocutor.",
      },
      {
        body: "Este trabajo incluye la organización del discurso, la construcción de narrativas políticas y la elaboración de marcos conceptuales que permitan sostener las ideas con claridad teórica y solidez argumentativa.",
      },
      {
        body: "De este modo, Hyphantiké contribuye a que los proyectos políticos no solo se formulen, sino que también puedan ser comprendidos, defendidos y comunicados de manera consistente en el espacio público.",
      },
    ],
  },
};

export function ServicioPage() {
  const { id } = useParams<{ id: string }>();
  const [backHovered, setBackHovered] = useState(false);
  const servicio = id ? SERVICIOS[id] : null;

  if (!servicio) {
    return (
      <div style={{ paddingTop: "90px", textAlign: "center", padding: "90px 24px" }}>
        <p style={{ fontFamily: "'EB Garamond', Georgia, serif", color: "#181D31" }}>Servicio no encontrado.</p>
        <Link to="/" style={{ color: "#678983" }}>Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "72px" }}>
      <style>{`
        .servicio-header { padding: 40px 24px; }
        .servicio-body { padding: 40px 24px; }
        .servicio-content-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 768px) {
          .servicio-header { padding: 56px 24px; }
          .servicio-body { padding: 64px 24px; }
          .servicio-content-grid {
            grid-template-columns: 1fr 1.2fr;
            gap: 48px;
          }
        }
      `}</style>

      <div className="servicio-header" style={{ backgroundColor: "#181D31", borderBottom: "3px solid #678983" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
          <Link
            to="/"
            onMouseEnter={() => setBackHovered(true)}
            onMouseLeave={() => setBackHovered(false)}
            style={{
              display: "inline-block",
              color: backHovered ? "#678983" : "rgba(240,233,210,0.55)",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              letterSpacing: "0.08em",
              textDecoration: "none",
              marginBottom: "20px",
              transition: "color 0.2s",
            }}
          >
            ← Volver al inicio
          </Link>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.32em", color: "#678983", margin: "0 0 10px" }}>
            Servicios
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#F0E9D2", fontSize: "clamp(1.6rem, 5vw, 3.2rem)", margin: "0 0 10px" }}>
            {servicio.title}
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(240,233,210,0.6)", fontSize: "clamp(0.8rem, 2vw, 0.95rem)", margin: 0 }}>
            {servicio.subtitle}
          </p>
        </div>
      </div>

      <div className="servicio-body" style={{ maxWidth: "1152px", margin: "0 auto" }}>

        {servicio.intro.length > 0 && (
          <div style={{ marginBottom: "36px", borderLeft: "3px solid #678983", paddingLeft: "20px" }}>
            {servicio.intro.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  color: "#181D31",
                  fontSize: "clamp(0.95rem, 2vw, 1.08rem)",
                  lineHeight: 1.9,
                  margin: i < servicio.intro.length - 1 ? "0 0 16px" : 0,
                }}
              >
                {p}
              </p>
            ))}
          </div>
        )}

        <div className="servicio-content-grid">
          <div style={{ overflow: "hidden", border: "1px solid rgba(103,137,131,0.4)", backgroundColor: "#E6DDC4", alignSelf: "stretch" }}>
            <img
              src={servicio.image}
              alt={servicio.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", mixBlendMode: "multiply" }}
            />
          </div>

          <div>
            {servicio.bloques.map((bloque, i) => (
              <div key={i} style={{ marginBottom: i < servicio.bloques.length - 1 ? "22px" : 0 }}>
                {bloque.heading && (
                  <p style={{
                    fontFamily: "Inter, sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#678983",
                    margin: "0 0 6px",
                  }}>
                    {bloque.heading}
                  </p>
                )}
                <p style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  color: "#181D31",
                  fontSize: "clamp(0.92rem, 2vw, 1.02rem)",
                  lineHeight: 1.85,
                  margin: 0,
                  paddingLeft: bloque.heading ? "12px" : 0,
                  borderLeft: bloque.heading ? "2px solid rgba(103,137,131,0.35)" : "none",
                }}>
                  {bloque.body}
                </p>
              </div>
            ))}

            {servicio.cita && (
              <blockquote style={{ backgroundColor: "#E6DDC4", borderLeft: "3px solid #678983", padding: "20px 24px", margin: "28px 0 0" }}>
                <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#181D31", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  {servicio.cita}
                </p>
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
