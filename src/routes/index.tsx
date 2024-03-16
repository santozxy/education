import { Route, Routes } from "react-router-dom";
import { Home } from "@pages/Home";
import { About } from "@pages/About";
import { Services } from "@pages/Services";
import { Error } from "@pages/404";
import { Contact } from "@pages/Contact";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
