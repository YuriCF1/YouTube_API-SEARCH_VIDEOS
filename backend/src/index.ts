import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import searchRoutes from "./routes/searchRoutes";

dotenv.config({ path: "./.env" });

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/videos", searchRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

export default app;
