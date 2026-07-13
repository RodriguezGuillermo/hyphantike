import { createHashRouter } from "react-router"; 
import { Root }          from "./pages/Root";
import { Home }          from "./pages/Home";
import { ServicioPage }  from "./pages/ServicioPage";
import { EnsayosPage }   from "./pages/EnsayosPage";
import { AdminPanel }    from "./pages/AdminPanel";
import { ApoyanosPage }  from "./pages/ApoyanosPage";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true,           Component: Home },
      { path: "servicios/:id", Component: ServicioPage },
      { path: "ensayos",       Component: EnsayosPage },
      { path: "apoyanos",      Component: ApoyanosPage },
    ],
  },
  { path: "/admin", Component: AdminPanel },
]);
