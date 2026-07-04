import React from "react";
import imgFalopa1 from "../../imports/imgFalopa1-1.png";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { SectionHeader } from "./SectionHeader";

function LogoIphan({ size = 36 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 1000 1000" style={{ flexShrink: 0 }}>
      <path d="M120 340 C260 360, 380 400, 500 380 C620 360, 740 400, 880 380" fill="none" stroke="#678983" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M100 520 C260 480, 380 520, 500 500 C620 480, 740 520, 900 500" fill="none" stroke="#181D31" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M120 650 C260 600, 380 640, 500 620 C620 600, 740 640, 880 620" fill="none" stroke="#181D31" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M380 140 C330 260, 380 380, 380 500 C380 620, 380 740, 280 880" fill="none" stroke="#181D31" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M500 120 C510 260, 520 380, 500 500 C480 620, 520 740, 480 880" fill="none" stroke="#678983" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M670 120 C600 260, 620 390, 620 500 C620 620, 620 740, 660 880" fill="none" stroke="#181D31" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const PARRAFOS = [
  "Hyphantiké surge de un interés personal por el arte de la política. Soy Licenciado en Filosofía (tesis en trámite), especializado en Filosofía Política.",
  "Partimos de la idea de que la política atraviesa toda la realidad de los seres humanos: cada una de nuestras relaciones sociales contiene una dimensión política. Por eso retomamos la metáfora que utiliza Platón en El Político para describir esta actividad: Hyphantiké, el arte de tejer.",
  "El político es, en este sentido, quien teje relaciones, mide su entorno y actúa tanto en el ámbito público como en el privado, tensando y desanudando conflictos.",
  "Hyphantiké trabaja con actores políticos, instituciones públicas y organizaciones privadas para analizar y diseñar estructuras políticas de manera estratégica. Nuestro enfoque busca comprender las dinámicas de poder, ordenar diagnósticos y contribuir al diseño de soluciones institucionales claras y operativas.",
  "No ofrecemos recetas genéricas. Cada institución, organización o actor político posee sus propias particularidades. Por ello, nuestro trabajo se orienta al diseño de arquitecturas políticas, entendiendo dicho concepto como la organización estructural de las relaciones, decisiones y discursos que permiten ordenar una institución y proyectar su acción en el tiempo.",
  "Desde esta perspectiva, Hyphantiké trabaja sobre la estructura de los problemas políticos: analizando contextos, diseñando soluciones institucionales y contribuyendo a la construcción de discursos claros y coherentes.",
  "El enfoque es interdisciplinario y el proyecto apunta, a futuro, a conformar un equipo de trabajo integrado por profesionales de distintas áreas.",
];

export function Nosotros() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="nosotros" style={{ backgroundColor: "#F0E9D2", padding: "60px 0" }}>
      <style>{`
        .nosotros-grid {
          display: grid;
          grid-template-columns: 1fr;
          align-items: stretch;
        }
        .nosotros-img { min-height: 260px; }
        .nosotros-text {
          border-left: none;
          border-top: 1px solid rgba(103,137,131,0.3);
          padding: 24px 20px;
        }
        @media (min-width: 768px) {
          .nosotros-grid { grid-template-columns: 1.15fr 1fr; }
          .nosotros-img { min-height: 420px; }
          .nosotros-text {
            border-left: 1px solid rgba(103,137,131,0.3);
            border-top: none;
            padding: 32px 28px;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader title="Nosotros" />

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="nosotros-grid"
          style={{
            border: "1px solid rgba(103,137,131,0.35)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.85s ease, transform 0.85s ease",
          }}
        >
          <div className="nosotros-img" style={{ overflow: "hidden" }}>
            <img
              src={imgFalopa1}
              alt="Nosotros — Ramírez Jerónimo"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
          </div>

          <div
            className="nosotros-text"
            style={{
              backgroundColor: "#E6DDC4",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ width: "36px", height: "3px", backgroundColor: "#678983", marginBottom: "18px" }} />

              {[
                "Hyphantiké surge de una convicción: la política no es un sector específico separado de la realidad, sino su trama constitutiva. Cada una de nuestras relaciones sociales contiene una dimensión política. Comprenderla, analizarla y ordenarla es una tarea que requiere método, rigor y perspectiva.",
                "El nombre refiere a la metáfora que Platón utiliza en El Político para describir el arte de gobernar: la ὑφαντική - Hyphantiké, el arte de tejer. El político es quien teje relaciones, mide su entorno y actúa tensando y desanudando conflictos. Esa imagen condensa nuestra concepción del trabajo político no como imposición de voluntades, sino como construcción articulada de estructuras que permiten ordenar la acción colectiva en el tiempo. Nos gusta afirmar que:",
              ].map((p, i) => (
                <p key={i} style={{ fontFamily: "'EB Garamond', Georgia, serif", color: "#181D31", fontSize: "0.85rem", lineHeight: 1.7, margin: "0 0 9px" }}>
                  {p}
                </p>
              ))}

              <blockquote style={{ borderLeft: "2px solid #678983", paddingLeft: "14px", margin: "0 0 9px" }}>
                <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "italic", color: "#181D31", fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>
                  "La política no es una ciencia exacta, pero tampoco es un arte de la improvisación. Es, ante todo, una práctica estructurada que puede ser analizada, diseñada y comunicada."
                </p>
              </blockquote>

              {[
                "Nuestro logo representa una trama irregular: el conjunto complejo de vínculos, intereses y tensiones que conforman cualquier sistema político. Desde esta perspectiva, la política puede entenderse como el arte de interpretar esa trama, desentrañar sus conflictos y contribuir a organizarla de manera estructurada. No ofrecemos recetas genéricas. Cada institución, organización o actor político posee sus propias particularidades.",
                "Contamos con un equipo de profesionales que por ahora se enfocan en tres campos diferenciados, la filosofía, la política, y la economía. Obviamente los tres campos se interconectan, desde estos tres ámbitos Hyphantiké interpreta la realidad.",
              ].map((p, i) => (
                <p key={i} style={{ fontFamily: "'EB Garamond', Georgia, serif", color: "#181D31", fontSize: "0.85rem", lineHeight: 1.7, margin: i === 0 ? "0 0 9px" : "0" }}>
                  {p}
                </p>
              ))}
            </div>

            <div style={{ borderTop: "1px solid rgba(103,137,131,0.3)", paddingTop: "16px", marginTop: "18px", display: "flex", alignItems: "center", gap: "14px" }}>
              <LogoIphan size={52} />
              <div>
                <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#181D31", fontSize: "0.93rem", margin: "0 0 2px" }}>
                  Nuestro logo representa una trama irregular.
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.14em", color: "#678983", fontSize: "10px", margin: 0 }}>
                  Marzo de 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
