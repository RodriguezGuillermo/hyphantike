import React, { useState } from "react";
import { Link } from "react-router";
import { SectionHeader } from "./SectionHeader";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import libroImg from "../../imports/libro-1.png";

const PARRAFOS = [
  "La política se mueve. Los contextos cambian, los actores se reposicionan, las coyunturas abren y cierran ventanas de oportunidad. Publicar semanalmente es nuestra forma de mantener el análisis activo y situado en el tiempo.",
  "No escribimos para el archivo. Escribimos porque entendemos que el pensamiento político tiene que ser oportuno además de riguroso. Cada ensayo es un ejercicio de lectura estructural sobre la realidad que nos rodea ya sea local, provincial, nacional o internacional con el mismo método que aplicamos en nuestro trabajo de consultoría.",
  "Hyphantiké publica porque creer en la arquitectura política implica también construirla en público.",
];

export function Ensayos() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <section id="ensayos" style={{ backgroundColor: "#181D31", padding: "80px 0" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader title="Ensayos" dark />

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <p style={{ fontFamily: "Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.22em", fontSize: "0.72rem", fontWeight: 600, color: "#678983", margin: "0 0 24px" }}>
            ¿Por qué publicamos ensayos?
          </p>

          {/* Texto + imagen lado a lado */}
          <div style={{ display: "flex", alignItems: "center", gap: "48px", marginBottom: "48px" }}>
            <div style={{ flex: 1 }}>
              {PARRAFOS.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    color: "rgba(240,233,210,0.8)",
                    fontSize: "clamp(1rem, 2vw, 1.1rem)",
                    lineHeight: 1.85,
                    margin: i < PARRAFOS.length - 1 ? "0 0 18px" : "0",
                    textAlign: "justify",
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            <img
              src={libroImg}
              alt="Ensayos"
              style={{
                width: "clamp(180px, 24vw, 320px)",
                objectFit: "contain",
                flexShrink: 0,
                mixBlendMode: "screen",
                opacity: 0.9,
              }}
            />
          </div>

          <Link
            to="/ensayos"
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              display: "inline-block",
              padding: "14px 32px",
              backgroundColor: btnHovered ? "#F0E9D2" : "transparent",
              border: "1px solid rgba(240,233,210,0.6)",
              color: btnHovered ? "#181D31" : "#F0E9D2",
              fontFamily: "Inter, sans-serif",
              textTransform: "uppercase",
              fontSize: "11px",
              letterSpacing: "0.22em",
              fontWeight: 500,
              textDecoration: "none",
              transition: "background-color 0.25s, color 0.25s, border-color 0.25s",
              touchAction: "manipulation",
            }}
          >
            Mirá nuestros últimos ensayos
          </Link>
        </div>
      </div>
    </section>
  );
}
