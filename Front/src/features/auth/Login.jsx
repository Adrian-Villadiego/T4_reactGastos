import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/dashboard");
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
      const res = await fetch(`${API}/login`, {
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

      // 🔐 guardar token
      localStorage.setItem("token", data.token);

      // 🔄 avisar a la app
      window.dispatchEvent(new Event("authChange"));

      navigate("/dashboard");

    } catch (err) {
      console.error("❌ ERROR LOGIN:", err);
      setError("Error de conexión");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Iniciar Sesión</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Correo"
          className="form-control mb-3"
          value={form.email}
          onChange={handleChange}
          required
        />

        <div className="input-group mb-3">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Contraseña"
            className="form-control"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button
            type="button"
            className="btn btn-success"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {error && <p className="text-danger">{error}</p>}

        <button className="btn btn-primary w-100">
          Ingresar
        </button>

      </form>

      <p className="mt-3">
        ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
      </p>
    </div>
  );
};

export default Login;