import React, { useState } from "react";

const Dashboard = () => {
  const [gastos, setGastos] = useState([
    { id: 1, nombre: "Comida", monto: 50000, categoria: "Necesario" },
    { id: 2, nombre: "Transporte", monto: 30000, categoria: "Necesario" },
    { id: 3, nombre: "Netflix", monto: 20000, categoria: "Entretenimiento" },
  ]);

  const [form, setForm] = useState({
    nombre: "",
    monto: "",
    categoria: "Necesario",
  });

  const total = gastos.reduce((acc, g) => acc + g.monto, 0);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const agregarGasto = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.monto) return;

    const nuevo = {
      id: Date.now(),
      nombre: form.nombre,
      monto: Number(form.monto),
      categoria: form.categoria,
    };

    setGastos([...gastos, nuevo]);

    setForm({
      nombre: "",
      monto: "",
      categoria: "Necesario",
    });
  };

  const eliminarGasto = (id) => {
    setGastos(gastos.filter((g) => g.id !== id));
  };

  return (
    <div className="container py-4 px-2 px-md-3">

      <h1
        className="fw-bold text-center mb-4"
        style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)" }}
      >
        💰Gastos
      </h1>

      {/* FORMULARIO */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <h5 className="fw-bold mb-3">➕ Agregar gasto</h5>

          <form onSubmit={agregarGasto} className="row g-3">

            <div className="col-12 col-md-4">
              <input
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Nombre"
                value={form.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="col-12 col-md-3">
              <input
                type="number"
                name="monto"
                className="form-control"
                placeholder="Monto"
                value={form.monto}
                onChange={handleChange}
              />
            </div>

            <div className="col-12 col-md-3">
              <select
                name="categoria"
                className="form-select"
                value={form.categoria}
                onChange={handleChange}
              >
                <option>Necesario</option>
                <option>Entretenimiento</option>
                <option>Otro</option>
              </select>
            </div>

            <div className="col-12 col-md-2 d-grid">
              <button className="btn btn-primary">Agregar</button>
            </div>

          </form>
        </div>
      </div>

      <div className="row g-3 mb-4">

        <div className="col-12 col-md-4">
          <div className="card shadow text-center p-3 h-100">
            <h5>Total Gastos</h5>
            <h3 className="text-danger">${total.toLocaleString()}</h3>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card shadow text-center p-3 h-100">
            <h5>N° Gastos</h5>
            <h3>{gastos.length}</h3>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card shadow text-center p-3 h-100">
            <h5>Promedio</h5>
            <h3>
              $
              {gastos.length
                ? Math.floor(total / gastos.length).toLocaleString()
                : 0}
            </h3>
          </div>
        </div>

      </div>

      {/* LISTA */}
      <div className="card shadow">
        <div className="card-body">
          <h5 className="fw-bold mb-3">📋 Lista de gastos</h5>

          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Categoría</th>
                  <th>Monto</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {gastos.map((g) => (
                  <tr key={g.id}>
                    <td>{g.nombre}</td>

                    <td>
                      <span className="badge bg-secondary">
                        {g.categoria}
                      </span>
                    </td>

                    <td className="text-danger">
                      ${g.monto.toLocaleString()}
                    </td>

                    <td>
                      <button
                        className="btn btn-sm btn-danger w-100 w-md-auto"
                        onClick={() => eliminarGasto(g.id)}
                      >
                        Eliminar
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Dashboard;