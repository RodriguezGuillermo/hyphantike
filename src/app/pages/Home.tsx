import { useEffect } from "react";
import { useLocation } from "react-router";
import { Hero } from "../components/Hero";
import { Nosotros } from "../components/Nosotros";
import { Servicios } from "../components/Servicios";
import { Ensayos } from "../components/Ensayos";

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <main>
      <Hero />
      <Nosotros />
      <Servicios />
      <Ensayos />
    </main>
  );
}
