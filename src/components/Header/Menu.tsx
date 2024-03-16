import { NavLink } from "react-router-dom";

export function Menu() {
  const routes = [
    { to: "/", label: "Início" },
    { to: "/about", label: "Sobre" },
    { to: "/services", label: "Serviços" },
    { to: "/contact", label: "Contato" },
  ];
  const classActive = "text-primary text-xl font-bold border-b-2 border-primary";
  const classInactive =
    "text-terciary font-semibold text-xl hover:text-primary transition-all duration-300";
  return (
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
  );
}
