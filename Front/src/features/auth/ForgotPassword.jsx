import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaCheckCircle } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        padding: "20px", // 🔥 espacio en móvil
        background: "linear-gradient(135deg, #081c15, #1b4332, #2d6a4f)",
      }}
    >
      <div
        className="card p-4 shadow-lg text-center w-100"
        style={{
          maxWidth: "420px",
          borderRadius: "20px",
        }}
      >
        {!sent ? (
          <>
            <div className="mb-3">
              <FaEnvelope size={36} color="#1e90ff" />
            </div>

            <h3
              className="fw-bold mb-2"
              style={{ fontSize: "clamp(1.4rem, 4vw, 1.8rem)" }}
            >
              Recuperar contraseña
            </h3>

            <p
              className="text-muted mb-4"
              style={{ fontSize: "clamp(0.85rem, 2vw, 0.95rem)" }}
            >
              Ingresa tu correo y te enviaremos un enlace para restablecer tu contraseña.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control mb-3 rounded-pill text-center"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  padding: "10px",
                  fontSize: "14px",
                }}
              />

              <button
                className="btn w-100 rounded-pill fw-semibold"
                style={{
                  background: "#47617b",
                  color: "#fff",
                  padding: "10px",
                  fontSize: "14px",
                }}
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar enlace"}
              </button>
            </form>

            <div className="mt-4">
              <Link
                to="/login"
                className="text-decoration-none fw-semibold"
                style={{
                  color: "#6ea67e",
                  fontSize: "13px",
                }}
              >
                ← Volver al login
              </Link>
            </div>
          </>
        ) : (
          <>
            <FaCheckCircle size={46} color="green" className="mb-3" />

            <h4
              className="fw-bold"
              style={{ fontSize: "clamp(1.2rem, 3vw, 1.5rem)" }}
            >
              Correo enviado
            </h4>

            <p
              className="text-muted mb-4"
              style={{ fontSize: "clamp(0.85rem, 2vw, 0.95rem)" }}
            >
              Revisa tu bandeja de entrada y sigue las instrucciones.
            </p>

            <Link
              to="/login"
              className="btn rounded-pill px-4 fw-semibold w-100"
              style={{
                background: "#1e90ff",
                color: "#fff",
                padding: "10px",
                fontSize: "14px",
              }}
            >
              Volver al login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;