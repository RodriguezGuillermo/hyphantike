import { Mail, Phone } from "lucide-react";
export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#181D31",
        borderTop: "3px solid #678983",
      }}
    >
      <div
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "48px 24px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "36px",
        }}
      >
        {/* Sección de Contacto */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#678983",
              fontSize: "1.6rem", /* Título mucho más grande */
              fontWeight: 700,
              margin: "0 0 24px",
              letterSpacing: "0.5px"
            }}
          >
            Contacto
          </p>
          
          {/* Contenedor de los datos alineados a la izquierda para que los íconos coincidan */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
            
            {/* Ítem Celular */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Phone size={22} color="#678983" strokeWidth={1.5} />
              <a 
                href="tel:+5492932637990" 
                style={{ color: "rgba(240,233,210,0.85)", textDecoration: "none", transition: "color 0.2s", fontFamily: "Inter, sans-serif", fontSize: "1.1rem" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#678983"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(240,233,210,0.85)"}
              >
                +54 9 2932 637990
              </a>
            </div>

            {/* Ítem Mail */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Mail size={22} color="#678983" strokeWidth={1.5} />
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hyphantike@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(240,233,210,0.85)", textDecoration: "none", transition: "color 0.2s", fontFamily: "Inter, sans-serif", fontSize: "1.1rem" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#678983"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(240,233,210,0.85)"}
              >
                Hyphantike@gmail.com
              </a>
            </div>

          </div>
        </div>

        {/* Separador sutil */}
        <div style={{ width: "60px", height: "1px", backgroundColor: "rgba(103,137,131,0.3)" }}></div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            color: "rgba(240,233,210,0.35)",
            fontSize: "11px",
            letterSpacing: "0.06em",
            margin: 0,
            textAlign: "center"
          }}
        >
          © {new Date().getFullYear()} Hyphantiké · Arquitectura Política. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}