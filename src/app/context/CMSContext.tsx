import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import imgAnalisis from "../../imports/analisis_discursivos.png";
import imgDiseño from "../../imports/Dise_o_y_planificaicion.png";
import imgArquitectura from "../../imports/arquitectura_del_discurso.png";

export interface Ensayo {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  image: string;
}

export interface Servicio {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface CMSData {
  logoUrl: string;
  nosotros: {
    imageUrl: string;
    parrafo1: string;
    parrafo2: string;
    parrafo3: string;
  };
  serviciosIntro: string;
  servicios: Servicio[];
  ensayos: Ensayo[];
}

export const defaultCMS: CMSData = {
  logoUrl: "",
  nosotros: {
    imageUrl: "",
    parrafo1: "",
    parrafo2: "",
    parrafo3: "",
  },
  serviciosIntro: "Hyphantiké trabaja en tres niveles complementarios de análisis e intervención política: comprender la estructura de los problemas, diseñar soluciones institucionales y organizar la expresión pública de las ideas.",
  servicios: [
    {
      id: 1,
      title: "Análisis estructural",
      description: "Diagnóstico Político.\nCoyuntura y escenarios.\nLectura estratégica multinivel.\nProcesamiento y recopilación de datos.",
      image: imgArquitectura,
    },
    {
      id: 2,
      title: "Diseño y Planificacion",
      description: "Proyectos de ordenanza/ley/normativa.\nPlaneamiento estratégico.\nArquitectura institucional.",
      image: imgDiseño,
    },
    {
      id: 3,
      title: "Arquitectura del discurso",
      description: "Elaboración de discursos institucionales.\nConstrucción de narrativa política.\nDesarrollo de marcos conceptuales.\nDiseño estratégico del mensaje para medios, redes y formatos audiovisuales.",
      image: imgAnalisis,
    },
  ],
  ensayos: [
    {
      id: "1",
      titulo: "La Trama Invisible del Poder",
      descripcion: "Un análisis de las redes de poder subyacentes que condicionan la acción política más allá de las instituciones formales.",
      fecha: "Febrero 2026",
      image: "https://images.unsplash.com/photo-1758294449756-3b1c31a68362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBwb2xpY3klMjBkZW1vY3JhY3klMjBjaXZpYyUyMGRvY3VtZW50fGVufDF8fHx8MTc3MzI3ODIzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "2",
      titulo: "Filosofía y Gestión Pública",
      descripcion: "Sobre los fundamentos filosóficos que deberían orientar el diseño y la reforma de las instituciones públicas contemporáneas.",
      fecha: "Enero 2026",
      image: "https://images.unsplash.com/photo-1742867114418-add25fecaa89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9va3MlMjBzdHVkeSUyMGFjYWRlbWljfGVufDF8fHx8MTc3MzI3ODIzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "3",
      titulo: "Arquitectura del Consenso",
      descripcion: "Exploración de los mecanismos institucionales que hacen posible la construcción de acuerdos duraderos en contextos de polarización.",
      fecha: "Diciembre 2025",
      image: "https://images.unsplash.com/photo-1760304840498-ed66b33b22da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGdvdmVybmFuY2UlMjBhcmNoaXRlY3R1cmUlMjBwbGFubmluZ3xlbnwxfHx8fDE3NzMyNzgyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ],
};

const STORAGE_KEY = "hyphantiké_cms_v1";

interface CMSContextValue {
  data: CMSData;
  update: (next: CMSData) => void;
  updateNosotros: (nosotros: CMSData["nosotros"]) => void;
  updateServicio: (id: number, fields: Partial<Servicio>) => void;
  addEnsayo: (ensayo: Ensayo) => void;
  updateEnsayo: (id: string, fields: Partial<Ensayo>) => void;
  removeEnsayo: (id: string) => void;
  reset: () => void;
}

const CMSContext = createContext<CMSContextValue | null>(null);

export function CMSProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<CMSData>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CMSData;
        // Merge stored data with new defaults for services to pick up new images/titles
        return {
          ...parsed,
          servicios: defaultCMS.servicios.map(def => {
            const stored_s = parsed.servicios?.find(s => s.id === def.id);
            return stored_s ? { ...def, ...stored_s, image: def.image, title: def.title, description: def.description } : def;
          }),
        };
      }
      return defaultCMS;
    } catch {
      return defaultCMS;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const update = useCallback((next: CMSData) => setData(next), []);

  const updateNosotros = useCallback((nosotros: CMSData["nosotros"]) =>
    setData(d => ({ ...d, nosotros })), []);

  const updateServicio = useCallback((id: number, fields: Partial<Servicio>) =>
    setData(d => ({
      ...d,
      servicios: d.servicios.map(s => s.id === id ? { ...s, ...fields } : s),
    })), []);

  const addEnsayo = useCallback((ensayo: Ensayo) =>
    setData(d => ({ ...d, ensayos: [ensayo, ...d.ensayos] })), []);

  const updateEnsayo = useCallback((id: string, fields: Partial<Ensayo>) =>
    setData(d => ({
      ...d,
      ensayos: d.ensayos.map(e => e.id === id ? { ...e, ...fields } : e),
    })), []);

  const removeEnsayo = useCallback((id: string) =>
    setData(d => ({ ...d, ensayos: d.ensayos.filter(e => e.id !== id) })), []);

  const reset = useCallback(() => setData(defaultCMS), []);

  return (
    <CMSContext.Provider value={{ data, update, updateNosotros, updateServicio, addEnsayo, updateEnsayo, removeEnsayo, reset }}>
      {children}
    </CMSContext.Provider>
  );
}

const fallbackCMS: CMSContextValue = {
  data: defaultCMS,
  update: () => {},
  updateNosotros: () => {},
  updateServicio: () => {},
  addEnsayo: () => {},
  updateEnsayo: () => {},
  removeEnsayo: () => {},
  reset: () => {},
};

export function useCMS() {
  return useContext(CMSContext) ?? fallbackCMS;
}
