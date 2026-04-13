app.post("/register", async (req, res) => {
  try {
    console.log("📩 BODY:", req.body);

    const { email, password } = req.body;

    // Validación básica
    if (!email || !password) {
      return res.status(400).json({ msg: "Faltan datos" });
    }

    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ msg: "Usuario ya existe" });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      password: hash,
    });

    await user.save();

    res.json({ msg: "Usuario creado" });

  } catch (error) {
    console.error("🔥 ERROR REGISTER REAL:", error); // 👈 ESTE ES EL IMPORTANTE
    res.status(500).json({ msg: error.message });
  }
});