import React from "react";
import { NavLink } from "react-router-dom";

const Content = () => {
  return (
    <main className="flex-grow-1">

      {/* HERO */}
      <section
        className="text-white text-center d-flex align-items-center"
        style={{
          minHeight: "60vh",
          background: "linear-gradient(120deg, #0f2027, #2c5364)",
          padding: "60px 15px",
        }}
      >
        <div className="container">
          <h1
            className="fw-bold mb-3"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            💰 Controla tus gastos
          </h1>

          <p
            className="mb-4"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
              opacity: 0.9,
            }}
          >
            Administra tu dinero de forma inteligente y mejora tus finanzas
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <NavLink
              to="/Dashboard"
              className="btn btn-light px-4 py-2 rounded-pill fw-semibold"
            >
              Ver Gastos
            </NavLink>

            <NavLink
              to="/Contacto"
              className="btn btn-outline-light px-4 py-2 rounded-pill"
            >
              Contactanos
            </NavLink>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="container my-5">
        <div className="row g-4">

          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="card border-0 shadow h-100 text-center p-3"
              style={{ transition: "transform 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div className="card-body">
                <h2>📊</h2>
                <h5 className="fw-bold">¿Qué son los gastos?</h5>
                <p className="text-muted">
                  Son todas las salidas de dinero que realizas en tu día a día.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="card border-0 shadow h-100 text-center p-3"
              style={{ transition: "transform 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div className="card-body">
                <h2>💸</h2>
                <h5 className="fw-bold">Tipos de gastos</h5>
                <ul className="list-unstyled text-muted mb-0">
                  <li>• Fijos</li>
                  <li>• Variables</li>
                  <li>• Necesarios</li>
                  <li>• Innecesarios</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="card border-0 shadow h-100 text-center p-3"
              style={{ transition: "transform 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div className="card-body">
                <h2>📈</h2>
                <h5 className="fw-bold">Importancia</h5>
                <p className="text-muted">
                  Te permite ahorrar, evitar deudas y tomar mejores decisiones financieras.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* GITHUB SECTION */}
      <section
        className="d-flex align-items-center justify-content-center text-white"
        style={{
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          padding: "60px 15px",
        }}
      >
        <div
          className="text-center"
          style={{
            maxWidth: "700px",
            width: "100%",
          }}
        >

          <h2
            className="fw-bold mb-3"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)" }}
          >
            🚀 Mira el código en GitHub
          </h2>

          <p
            style={{
              opacity: 0.8,
              marginBottom: "25px",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            }}
          >
            Explora cómo está construido este proyecto, revisa el código fuente
            y aprende más sobre el desarrollo de esta aplicación.
          </p>

          <a
            href="https://github.com/Adrian-Villadiego/T4_reactGastos.git"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "12px 25px",
              borderRadius: "50px",
              background: "#22c55e",
              color: "#0f172a",
              fontWeight: "600",
              textDecoration: "none",
              transition: "0.3s",
              width: "100%",
              maxWidth: "260px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            💻 Ver Repositorio
          </a>

        </div>
      </section>

    </main>
  );
};

export default Content;