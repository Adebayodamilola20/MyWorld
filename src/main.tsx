import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Global error handler for mobile debugging
window.onerror = (message, source, lineno, colno, error) => {
    // Only alert in development or if explicitly needed
    console.error("Global Error:", message, source, lineno, colno, error);
    // We alert here so the user can see what's happening on mobile
    if (typeof window !== "undefined") {
        const errorMsg = `Error: ${message}\nAt: ${source}:${lineno}:${colno}`;
        alert(errorMsg);
    }
    return false;
};

window.onunhandledrejection = (event) => {
    console.error("Unhandled Rejection:", event.reason);
    alert(`Unhandled Rejection: ${event.reason}`);
};

createRoot(document.getElementById("root")!).render(<App />);
