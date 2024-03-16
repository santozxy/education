import Logo from "../../assets/Logo.png";
import { Menu } from "./Menu";

export function Header() {
  return (
    <div className="w-full justify-between items-center py-4 px-6 flex bg-secondary">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" />
        <h1 className="text-3xl font-sans text-terciary text-bold">
          Education
        </h1>
      </div>
      <Menu />
      <button className="bg-primary text-white px-16 py-2 rounded-md">
        Entrar
      </button>
    </div>
  );
}
