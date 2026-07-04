import { useState, useEffect } from "react";

export function Hero() {
  const [visible, setVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 80);
    const t2 = setTimeout(() => setBottomVisible(true), 580);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section
      id="inicio"
      style={{
        backgroundColor: "#181D31",
        paddingTop: "60px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(103,137,131,0.05) 0px, rgba(103,137,131,0.05) 1px, transparent 1px, transparent 45px),
            repeating-linear-gradient(90deg, rgba(103,137,131,0.05) 0px, rgba(103,137,131,0.05) 1px, transparent 1px, transparent 45px)
          `,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px 60px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 1s ease, transform 1s ease",
          position: "relative",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            color: "#F0E9D2",
            fontSize: "clamp(3.5rem, 10vw, 7rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Hyphantiké
        </h1>

        <div
          style={{
            width: "80px",
            height: "1px",
            backgroundColor: "#678983",
            margin: "28px auto",
          }}
        />

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#678983",
            fontSize: "clamp(0.7rem, 1.6vw, 0.85rem)",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Arquitectura política
        </p>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(103,137,131,0.2)",
          padding: "28px 24px",
          textAlign: "center",
          position: "relative",
          opacity: bottomVisible ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        <p
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontStyle: "italic",
            color: "rgba(240,233,210,0.55)",
            fontSize: "clamp(0.85rem, 1.4vw, 1rem)",
            margin: 0,
          }}
        >
          Pensamiento estructural para la política.
        </p>
      </div>
    </section>
  );
}
