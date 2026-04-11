import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaWallet } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.msg || "Datos inválidos");
        return;
      }

      localStorage.setItem("token", data.token);

      window.dispatchEvent(new Event("authChange"));

      navigate("/dashboard");

    } catch (error) {
      setError("Error de conexión");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        padding: "20px",
        background: "linear-gradient(135deg, #081c15, #1b4332, #2d6a4f)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        className="p-4 shadow-lg w-100"
        style={{
          maxWidth: "380px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "#fff",
        }}
      >
        <div className="text-center mb-4">
          <FaWallet size={32} className="mb-2 text-success" />

          <h3
            className="fw-bold"
            style={{ fontSize: "clamp(1.4rem, 4vw, 1.8rem)" }}
          >
            Control de Gastos
          </h3>

          <p style={{ fontSize: "13px", opacity: 0.7 }}>
            Administra tu dinero fácilmente
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              borderRadius: "10px",
              padding: "10px",
              fontSize: "14px",
            }}
          />

          <div className="input-group mb-2">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="form-control"
              placeholder="Contraseña"
              value={form.password}
              onChange={handleChange}
              required
              style={{
                borderRadius: "10px 0 0 10px",
                padding: "10px",
                fontSize: "14px",
              }}
            />

            <button
              type="button"
              className="btn btn-success px-3"
              style={{
                borderRadius: "0 10px 10px 0",
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="text-center mb-3">
            <Link
              to="/forgot-password"
              style={{
                fontSize: "12px",
                color: "#74c69d",
                textDecoration: "none",
              }}
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          {error && (
            <div
              className="mb-3 text-center"
              style={{
                background: "rgba(255,0,0,0.2)",
                padding: "8px",
                borderRadius: "8px",
                fontSize: "13px",
              }}
            >
              {error}
            </div>
          )}

          <button
            className="btn w-100"
            style={{
              background: "#52b788",
              border: "none",
              borderRadius: "10px",
              padding: "10px",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Ingresar
          </button>

        </form>

        <div className="mt-3 text-center">
          <span style={{ fontSize: "13px" }}>
            ¿No tienes cuenta?{" "}
            <Link to="/register" style={{ color: "#95d5b2" }}>
              Regístrate
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;