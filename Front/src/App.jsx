import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORTS
import Content from "./features/layout/components/Content";
import Footer from "./features/layout/components/Footer";
import Header from "./features/layout/components/Header";
import Contacto from "./features/layout/components/Contacto";

import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import ForgotPassword from "./features/auth/ForgotPassword";

import Dashboard from "./features/Dash/components/Dashboard";
import ApiRyC from "./features/api/components/ApiRyC";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/apis" element={<ApiRyC />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;