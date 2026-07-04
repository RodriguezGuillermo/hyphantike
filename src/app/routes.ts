import { createBrowserRouter } from "react-router";
import { Root }          from "./pages/Root";
import { Home }          from "./pages/Home";
import { ServicioPage }  from "./pages/ServicioPage";
import { EnsayosPage }   from "./pages/EnsayosPage";
import { AdminPanel }    from "./pages/AdminPanel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true,           Component: Home },
      { path: "servicios/:id", Component: ServicioPage },
      { path: "ensayos",       Component: EnsayosPage },
    ],
  },
  { path: "/admin", Component: AdminPanel },
]);
