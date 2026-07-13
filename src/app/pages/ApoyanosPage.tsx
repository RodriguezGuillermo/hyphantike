import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Instagram, MessageCircle, Mail } from "lucide-react";

export function ApoyanosPage() {
  const navigate = useNavigate();
  const [backHovered, setBackHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div style={{ paddingTop: "72px" }}>
      <style>{`
        .apoyanos-body { padding: 48px 24px; }
        .apoyanos-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }
        @media (min-width: 768px) {
          .apoyanos-body { padding: 64px 24px; }
          .apoyanos-grid {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 32px;
          }
        }
      `}</style>

      {/* Header */}
      <div style={{ backgroundColor: "#181D31", borderBottom: "3px solid #678983", padding: "56px 24px" }}>
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
            Colaboración
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#F0E9D2", fontSize: "clamp(1.6rem, 5vw, 3.2rem)", margin: "0 0 10px" }}>
            Sumate a Hyphantiké
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(240,233,210,0.6)", fontSize: "clamp(0.8rem, 2vw, 0.95rem)", margin: 0 }}>
            Colaboración voluntaria para sostener el proyecto
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="apoyanos-body" style={{ maxWidth: "1152px", margin: "0 auto" }}>
        {/* Intro text */}
        <div style={{ marginBottom: "40px", borderLeft: "3px solid #678983", paddingLeft: "20px" }}>
          <p style={{ fontFamily: "'EB Garamond', Georgia, serif", color: "#181D31", fontSize: "clamp(0.95rem, 2vw, 1.08rem)", lineHeight: 1.9, margin: "0 0 16px" }}>
            Hyphantiké es un proyecto que construimos desde cero y a pulmón. Cada publicación, cada encuesta, cada ensayo de análisis que presentamos tiene detrás horas de trabajo, insumos concretos y recursos propios que invertimos porque creemos en lo que estamos haciendo.
          </p>
          <p style={{ fontFamily: "'EB Garamond', Georgia, serif", color: "#181D31", fontSize: "clamp(0.95rem, 2vw, 1.08rem)", lineHeight: 1.9, margin: "0 0 16px" }}>
            Hasta ahora hemos financiado nosotros mismos las publicidades en redes sociales para difundir nuestro trabajo, los materiales e insumos para el relevamiento en campo, y el tiempo dedicado a producir cada dato e informe que publicamos.
          </p>
          <p style={{ fontFamily: "'EB Garamond', Georgia, serif", color: "#181D31", fontSize: "clamp(0.95rem, 2vw, 1.08rem)", lineHeight: 1.9, margin: 0 }}>
            Si valorás lo que hacemos y querés que sigamos creciendo, podés apoyarnos con una colaboración voluntaria del monto que quieras.
          </p>
        </div>

        {/* Cuenta */}
        <div style={{ backgroundColor: "#E6DDC4", borderLeft: "3px solid #678983", padding: "20px 24px", marginBottom: "40px" }}>
          <p style={{ fontFamily: "'EB Garamond', Georgia, serif", color: "#181D31", fontSize: "1rem", lineHeight: 1.8, margin: 0 }}>
            La cuenta es personal, a nombre de uno de los directores, <strong>Jerónimo Ramírez</strong>. Tu aporte va directo al financiamiento de las actividades de la consultora.
          </p>
        </div>

        {/* Cards */}
        <div className="apoyanos-grid">
          {/* Card 1: Colaboración puntual */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(103,137,131,0.3)",
              padding: "32px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "16px",
            }}
          >
            <span style={{ fontSize: "2rem" }}>💛</span>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#181D31", fontSize: "1.15rem", margin: 0 }}>
              Colaboración puntual
            </h3>
            <p style={{ fontFamily: "'EB Garamond', Georgia, serif", color: "#181D31", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
              Transferí el monto que quieras, una sola vez.
            </p>
            <a
              href="https://link.mercadopago.com.ar/hyphantike"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredCard("puntual")}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                display: "inline-block",
                backgroundColor: hoveredCard === "puntual" ? "#256427" : "#2E7D32",
                color: "#FFFFFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 24px",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "background-color 0.2s",
                marginTop: "auto",
              }}
            >
              Colaborar por Mercado Pago
            </a>
          </div>

          {/* Card 2: Apoyo mensual */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(103,137,131,0.3)",
              padding: "32px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "16px",
            }}
          >
            <span style={{ fontSize: "2rem" }}>📅</span>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#181D31", fontSize: "1.15rem", margin: 0 }}>
              Apoyo mensual — $10.000
            </h3>
            <p style={{ fontFamily: "'EB Garamond', Georgia, serif", color: "#181D31", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
              Suscribite y tu aporte se renueva automáticamente cada mes. Podés cancelar cuando quieras.
            </p>
            <a
              href="https://mpago.la/1kG62mT"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredCard("mensual")}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                display: "inline-block",
                backgroundColor: hoveredCard === "mensual" ? "#256427" : "#2E7D32",
                color: "#FFFFFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 24px",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "background-color 0.2s",
                marginTop: "auto",
              }}
            >
              Suscribirme mensualmente
            </a>
          </div>

          {/* Card 3: Patrocinador */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(103,137,131,0.3)",
              padding: "32px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "16px",
            }}
          >
            <span style={{ fontSize: "2rem" }}>🤝</span>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#181D31", fontSize: "1.15rem", margin: 0 }}>
              ¿Querés ser patrocinador?
            </h3>
            <p style={{ fontFamily: "'EB Garamond', Georgia, serif", color: "#181D31", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
              Si representás una institución, organización, empresa o espacio político y querés sumarte como patrocinador de Hyphantiké, escribinos y coordinamos una reunión para definir la metodología de trabajo conjunto.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "auto" }}>
              <a
                href="https://wa.me/5492932637990"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredCard("pat-wa")}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: hoveredCard === "pat-wa" ? "#256427" : "#2E7D32",
                  color: "#FFFFFF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  padding: "10px 18px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  transition: "background-color 0.2s",
                }}
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hyphantike@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredCard("pat-mail")}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: hoveredCard === "pat-mail" ? "#256427" : "#2E7D32",
                  color: "#FFFFFF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  padding: "10px 18px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  transition: "background-color 0.2s",
                }}
              >
                <Mail size={16} /> Mail
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div style={{ width: "60px", height: "1px", backgroundColor: "rgba(103,137,131,0.3)", margin: "48px auto" }}></div>

        {/* CTA final */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#181D31", fontSize: "clamp(1.2rem, 3vw, 1.8rem)", margin: "0 0 16px" }}>
            ¿Buscás algo más que apoyarnos?
          </h2>
          <p style={{ fontFamily: "'EB Garamond', Georgia, serif", color: "#181D31", fontSize: "clamp(0.92rem, 2vw, 1.02rem)", lineHeight: 1.8, margin: "0 0 28px" }}>
            Si te interesa contratar alguno de nuestros servicios, escribinos y coordinamos una consulta inicial.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px" }}>
            <a
              href="/#servicios"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                setTimeout(() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" }), 200);
              }}
              onMouseEnter={() => setHoveredCard("serv")}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                display: "inline-block",
                backgroundColor: hoveredCard === "serv" ? "#55707A" : "#678983",
                color: "#FFFFFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 24px",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
            >
              Ver servicios
            </a>
            <a
              href="https://wa.me/5492932637990"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredCard("cta-wa")}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: hoveredCard === "cta-wa" ? "#256427" : "#2E7D32",
                color: "#FFFFFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 18px",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hyphantike@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredCard("cta-mail")}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: hoveredCard === "cta-mail" ? "#256427" : "#2E7D32",
                color: "#FFFFFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 18px",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
            >
              <Mail size={16} /> Mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
