import { exibeResultado } from "../../busca/scripts/ExibeVideos.js";
const favoritosBotao = document.getElementById('favoritos');
favoritosBotao === null || favoritosBotao === void 0 ? void 0 : favoritosBotao.addEventListener('click', () => {
    const storedUserJSON = localStorage.getItem('videoFavs');
    if (storedUserJSON) {
        const storedUser = JSON.parse(storedUserJSON);
        exibeResultado(storedUser, 'favoritos');
    }
    else {
        console.log('Nenhum favorito encontrado no localStorage.');
    }
});
