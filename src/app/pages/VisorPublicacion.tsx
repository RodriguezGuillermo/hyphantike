import { useState } from "react";
import { useParams, Link } from "react-router";
import { FileText } from "lucide-react";

const ENSAYOS_META: Record<string, { titulo: string; fecha: string; autor: string; resumen: string }> = {
  "1": {
    titulo: "La Trama Invisible del Poder",
    fecha: "Febrero 2026",
    autor: "Equipo Hyphantiké",
    resumen: "Este ensayo analiza las redes de poder subyacentes que condicionan la acción política más allá de las instituciones formales. A través de una perspectiva estructural, se exploran los mecanismos invisibles que articulan las relaciones de dominación y colaboración en los sistemas políticos contemporáneos.",
  },
  "2": {
    titulo: "Filosofía y Gestión Pública",
    fecha: "Enero 2026",
    autor: "Equipo Hyphantiké",
    resumen: "Una exploración de los fundamentos filosóficos que deberían orientar el diseño y la reforma de las instituciones públicas contemporáneas. El texto interroga la relación entre teoría política normativa y práctica institucional concreta.",
  },
  "3": {
    titulo: "Arquitectura del Consenso",
    fecha: "Diciembre 2025",
    autor: "Equipo Hyphantiké",
    resumen: "Exploración de los mecanismos institucionales que hacen posible la construcción de acuerdos duraderos en contextos de alta polarización política. El análisis combina perspectivas de teoría de juegos, sociología política y derecho constitucional.",
  },
};

export function VisorPublicacion() {
  const { id } = useParams<{ id: string }>();
  const [backHovered, setBackHovered] = useState(false);
  const [dlHovered, setDlHovered] = useState(false);
  const meta = id ? ENSAYOS_META[id] : null;

  if (!meta) {
    return (
      <div style={{ paddingTop: "80px", textAlign: "center", padding: "80px 24px" }}>
        <p style={{ fontFamily: "'EB Garamond', Georgia, serif", color: "#181D31" }}>Publicación no encontrada.</p>
        <Link to="/" style={{ color: "#678983" }}>Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "60px" }}>
      <style>{`
        .visor-header { padding: 36px 24px; }
        .visor-body { padding: 36px 24px; }
        @media (min-width: 768px) {
          .visor-header { padding: 56px 24px; }
          .visor-body { padding: 48px 24px; }
        }
      `}</style>

      <div className="visor-header" style={{ backgroundColor: "#181D31", borderBottom: "3px solid #678983" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
          <Link
            to="/#ensayos"
            onClick={(e) => { e.preventDefault(); window.history.back(); }}
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
            ← Volver a publicaciones
          </Link>

          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.32em", color: "#678983", margin: "0 0 10px" }}>
            Documento · {meta.fecha}
          </p>

          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#F0E9D2", fontSize: "clamp(1.4rem, 5vw, 2.8rem)", margin: "0 0 10px" }}>
            {meta.titulo}
          </h1>

          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(240,233,210,0.5)", fontSize: "12px", margin: "0 0 24px" }}>
            {meta.autor}
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button
              onMouseEnter={() => setDlHovered(true)}
              onMouseLeave={() => setDlHovered(false)}
              style={{
                padding: "10px 22px",
                backgroundColor: "transparent",
                border: `1px solid ${dlHovered ? "#F0E9D2" : "#678983"}`,
                color: dlHovered ? "#F0E9D2" : "#678983",
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
                touchAction: "manipulation",
              }}
            >
              Descargar
            </button>
            <button
              style={{
                padding: "10px 22px",
                backgroundColor: "#678983",
                border: "1px solid #678983",
                color: "#F0E9D2",
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                touchAction: "manipulation",
              }}
            >
              Abrir
            </button>
          </div>
        </div>
      </div>

      <div className="visor-body" style={{ maxWidth: "1152px", margin: "0 auto" }}>
        <div style={{ backgroundColor: "#E6DDC4", borderLeft: "3px solid #678983", padding: "24px 28px", marginBottom: "36px" }}>
          <p style={{ fontFamily: "'EB Garamond', Georgia, serif", color: "#181D31", fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}>
            {meta.resumen}
          </p>
        </div>

        <div
          style={{
            border: "1px solid rgba(103,137,131,0.4)",
            backgroundColor: "#E6DDC4",
            minHeight: "50vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 24px",
            textAlign: "center",
            gap: "16px",
          }}
        >
          <div style={{ width: "56px", height: "56px", border: "1px solid rgba(103,137,131,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FileText size={28} color="#678983" />
          </div>
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#181D31", fontSize: "1.2rem", margin: 0 }}>
            Visor de Documento
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(24,29,49,0.55)", fontSize: "12px", maxWidth: "400px", lineHeight: 1.7, margin: 0 }}>
            El documento completo se cargará en este espacio una vez integrado con el sistema de almacenamiento.
          </p>
          <span style={{ color: "#678983", fontFamily: "Inter, sans-serif", fontSize: "11px", letterSpacing: "0.1em" }}>
            ● Integración pendiente · Slot dinámico activo
          </span>
        </div>

        <div style={{ border: "1px dashed rgba(103,137,131,0.4)", padding: "16px 20px", marginTop: "24px" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "rgba(24,29,49,0.5)", lineHeight: 1.8, margin: 0 }}>
            <strong style={{ color: "#678983" }}>Nota técnica:</strong> Para conectar este visor con Supabase Storage, almacene el archivo en un bucket público, guarde la URL pública en la tabla de ensayos y renderícela en este componente mediante un iframe o enlace de descarga directa.
          </p>
        </div>
      </div>
    </div>
  );
}
