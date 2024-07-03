import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import searchRoutes from "./routes/searchRoutes";
import favortiesRoutes from './routes/favoritosRoutes'

// dotenv.config({ path: "./.env" }); //Teoricamente, a viria do arquivo env

const app = express();

const port = process.env.PORT || 8000;
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:8000",
    "https://youtube.com",
    "https://googleads.g.doubleclick.net",
    "https://play.google.com"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Access-Control-Allow-Credentials",
  ],
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/", searchRoutes);
app.use("/api/", favortiesRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

export default app;