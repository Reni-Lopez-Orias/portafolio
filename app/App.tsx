import "./global.css";
import { createRoot } from "react-dom/client";
import Portfolio from "./pages/Portfolio";

const App = () => <Portfolio />;

createRoot(document.getElementById("root")!).render(<App />);
