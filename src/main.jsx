import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRouter } from "./routes/AppRouter.jsx";
import { setLocalStorage } from "./utils/localStorage.jsx";

setLocalStorage();

createRoot(document.getElementById("root")).render(
<AppRouter />
);
