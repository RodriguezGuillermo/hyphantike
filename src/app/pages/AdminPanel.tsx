import React, { useState, useRef } from "react";
import { Link } from "react-router";
import { RefreshCw, Save } from "lucide-react";
import { useCMS, defaultCMS, Ensayo } from "../context/CMSContext";

const FIELD_STYLE: React.CSSProperties = {
  backgroundColor: "#F0E9D2",
  border: "1px solid rgba(103,137,131,0.4)",
  padding: "10px 12px",
  fontFamily: "'EB Garamond', Georgia, serif",
  fontSize: "1rem",
  color: "#181D31",
  width: "100%",
  outline: "none",
  boxSizing: "border-box",
};

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: "10px",
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  color: "#678983",
  display: "block",
  marginBottom: "6px",
};

const SECTION_STYLE: React.CSSProperties = {
  backgroundColor: "#E6DDC4",
  border: "1px solid rgba(103,137,131,0.3)",
  padding: "28px",
  marginBottom: "24px",
};

interface ImageFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
}

function ImageField({ label, value, onChange }: ImageFieldProps) {
  const [mode, setMode] = useState<"url" | "file">("url");
  const fileRef = useRef<HTMLInputElement>(null);
  const [btnHovered, setBtnHovered] = useState(false);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onChange(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={LABEL_STYLE}>{label}</label>
      <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
        {(["url", "file"] as const).map(m => (
          <button
            key={m}
            onClick={() => setMode(m)}
            style={{
              padding: "5px 12px",
              fontFamily: "Inter, sans-serif",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              cursor: "pointer",
              backgroundColor: mode === m ? "#678983" : "transparent",
              color: mode === m ? "#F0E9D2" : "#678983",
              border: "1px solid #678983",
            }}
          >
            {m === "url" ? "URL" : "Subir archivo"}
          </button>
        ))}
      </div>

      {mode === "url" ? (
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="https://..."
          style={FIELD_STYLE}
        />
      ) : (
        <>
          <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleFile} />
          <button
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            onClick={() => fileRef.current?.click()}
            style={{
              padding: "8px 16px",
              backgroundColor: btnHovered ? "#556f6a" : "#678983",
              color: "#F0E9D2",
              border: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
          >
            Seleccionar imagen
          </button>
        </>
      )}

      {value && (
        <div style={{ marginTop: "10px", display: "flex", alignItems: "flex-start", gap: "10px" }}>
          <img src={value} alt="preview" style={{ height: "120px", objectFit: "cover", border: "1px solid rgba(103,137,131,0.3)" }} />
          <button
            onClick={() => onChange("")}
            style={{
              background: "none",
              border: "1px solid rgba(103,137,131,0.4)",
              color: "#181D31",
              cursor: "pointer",
              padding: "2px 8px",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
            }}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

function TabLogo() {
  const { data, update } = useCMS();
  return (
    <div style={SECTION_STYLE}>
      <p style={{ fontFamily: "'EB Garamond', Georgia, serif", color: "rgba(24,29,49,0.7)", fontSize: "1rem", marginBottom: "20px" }}>
        Si se carga una imagen, reemplaza el logo tipográfico. Déjelo vacío para usar el logo estándar.
      </p>
      <ImageField label="URL del logo" value={data.logoUrl} onChange={v => update({ ...data, logoUrl: v })} />
    </div>
  );
}

function TabNosotros() {
  const { data, updateNosotros } = useCMS();
  const nos = data.nosotros;
  const set = (field: keyof typeof nos, val: string) => updateNosotros({ ...nos, [field]: val });

  return (
    <div style={SECTION_STYLE}>
      <ImageField label="Imagen de Nosotros" value={nos.imageUrl} onChange={v => set("imageUrl", v)} />
      {(["parrafo1", "parrafo2", "parrafo3"] as const).map((key, i) => (
        <div key={key} style={{ marginBottom: "16px" }}>
          <label style={LABEL_STYLE}>Párrafo {i + 1}</label>
          <textarea
            value={nos[key]}
            onChange={e => set(key, e.target.value)}
            rows={4}
            style={{ ...FIELD_STYLE, resize: "vertical" }}
          />
        </div>
      ))}
    </div>
  );
}

function TabServicios() {
  const { data, update, updateServicio } = useCMS();
  return (
    <div>
      <div style={{ ...SECTION_STYLE, marginBottom: "24px" }}>
        <label style={LABEL_STYLE}>Texto introductorio</label>
        <textarea
          value={data.serviciosIntro}
          onChange={e => update({ ...data, serviciosIntro: e.target.value })}
          rows={3}
          style={{ ...FIELD_STYLE, resize: "vertical" }}
        />
      </div>
      {data.servicios.map(s => (
        <div key={s.id} style={SECTION_STYLE}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#678983", margin: "0 0 16px" }}>
            Servicio {s.id}
          </p>
          <div style={{ marginBottom: "14px" }}>
            <label style={LABEL_STYLE}>Título</label>
            <input type="text" value={s.title} onChange={e => updateServicio(s.id, { title: e.target.value })} style={FIELD_STYLE} />
          </div>
          <div style={{ marginBottom: "14px" }}>
            <label style={LABEL_STYLE}>Descripción</label>
            <textarea value={s.description} onChange={e => updateServicio(s.id, { description: e.target.value })} rows={3} style={{ ...FIELD_STYLE, resize: "vertical" }} />
          </div>
          <ImageField label="Imagen" value={s.image} onChange={v => updateServicio(s.id, { image: v })} />
        </div>
      ))}
    </div>
  );
}

function EnsayoEditor({ ensayo }: { ensayo: Ensayo }) {
  const { updateEnsayo, removeEnsayo } = useCMS();
  const [open, setOpen] = useState(false);
  const [delHov, setDelHov] = useState(false);

  return (
    <div style={{ border: "1px solid rgba(103,137,131,0.3)", marginBottom: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", backgroundColor: "#E6DDC4" }}>
        <div>
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#181D31", fontSize: "1rem" }}>
            {ensayo.titulo}
          </span>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", color: "#678983", marginLeft: "12px", letterSpacing: "0.1em" }}>
            {ensayo.fecha}
          </span>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onMouseEnter={() => setDelHov(true)}
            onMouseLeave={() => setDelHov(false)}
            onClick={() => { if (confirm("¿Eliminar este ensayo?")) removeEnsayo(ensayo.id); }}
            style={{
              padding: "5px 12px",
              backgroundColor: "transparent",
              border: `1px solid ${delHov ? "#cc0000" : "rgba(200,50,50,0.5)"}`,
              color: delHov ? "#cc0000" : "rgba(200,50,50,0.7)",
              fontFamily: "Inter, sans-serif",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
            }}
          >
            Eliminar
          </button>
          <button
            onClick={() => setOpen(o => !o)}
            style={{
              padding: "5px 12px",
              backgroundColor: "transparent",
              border: "1px solid rgba(103,137,131,0.4)",
              color: "#678983",
              fontFamily: "Inter, sans-serif",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              cursor: "pointer",
            }}
          >
            {open ? "Cerrar" : "Editar"}
          </button>
        </div>
      </div>

      {open && (
        <div style={{ padding: "20px", backgroundColor: "#F0E9D2" }}>
          {(["titulo", "descripcion", "fecha"] as const).map(field => (
            <div key={field} style={{ marginBottom: "14px" }}>
              <label style={LABEL_STYLE}>{field}</label>
              <input
                type="text"
                value={ensayo[field]}
                onChange={e => updateEnsayo(ensayo.id, { [field]: e.target.value })}
                style={FIELD_STYLE}
              />
            </div>
          ))}
          <ImageField label="Imagen" value={ensayo.image} onChange={v => updateEnsayo(ensayo.id, { image: v })} />
        </div>
      )}
    </div>
  );
}

function TabEnsayos() {
  const { data, addEnsayo } = useCMS();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ titulo: "", descripcion: "", fecha: "", image: "" });

  const handleSave = () => {
    if (!form.titulo) return;
    addEnsayo({ id: Date.now().toString(), ...form });
    setForm({ titulo: "", descripcion: "", fecha: "", image: "" });
    setShowForm(false);
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setShowForm(o => !o)}
          style={{
            padding: "10px 22px",
            backgroundColor: "#678983",
            color: "#F0E9D2",
            border: "none",
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          + Nuevo ensayo
        </button>
      </div>

      {showForm && (
        <div style={{ ...SECTION_STYLE, marginBottom: "24px" }}>
          {(["titulo", "descripcion", "fecha"] as const).map(field => (
            <div key={field} style={{ marginBottom: "14px" }}>
              <label style={LABEL_STYLE}>{field}</label>
              <input
                type="text"
                value={form[field]}
                onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                style={FIELD_STYLE}
              />
            </div>
          ))}
          <ImageField label="Imagen" value={form.image} onChange={v => setForm(f => ({ ...f, image: v }))} />
          <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
            <button
              onClick={handleSave}
              style={{ padding: "9px 20px", backgroundColor: "#678983", color: "#F0E9D2", border: "none", fontFamily: "Inter, sans-serif", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer" }}
            >
              Guardar ensayo
            </button>
            <button
              onClick={() => setShowForm(false)}
              style={{ padding: "9px 20px", backgroundColor: "transparent", color: "#678983", border: "1px solid #678983", fontFamily: "Inter, sans-serif", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer" }}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {data.ensayos.map(e => <EnsayoEditor key={e.id} ensayo={e} />)}
    </div>
  );
}

const TABS = ["Logo", "Nosotros", "Servicios", "Ensayos"] as const;
type Tab = typeof TABS[number];

export function AdminPanel() {
  const { reset } = useCMS();
  const [activeTab, setActiveTab] = useState<Tab>("Logo");
  const [saved, setSaved] = useState(false);
  const [saveHov, setSaveHov] = useState(false);
  const [restHov, setRestHov] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F0E9D2" }}>
      {/* Header — dos filas en mobile */}
      <div style={{ position: "sticky", top: 0, zIndex: 40, backgroundColor: "#181D31" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", minHeight: "60px", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <Link to="/" style={{ color: "rgba(240,233,210,0.55)", fontFamily: "Inter, sans-serif", fontSize: "12px", textDecoration: "none", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>
              ← Volver
            </Link>
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#F0E9D2", fontSize: "0.9rem", whiteSpace: "nowrap" }}>
              Admin
            </span>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onMouseEnter={() => setRestHov(true)}
              onMouseLeave={() => setRestHov(false)}
              onClick={() => { if (confirm("¿Restaurar todos los valores predeterminados?")) reset(); }}
              style={{
                display: "flex", alignItems: "center", gap: "4px",
                padding: "6px 10px",
                backgroundColor: "transparent",
                border: `1px solid ${restHov ? "#F0E9D2" : "#678983"}`,
                color: restHov ? "#F0E9D2" : "#678983",
                fontFamily: "Inter, sans-serif", fontSize: "10px",
                letterSpacing: "0.08em", textTransform: "uppercase",
                cursor: "pointer", touchAction: "manipulation",
              }}
            >
              <RefreshCw size={11} /> Restaurar
            </button>
            <button
              onMouseEnter={() => setSaveHov(true)}
              onMouseLeave={() => setSaveHov(false)}
              onClick={handleSave}
              style={{
                display: "flex", alignItems: "center", gap: "4px",
                padding: "6px 10px",
                backgroundColor: saveHov ? "#556f6a" : "#678983",
                border: "none", color: "#F0E9D2",
                fontFamily: "Inter, sans-serif", fontSize: "10px",
                letterSpacing: "0.08em", textTransform: "uppercase",
                cursor: "pointer", touchAction: "manipulation",
              }}
            >
              <Save size={11} /> {saved ? "¡Guardado!" : "Guardar"}
            </button>
          </div>
        </div>
      </div>

      {/* Tabs — scroll horizontal en mobile */}
      <div style={{ borderBottom: "1px solid rgba(103,137,131,0.3)", display: "flex", overflowX: "auto", WebkitOverflowScrolling: "touch" as any }}>
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "12px 16px",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: activeTab === tab ? "2px solid #678983" : "2px solid transparent",
              color: activeTab === tab ? "#678983" : "rgba(24,29,49,0.5)",
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: activeTab === tab ? 600 : 400,
              cursor: "pointer",
              whiteSpace: "nowrap",
              touchAction: "manipulation",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px 16px" }}>
        {activeTab === "Logo" && <TabLogo />}
        {activeTab === "Nosotros" && <TabNosotros />}
        {activeTab === "Servicios" && <TabServicios />}
        {activeTab === "Ensayos" && <TabEnsayos />}
      </div>
    </div>
  );
}
