import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  const navItems = [
    { to: "/", label: "Inicio" },
    { to: "/dashboard", label: "Gastos" },
    { to: "/apis", label: "API" },
    { to: "/contacto", label: "Contacto" },
  ];

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsAuth(!!token);
    };

    checkAuth();
    window.addEventListener("authChange", checkAuth);

    return () => {
      window.removeEventListener("authChange", checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("authChange"));
    navigate("/login");
  };

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          background: "#0f172a",
          padding: "14px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="container-fluid">

          <div className="d-flex align-items-center gap-3">
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "#22c55e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem",
              }}
            >
              💰
            </div>

            <span className="text-white fw-bold" style={{ fontSize: "1.3rem" }}>
              GastosApp
            </span>
          </div>

          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            ☰
          </button>

          <div className="collapse navbar-collapse mt-3 mt-lg-0" id="navbarContent">

            <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center ms-lg-auto"
              style={{ gap: "18px" }}
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `text-decoration-none fw-semibold ${
                      isActive ? "text-white" : "text-light"
                    }`
                  }
                  style={({ isActive }) => ({
                    fontSize: "1.05rem",
                    padding: "6px 4px",
                    borderBottom: isActive
                      ? "3px solid #22c55e"
                      : "3px solid transparent",
                  })}
                >
                  {item.label}
                </NavLink>
              ))}

              {isAuth ? (
                <button
                  onClick={handleLogout}
                  style={{
                    background: "#ef4444",
                    color: "#fff",
                    padding: "8px 18px",
                    borderRadius: "8px",
                    border: "none",
                  }}
                >
                  Cerrar sesión
                </button>
              ) : (
                <NavLink
                  to="/login"
                  style={{
                    background: "#22c55e",
                    color: "#022c22",
                    padding: "8px 18px",
                    borderRadius: "8px",
                    textDecoration: "none",
                  }}
                >
                  Login
                </NavLink>
              )}
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;