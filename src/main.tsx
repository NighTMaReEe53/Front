import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./Styles/variablesColor.css";
import "./Styles/main.css";
import "./Styles/Error.css";
import "./Styles/all.min.css";

createRoot(document.getElementById("root")!).render(<App />);