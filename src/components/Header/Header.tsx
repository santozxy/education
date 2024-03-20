import Logo from "../../assets/Logo.png";
import { Menu } from "./Menu";

export function Header() {
  return (
    <div className="justify-between items-center py-4 px-6 flex bg-secondary max-sm:flex-col  max-sm:gap-12">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-16" />
      </div>
      <Menu />
      <button className="bg-primary text-white px-16 py-2 rounded-md hover:bg-btnHover transition-all duration-200">
        Entrar
      </button>
    </div>
  );
}
