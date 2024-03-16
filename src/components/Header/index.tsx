import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

export function Header() {
  const routes = [
    { to: "/", label: "Início" },
    { to: "/about", label: "Sobre" },
    { to: "/services", label: "Serviços" },
    { to: "/contact", label: "Contato" },
  ];
  const classActive = "text-primary text-xl font-bold";
  const classInactive = "text-terciary  text-xl";
  return (
    <div className="w-full justify-between items-center py-4 px-6 flex bg-secondary">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" />
        <h1 className="text-3xl font-sans text-terciary text-bold">
          Education
        </h1>
      </div>
      <nav className="flex gap-6">
        {routes.map((item) => (
          <NavLink to={item.to}>
            {({ isActive }) => (
              <span className={isActive ? classActive : classInactive}>
                {item.label}
              </span>
            )}
          </NavLink>
        ))}
      </nav>
      <button className="bg-primary text-white px-16 py-2 rounded-md">
        Entrar
      </button>
    </div>
  );
}
