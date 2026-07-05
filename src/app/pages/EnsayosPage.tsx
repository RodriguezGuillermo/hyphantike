import { useState, useEffect } from "react";
import { Link } from "react-router";
import libroImg from '../../imports/libro-1.png'; 

// Definimos la interfaz de los datos que devuelve Google Drive
interface EnsayoDrive {
  id: string;
  name: string;
  modifiedTime: string;
  webViewLink: string;
}

function EnsayoCard({ titulo, fecha, descripcion, link }: { titulo: string; fecha: string; descripcion: string; link: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={link.replace("/view", "/preview")}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        textDecoration: "none",
        border: hovered ? "1px solid #678983" : "1px solid rgba(103,137,131,0.4)",
        backgroundColor: hovered ? "#EAE3CC" : "#F0E9D2",
        padding: "28px",
        transition: "border-color 0.2s, background-color 0.2s",
        cursor: "pointer",
        height: "100%",
        boxSizing: "border-box"
      }}
    >
      <div style={{ width: "28px", height: "2px", backgroundColor: "#678983", marginBottom: "16px" }} />
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#678983", margin: "0 0 10px" }}>
        {fecha}
      </p>
      <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#181D31", fontSize: "1.1rem", margin: "0 0 10px" }}>
        {titulo}
      </p>
      <p style={{ fontFamily: "'EB Garamond', Georgia, serif", color: "rgba(24,29,49,0.65)", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
        {descripcion}
      </p>
    </a>
  );
}

export function EnsayosPage() {
  const [backHovered, setBackHovered] = useState(false);
  const [ensayos, setEnsayos] = useState<EnsayoDrive[]>([]);
  const [cargando, setCargando] = useState(true);

  // Tus credenciales reales
  const API_KEY = "AIzaSyAZfccHywHMbume3YFXKXZiGqH06DTgGWc";
  const FOLDER_ID = "19zGfFBvBjMNP5j_MNVbpVeuRhzQzMvaH";

  useEffect(() => {
    // Consulta a tu carpeta específica, trae 6 resultados (o los que haya si son menos), ordenados por los más nuevos
    const driveUrl = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType='application/pdf'+and+trashed=false&orderBy=createdTime%20desc&pageSize=6&fields=files(id,name,modifiedTime,webViewLink)&key=${API_KEY}`;

    fetch(driveUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.files) {
          setEnsayos(data.files);
        }
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error cargando ensayos de Drive:", err);
        setCargando(false);
      });
  }, []);

  const formatearFecha = (fechaStr: string) => {
    const fecha = new Date(fechaStr);
    return fecha.toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" });
  };

  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh", backgroundColor: "#F0E9D2" }}>
      <style>{`
        .ensayos-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 768px) {
          .ensayos-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      {/* Cabecera */}
      <div style={{ backgroundColor: "#181D31", borderBottom: "3px solid #678983", padding: "40px 24px" }}>
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

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "260px" }}>
              <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#F0E9D2", fontSize: "clamp(1.8rem, 5vw, 3rem)", margin: "0 0 10px" }}>
                Ensayos
              </h1>
              <p style={{ fontFamily: "'EB Garamond', Georgia, serif", color: "rgba(240,233,210,0.6)", fontSize: "1rem", margin: 0, lineHeight: 1.7, textAlign: "justify" }}>
                Nuestras publicaciones sobre análisis estructural de la trama política local, nacional, e internacional.
              </p>
            </div>
            {/* Imagen leída directamente desde la carpeta public */}
            <img
              src={libroImg}
              alt="Ensayos"
              style={{
                width: "clamp(100px, 14vw, 160px)",
                objectFit: "contain",
                mixBlendMode: "screen",
                opacity: 0.85,
                flexShrink: 0,
              }}
            />
          </div>
        </div>
      </div>

      {/* Cuerpo */}
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "56px 24px" }}>

        {/* Grid de ensayos (Dinámico) */}
        <div className="ensayos-grid" style={{ marginBottom: "48px" }}>
          {cargando ? (
            <p style={{ fontFamily: "'EB Garamond', Georgia, serif", color: "#181D31", gridColumn: "1 / -1", textAlign: "center", fontStyle: "italic" }}>
              Cargando publicaciones...
            </p>
          ) : ensayos.length === 0 ? (
            <p style={{ fontFamily: "'EB Garamond', Georgia, serif", color: "#181D31", gridColumn: "1 / -1", textAlign: "center" }}>
              Aún no hay ensayos públicos disponibles para leer.
            </p>
          ) : (
            ensayos.map((ensayo) => (
              <EnsayoCard 
                key={ensayo.id} 
                titulo={ensayo.name.replace(".pdf", "")} 
                fecha={formatearFecha(ensayo.modifiedTime)} 
                descripcion="Documento disponible para la lectura íntegra en formato PDF. Hacé click para abrir el visor." 
                link={ensayo.webViewLink}
              />
            ))
          )}
        </div>

      </div>
    </div>
  );
}