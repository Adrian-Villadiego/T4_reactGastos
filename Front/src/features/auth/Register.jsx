import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/register", form);
      setSuccess("Usuario registrado correctamente");
      setForm({ email: "", password: "" });
    } catch (err) {
      setError(err.response?.data?.msg || "Error al registrar");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        padding: "20px", // 🔥 espacio en móvil
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
          <FaUserPlus size={32} className="mb-2 text-success" />

          <h3
            className="fw-bold"
            style={{ fontSize: "clamp(1.4rem, 4vw, 1.8rem)" }}
          >
            Crear Cuenta
          </h3>

          <p style={{ fontSize: "13px", opacity: 0.7 }}>
            Empieza a controlar tus gastos
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

          <div className="input-group mb-3">
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

          {success && (
            <div
              className="mb-3 text-center"
              style={{
                background: "rgba(0,255,100,0.2)",
                padding: "8px",
                borderRadius: "8px",
                fontSize: "13px",
              }}
            >
              {success}
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
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#40916c")}
            onMouseOut={(e) => (e.target.style.background = "#52b788")}
          >
            Registrarse
          </button>

        </form>

        <div className="mt-3 text-center">
          <span style={{ fontSize: "13px" }}>
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" style={{ color: "#95d5b2" }}>
              Inicia sesión
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;