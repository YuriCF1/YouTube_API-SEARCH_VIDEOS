import express from 'express';
import path from 'path';

const app = express();

// Define o caminho base como duas pastas acima do diretório atual
const basePath = path.join(__dirname, '..', '..');

// Configuração para servir todos os arquivos estáticos da raiz
app.use(express.static(basePath));

// Rota principal
app.get('/', (req, res) => {
    // Construindo o caminho para o arquivo index.html do micro frontend mf_drawer
    const indexPath = path.join(basePath, 'micro_frontends', 'mf_drawer', 'index.html');
    res.sendFile(indexPath);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
