import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash, FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_URL;

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
      const res = await axios.post(
        `${API}/register`,
        form,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      setSuccess(res.data.msg || "Usuario registrado correctamente");
      setForm({ email: "", password: "" });

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      console.error("❌ ERROR REGISTER:", err);

      setError(
        err.response?.data?.msg ||
        err.response?.data?.error ||
        "Error al registrar"
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2>Crear Cuenta</h2>

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
        {success && <p className="text-success">{success}</p>}

        <button className="btn btn-success w-100">
          Registrarse
        </button>

      </form>

      <p className="mt-3">
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </div>
  );
};

export default Register;