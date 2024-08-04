import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../components/img/OIG3.jpg";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Seguro quieres salir?",
      text: "Realmente seguro!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Cerrar Sesion!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sesion Cerrada!",
          text: "Se Cerro la Sesion.",
          icon: "success",
        }).then(() => {
          // Aquí puedes agregar la lógica de logout, como limpiar el estado o token
          // Ejemplo: localStorage.removeItem("authToken");
          navigate("/login");
        });
      }
    });
  };

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "56px", height: "56px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/animes">
                Animes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/comics">
                Comics
              </NavLink>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
