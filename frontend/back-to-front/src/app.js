"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// Define o caminho base como duas pastas acima do diretório atual
const basePath = path_1.default.join(__dirname, '..', '..');
// Configuração para servir todos os arquivos estáticos da raiz
app.use(express_1.default.static(basePath));
// Rota principal
app.get('/', (req, res) => {
    // Construindo o caminho para o arquivo index.html do micro frontend mf_drawer
    const indexPath = path_1.default.join(basePath, 'micro_frontends', 'mf_drawer', 'index.html');
    res.sendFile(indexPath);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
