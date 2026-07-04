import React, { useState } from "react";
import { Link } from "react-router";
import { useCMS } from "../context/CMSContext";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { SectionHeader } from "./SectionHeader";
import { Servicio } from "../context/CMSContext";

function ServiceCard({ servicio, index }: { servicio: Servicio; index: number }) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.08, triggerOnce: true });
  const [hovered, setHovered] = useState(false);
  const items = servicio.description.split("\n").filter(Boolean);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        backgroundColor: "#F0E9D2",
        border: "1px solid rgba(103,137,131,0.4)",
        display: "flex",
        flexDirection: "column",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(52px)",
        transition: `opacity 0.75s ease ${index * 160}ms, transform 0.75s ease ${index * 160}ms`,
      }}
    >
      <div style={{ aspectRatio: "16/9", overflow: "hidden", backgroundColor: "#E6DDC4" }}>
        <img
          src={servicio.image}
          alt={servicio.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            mixBlendMode: "multiply",
            display: "block",
          }}
        />
      </div>

      <div style={{ padding: "28px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ width: "28px", height: "2px", backgroundColor: "#678983", marginBottom: "14px" }} />
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            fontSize: "0.78rem",
            fontWeight: 600,
            color: "#181D31",
            margin: "0 0 16px",
          }}
        >
          {servicio.title}
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", flex: 1 }}>
          {items.map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "flex-start",
                fontFamily: "'EB Garamond', Georgia, serif",
                color: "rgba(24,29,49,0.85)",
                fontSize: "0.97rem",
                lineHeight: 1.7,
                marginBottom: i < items.length - 1 ? "6px" : 0,
              }}
            >
              <span style={{ color: "#678983", flexShrink: 0, marginTop: "1px" }}>—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link
          to={`/servicios/${servicio.id}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            color: "#678983",
            fontFamily: "Inter, sans-serif",
            textTransform: "uppercase",
            fontSize: "11px",
            letterSpacing: "0.14em",
            textDecoration: "none",
            borderBottom: hovered ? "1px solid #678983" : "1px solid transparent",
            alignSelf: "flex-start",
            transition: "border-color 0.2s",
          }}
        >
          Ver servicio →
        </Link>
      </div>
    </div>
  );
}

export function Servicios() {
  const { data } = useCMS();

  return (
    <section id="servicios" style={{ backgroundColor: "#E6DDC4", padding: "80px 0" }}>
      <style>{`
        .servicios-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 768px) {
          .servicios-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader title="Servicios" />

        <p
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            color: "rgba(24,29,49,0.9)",
            fontSize: "1.2rem",
            lineHeight: 1.85,
            maxWidth: "780px",
            margin: "0 auto 48px",
            borderLeft: "3px solid #678983",
            paddingLeft: "20px",
          }}
        >
          {data.serviciosIntro}
        </p>

        <div className="servicios-grid">
          {data.servicios.map((s, i) => (
            <ServiceCard key={s.id} servicio={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
