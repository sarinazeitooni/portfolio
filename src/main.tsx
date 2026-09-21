import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PreferencesProvider } from "./preferences/PreferencesProvider";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PreferencesProvider>
      <App />
    </PreferencesProvider>
  </StrictMode>,
);
