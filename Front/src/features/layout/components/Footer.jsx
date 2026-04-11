import React from "react";
import { FaWallet, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#0f172a",
        color: "#fff",
        marginTop: "auto",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        className="container py-4 px-3"
        style={{ maxWidth: "1100px" }}
      >
        <div className="row align-items-start text-center text-md-start">

          <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
            <div className="d-flex align-items-center gap-2 mb-2">
              <div style={logoBox}>
                <FaWallet size={14} />
              </div>

              <h6 className="fw-bold m-0">GastosApp</h6>
            </div>

            <p style={descText} className="text-center text-md-start">
              Controla tus ingresos y gastos fácilmente, visualiza reportes y mejora tus decisiones financieras.
            </p>
          </div>

          <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center">
            <h6 className="fw-bold mb-2">Navegación</h6>

            <div className="d-flex flex-column gap-1">
              <Link to="/" style={linkStyle}>Inicio</Link>
              <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
              <Link to="/apis" style={linkStyle}>API</Link>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex flex-column align-items-center align-items-md-end">
            <h6 className="fw-bold mb-2">Contacto</h6>

            <div className="d-flex flex-column gap-2 align-items-center align-items-md-end">

              <a href="#" style={socialItem}>
                <div style={iconStyle}><FaFacebookF size={12} /></div>
                <span>Facebook</span>
              </a>

              <a href="#" style={socialItem}>
                <div style={iconStyle}><FaInstagram size={12} /></div>
                <span>Instagram</span>
              </a>

              <a href="#" style={socialItem}>
                <div style={iconStyle}><FaTwitter size={12} /></div>
                <span>Twitter</span>
              </a>

            </div>
          </div>

        </div>

        <div
          className="text-center pt-3 mt-3"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            fontSize: "clamp(10px, 2vw, 12px)",
            opacity: 0.6,
          }}
        >
          © {new Date().getFullYear()} GastosApp - Adrian Villadiego Berrio
        </div>
      </div>
    </footer>
  );
};

const logoBox = {
  width: "36px",
  height: "36px",
  borderRadius: "8px",
  background: "#22c55e",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const descText = {
  fontSize: "12px",
  opacity: 0.7,
  maxWidth: "260px",
};

const linkStyle = {
  color: "#cbd5f5",
  textDecoration: "none",
  fontSize: "12px",
};

const socialItem = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  color: "#cbd5f5",
  textDecoration: "none",
  fontSize: "12px",
};

const iconStyle = {
  width: "30px",
  height: "30px",
  borderRadius: "6px",
  background: "#1e293b",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#22c55e",
};

export default Footer;