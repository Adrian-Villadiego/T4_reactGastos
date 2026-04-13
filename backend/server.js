import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// 🔐 Validar variables de entorno
if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
  console.error("❌ Faltan variables de entorno (MONGO_URI o JWT_SECRET)");
  process.exit(1);
}

const app = express();

// 🔥 CORS (modo debug abierto)
app.use(cors({
  origin: "*", // 🔥 permitir todo temporalmente
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// 🔌 Mongo
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Mongo conectado"))
  .catch(err => console.log("❌ Error Mongo:", err));

// 📄 Modelo
const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true
  },
  password: { 
    type: String, 
    required: true 
  },
});

const User = mongoose.model("User", userSchema);

// 🔐 REGISTER
app.post("/register", async (req, res) => {
  try {
    console.log("📩 REGISTER:", req.body); // 🔥 DEBUG

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Email y password son obligatorios" });
    }

    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ msg: "Usuario ya existe" });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = new User({ email, password: hash });
    await user.save();

    res.json({ msg: "Usuario creado correctamente" });

  } catch (error) {
    console.log("❌ ERROR REGISTER:", error); // 🔥 DEBUG
    res.status(500).json({ error: error.message });
  }
});

// 🔑 LOGIN
app.post("/login", async (req, res) => {
  try {
    console.log("📩 LOGIN:", req.body); // 🔥 DEBUG

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Email y password son obligatorios" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Usuario no existe" });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(400).json({ msg: "Datos inválidos" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });

  } catch (error) {
    console.log("❌ ERROR LOGIN:", error); // 🔥 DEBUG
    res.status(500).json({ error: error.message });
  }
});

// 🌐 Ruta de prueba
app.get("/", (req, res) => {
  res.send("🚀 Backend funcionando correctamente");
});

// 🚀 Servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🔥 Servidor corriendo en puerto ${PORT}`);
});