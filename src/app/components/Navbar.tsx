import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { Menu, X, Instagram, MessageCircle, Mail } from "lucide-react";
import { useCMS } from "../context/CMSContext";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Ensayos", href: "/#ensayos" },
];

export function Navbar() {
  const { data } = useCMS();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setOpen(false);

    if (href === "/") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
      return;
    }

    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: "#F0E9D2",
          height: "72px",
          borderBottom: scrolled ? "1px solid #678983" : "1px solid rgba(103,137,131,0.3)",
          boxShadow: scrolled ? "0 2px 12px rgba(24,29,49,0.08)" : "none",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "0 40px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            {data.logoUrl ? (
              <img src={data.logoUrl} alt="Hyphantiké" style={{ height: "44px", display: "block" }} />
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width={42} height={42} viewBox="0 0 1000 1000" style={{ flexShrink: 0 }}>
                  <path d="M120 340 C260 360, 380 400, 500 380 C620 360, 740 400, 880 380" fill="none" stroke="#678983" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M100 520 C260 480, 380 520, 500 500 C620 480, 740 520, 900 500" fill="none" stroke="#181D31" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M120 650 C260 600, 380 640, 500 620 C620 600, 740 640, 880 620" fill="none" stroke="#181D31" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M380 140 C330 260, 380 380, 380 500 C380 620, 380 740, 280 880" fill="none" stroke="#181D31" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M500 120 C510 260, 520 380, 500 500 C480 620, 520 740, 480 880" fill="none" stroke="#678983" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M670 120 C600 260, 620 390, 620 500 C620 620, 620 740, 660 880" fill="none" stroke="#181D31" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#181D31", fontSize: "1.15rem" }}>
                  Hyphantiké
                </span>
              </div>
            )}
          </Link>

          {/* Desktop links + social + Apoyanos */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  onMouseEnter={() => setHovered(link.label)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    color: hovered === link.label ? "#678983" : "#181D31",
                    backgroundColor: hovered === link.label ? "rgba(103,137,131,0.08)" : "transparent",
                    fontSize: "15px",
                    letterSpacing: "0.08em",
                    padding: "6px 16px",
                    textDecoration: "none",
                    fontFamily: "Inter, sans-serif",
                    transition: "color 0.2s, background-color 0.2s",
                  }}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/apoyanos"
                onClick={(e) => { e.preventDefault(); navigate("/apoyanos"); setOpen(false); }}
                onMouseEnter={() => setHovered("apoyanos")}
                onMouseLeave={() => setHovered(null)}
                style={{
                  backgroundColor: hovered === "apoyanos" ? "#256427" : "#2E7D32",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  padding: "8px 20px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontFamily: "Inter, sans-serif",
                  transition: "background-color 0.2s",
                  marginLeft: "8px",
                  cursor: "pointer",
                }}
              >
                Apoyanos
              </a>

              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginLeft: "20px", paddingLeft: "16px", borderLeft: "1px solid rgba(103,137,131,0.3)" }}>
                <a href="https://www.instagram.com/hyphantike/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  onMouseEnter={() => setHovered("ig")} onMouseLeave={() => setHovered(null)}
                  style={{ color: hovered === "ig" ? "#678983" : "#181D31", transition: "color 0.2s" }}>
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/5492932637990" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                  onMouseEnter={() => setHovered("wa")} onMouseLeave={() => setHovered(null)}
                  style={{ color: hovered === "wa" ? "#678983" : "#181D31", transition: "color 0.2s" }}>
                  <MessageCircle size={20} />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hyphantike@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Mail"
                  onMouseEnter={() => setHovered("mail")} onMouseLeave={() => setHovered(null)}
                  style={{ color: hovered === "mail" ? "#678983" : "#181D31", transition: "color 0.2s" }}>
                  <Mail size={20} />
                </a>
              </div>
            </div>
          )}

          {/* Mobile burger */}
          {isMobile && (
            <button
              onClick={() => setOpen(o => !o)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                color: "#181D31",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                touchAction: "manipulation",
              }}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile dropdown */}
      {isMobile && open && (
        <div
          style={{
            position: "fixed",
            top: "72px",
            left: 0,
            right: 0,
            zIndex: 49,
            backgroundColor: "#F0E9D2",
            borderTop: "1px solid rgba(103,137,131,0.3)",
            boxShadow: "0 4px 12px rgba(24,29,49,0.1)",
          }}
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              style={{
                display: "block",
                padding: "16px 24px",
                color: "#181D31",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                letterSpacing: "0.08em",
                borderBottom: "1px solid rgba(103,137,131,0.2)",
                touchAction: "manipulation",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/apoyanos"
            onClick={(e) => { e.preventDefault(); navigate("/apoyanos"); setOpen(false); }}
            style={{
              display: "block",
              padding: "16px 24px",
              backgroundColor: "#2E7D32",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textAlign: "center",
              touchAction: "manipulation",
            }}
          >
            Apoyanos
          </a>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", padding: "16px 24px", borderBottom: "1px solid rgba(103,137,131,0.2)" }}>
            <a href="https://www.instagram.com/hyphantike/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "#181D31" }}>
              <Instagram size={22} />
            </a>
            <a href="https://wa.me/5492932637990" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ color: "#181D31" }}>
              <MessageCircle size={22} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hyphantike@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Mail" style={{ color: "#181D31" }}>
              <Mail size={22} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
