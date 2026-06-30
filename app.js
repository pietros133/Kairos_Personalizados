import express from "express";
import AppDataSource from "./src/config/dbconnect.js";
import registerRoutes from "./src/routes/registerRoutes.js";
import loginRoutes from "./src/routes/loginRoutes.js";
import addresRoutes from "./src/routes/addressRoutes.js";

const app = express();

app.use(express.json());

// routes
app.use("/auth", registerRoutes);
app.use("/auth", loginRoutes);
app.use("/auth", addresRoutes);
app.get("/test", (req, res) => {
  res.send("FOI");
});

AppDataSource.initialize()
  .then(() => {
    console.log("Banco conectado com sucesso!");

    app.listen(8081, () => {
      console.log("Servidor rodando na porta 8081");
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco:", err);
  });
