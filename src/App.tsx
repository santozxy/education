import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Header } from "@components/Header/Header";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

