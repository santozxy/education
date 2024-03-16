import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

export function Header() {
  return (
    <div className="w-full justify-between items-center py-4 px-6 flex bg-secondary">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" />
        <h1 className="text-3xl font-sans text-terciary text-bold">
          Education
        </h1>
      </div>

      <nav className="flex gap-6">
        <NavLink to="/">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "text-primary text-xl font-bold"
                  : "text-terciary  text-xl"
              }
            >
              Tasks
            </span>
          )}
        </NavLink>
        <NavLink to="/about">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "text-primary text-xl font-bold"
                  : "text-terciary  text-xl"
              }
            >
              Tasks
            </span>
          )}
        </NavLink>
        <NavLink to="/contato">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "text-primary text-xl font-bold"
                  : "text-terciary  text-xl"
              }
            >
              Tasks
            </span>
          )}
        </NavLink>
      </nav>
      <button className="bg-primary text-white px-16 py-2 rounded-md">
        Entrar
      </button>
    </div>
  );
}
