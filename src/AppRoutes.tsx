import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import App from "./App";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
