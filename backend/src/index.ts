import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import searchRoutes from "./routes/searchRoutes";
import favortiesRoutes from './routes/favoritosRoutes'

dotenv.config({ path: "./.env" });

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/", searchRoutes);
app.use("/api/", favortiesRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

export default app;