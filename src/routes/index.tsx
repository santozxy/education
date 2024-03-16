import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Services } from "../pages/Services";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}
