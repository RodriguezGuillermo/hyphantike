import { RouterProvider } from "react-router";
import { router } from "./routes";
import { CMSProvider } from "./context/CMSContext";
import '../styles/index.css';

export default function App() {
  return (
    <CMSProvider>
      <RouterProvider router={router} />
    </CMSProvider>
  );
}
