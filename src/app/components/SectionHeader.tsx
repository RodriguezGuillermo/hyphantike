interface Props {
  title: string;
  dark?: boolean;
}

export function SectionHeader({ title, dark = false }: Props) {
  return (
    <div
      style={{
        borderTop: `1px solid ${dark ? "rgba(103,137,131,0.4)" : "rgba(103,137,131,0.35)"}`,
        borderBottom: `1px solid ${dark ? "rgba(103,137,131,0.4)" : "rgba(103,137,131,0.35)"}`,
        padding: "18px 0",
        marginBottom: "52px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "Inter, sans-serif",
          letterSpacing: "0.42em",
          textTransform: "uppercase",
          fontSize: "clamp(0.7rem, 1.5vw, 0.8rem)",
          fontWeight: 600,
          color: dark ? "#F0E9D2" : "#181D31",
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
  );
}
