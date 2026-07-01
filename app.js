import express from "express";
import AppDataSource from "./src/config/dbconnect.js";

import registerRoutes from "./src/routes/registerRoutes.js";
import loginRoutes from "./src/routes/loginRoutes.js";
import addressRoutes from "./src/routes/addressRoutes.js";
import ProductRoutes from "./src/routes/ProductRoutes.js";
const app = express();
const PORT = 8081;

// Middlewares
app.use(express.json());

// Rotas
app.use("/auth", registerRoutes);
app.use("/auth", loginRoutes);
app.use("/auth", addressRoutes);
app.use("/auth", ProductRoutes);



AppDataSource.initialize()
  .then(() => {
    console.log(" Banco conectado com sucesso!");

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco:", error);
    process.exit(1);
  });
