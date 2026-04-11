import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiRyC = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();
    setLoading(true);

    axios.get('https://rickandmortyapi.com/api/character/', {
      params: { 
        page, 
        name: query || undefined 
      },
      cancelToken: source.token
    })
      .then(({ data }) => {
        setData(data.results || []);
        setInfo(data.info || {});
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

        if (axios.isCancel(err)) return;

        if (err.response?.status === 404) {
          setData([]);
          setInfo({});
          return;
        }

        console.error(err);
      });

    return () => source.cancel();
  }, [page, query]);

  return (
    <div style={styles.container}>
      
      <div style={styles.content}>
        
        <h1 style={styles.title}>API Rick & Morty 🛸</h1>

        {/* BUSCADOR */}
        <div style={styles.searchContainer}>
          <input
            placeholder="Buscar personaje..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            style={styles.input}
          />
        </div>

        {/* LOADING */}
        {loading && <p style={styles.message}>Cargando...</p>}

        {/* SIN RESULTADOS */}
        {!loading && data.length === 0 && (
          <p style={styles.message}>No se encontraron personajes</p>
        )}

        {/* CARDS */}
        <div style={styles.grid}>
          {data.map((char) => (
            <div key={char.id} style={styles.card}>
              <img src={char.image} alt={char.name} style={styles.img} />

              <h4 style={styles.name}>{char.name}</h4>

              <p style={{
                color: char.gender === "Male" ? "#3B82F6" : "#EC4899"
              }}>
                {char.gender}
              </p>

              <span style={styles.status}>{char.status}</span>
            </div>
          ))}
        </div>

        {data.length > 0 && (
          <div style={styles.pagination}>
            <button
              onClick={() => setPage(page - 1)}
              disabled={!info.prev}
              style={styles.btn}
            >
              Anterior
            </button>

            <span style={styles.pageText}>
              Página {page}
            </span>

            <button
              onClick={() => setPage(page + 1)}
              disabled={!info.next}
              style={styles.btn}
            >
              Siguiente
            </button>
          </div>
        )}

      </div>

    </div>
  );
};

export default ApiRyC;

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #0D1117, #111827)",
    fontFamily: "'Poppins', sans-serif",
  },

  content: {
    padding: "40px 15px",
    color: "white",
  },

  title: {
    textAlign: "center",
    marginBottom: "30px",
    fontWeight: "600",
    fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
  },

  searchContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
    padding: "0 10px",
  },

  input: {
    width: "100%",
    maxWidth: "400px",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #1F2937",
    background: "#161B22",
    color: "white",
    outline: "none",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#161B22",
    border: "1px solid #1F2937",
    borderRadius: "14px",
    padding: "15px",
    textAlign: "center",
    transition: "0.3s",
    cursor: "pointer",
  },

  img: {
    width: "100%",
    borderRadius: "10px",
  },

  name: {
    marginTop: "10px",
    color: "#A78BFA",
    fontWeight: "500",
    fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
  },

  status: {
    fontSize: "12px",
    background: "#22c55e",
    padding: "4px 8px",
    borderRadius: "6px",
  },

  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "40px",
  },

  btn: {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    background: "#1F2937",
    color: "white",
    cursor: "pointer",
    minWidth: "100px",
  },

  pageText: {
    color: "#9CA3AF",
    fontSize: "clamp(0.9rem, 2vw, 1rem)",
  },

  message: {
    textAlign: "center",
    marginTop: "20px",
    color: "#9CA3AF",
    fontSize: "clamp(0.9rem, 2vw, 1rem)",
  },
};