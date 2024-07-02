"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const basePath = path_1.default.join(__dirname, '..', '..');
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
app.use((0, cors_1.default)(corsOptions));
// Configuração básica do CORS permitindo qualquer origem
app.use((0, cors_1.default)());
// Servindo arquivos estáticos
app.use(express_1.default.static(basePath));
app.get('/', (req, res) => {
    const indexPath = path_1.default.join(basePath, 'micro_frontends', 'mf_drawer', 'index.html');
    res.sendFile(indexPath);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
