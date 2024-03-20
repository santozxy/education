import { Route, Routes } from "react-router-dom";
import { Home } from "@pages/Home/Home";
import { About } from "@pages/About/About";
import { Services } from "@pages/Services/Services";
import { Error } from "@pages/404/Error";
import { Contact } from "@pages/Contact/Contact";

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
