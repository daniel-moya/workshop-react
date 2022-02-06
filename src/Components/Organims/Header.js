import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <div className="ed-grid s-grid-5 lg-grid-4">
        <div className="s-cols-4 lg-cols-1 s-cross-center">
          <NavLink to="/">
            <img
              src="https://www.openenglish.com/wp-content/uploads/sites/24/2021/09/cropped-LogoMillon-curvas.png"
              alt="logoPage"
              className="main-logo"
            />
          </NavLink>
        </div>
        <div className="s-cols-1 lg-cols-3 s-cross-center s-main-end">
          <nav className="main-menu">
            <ul>
              <li className="">
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li className="">
                <NavLink to="/especialidades">Especialidades</NavLink>
              </li>
              <li className="">
                <NavLink to="/cursos">Cursos</NavLink>
              </li>
              <li className="">
                <NavLink to="/profesores">Profesores</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
