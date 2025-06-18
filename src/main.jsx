import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./components/index.css";
import App from "./components/App";
import { OutputProvider, SendProvider } from "./components/ContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OutputProvider>
      <SendProvider>
        <App />
      </SendProvider>
    </OutputProvider>
  </StrictMode>
);
