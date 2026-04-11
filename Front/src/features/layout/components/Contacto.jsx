import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contacto = () => {
  return (
    <div style={container}>

      <div style={hero}>
        <h1 style={title}>Contáctanos</h1>
        <p style={subtitle}>
          Estamos aquí para ayudarte con cualquier duda o sugerencia
        </p>
      </div>

      <div className="container py-4">
        <div className="row">

          <div className="col-md-6 mb-3">
            <div style={card}>
              <h5 className="mb-3">Envíanos un mensaje</h5>

              <form>
                <input type="text" placeholder="Nombre" style={input} />
                <input type="email" placeholder="Correo electrónico" style={input} />
                <textarea placeholder="Tu mensaje..." rows="4" style={input}></textarea>

                <button type="submit" style={button}>
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-6 mb-3">

            <div style={card}>
              <h5 className="mb-3">Información</h5>

              <div style={infoItem}>
                <FaEnvelope /> <span>soporte@gastosapp.com</span>
              </div>

              <div style={infoItem}>
                <FaPhone /> <span>+57 300 123 4567</span>
              </div>

              <div style={infoItem}>
                <FaMapMarkerAlt /> <span>Medellín, Colombia</span>
              </div>
            </div>

            <div style={card}>
              <h5>Misión</h5>
              <p style={text}>
                Ayudar a las personas a gestionar sus finanzas personales de forma
                sencilla, brindando herramientas claras para el control de ingresos y gastos.
              </p>
            </div>

            <div style={card}>
              <h5>Visión</h5>
              <p style={text}>
                Ser una plataforma líder en Latinoamérica en el manejo de finanzas personales,
                facilitando decisiones económicas inteligentes y responsables.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contacto;

const container = {
  background: "#0b1220",
  minHeight: "100vh",
  color: "#fff",
};

const hero = {
  background: "linear-gradient(90deg, #0f172a, #020617)",
  padding: "50px 20px",
  textAlign: "center",
  borderBottom: "1px solid rgba(255,255,255,0.05)",
};

const title = {
  fontSize: "28px",
  fontWeight: "bold",
};

const subtitle = {
  opacity: 0.7,
  marginTop: "8px",
  fontSize: "14px",
};

const card = {
  background: "#0f172a",
  padding: "18px",
  borderRadius: "10px",
  marginBottom: "15px",
  border: "1px solid rgba(255,255,255,0.05)",
};

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "6px",
  border: "none",
  outline: "none",
  background: "#020617",
  color: "#fff",
  fontSize: "13px",
};

const button = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "none",
  background: "#22c55e",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
};

const infoItem = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
  opacity: 0.8,
  fontSize: "13px",
};

const text = {
  fontSize: "13px",
  opacity: 0.7,
};