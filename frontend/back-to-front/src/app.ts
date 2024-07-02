import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
const basePath = path.join(__dirname, '..', '..');

const corsOptions = {
    origin: [
        "http://localhost:3000",
        "http://localhost:8000",
        "https://youtube.com",
        "https://googleads.g.doubleclick.net",
        "https://googleads.g.doubleclick.net/pagead/id",
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
// Configuração básica do CORS permitindo qualquer origem
app.use(cors());

// Servindo arquivos estáticos
app.use(express.static(basePath))

app.get('/', (req, res) => {
    const indexPath = path.join(basePath, 'micro_frontends', 'mf_drawer', 'index.html');
    res.sendFile(indexPath);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
