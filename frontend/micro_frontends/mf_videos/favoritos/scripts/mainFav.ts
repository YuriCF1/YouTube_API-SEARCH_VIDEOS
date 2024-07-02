import { IResponse } from "../../../Interfaces/IVideo.js";
import { exibeResultado } from "../../busca/scripts/ExibeVideos.js";

const favoritosBotao = document.getElementById('favoritos');
favoritosBotao?.addEventListener('click', () => {
    const storedUserJSON = localStorage.getItem('videoFavs');
    if (storedUserJSON) {
        const storedUser = JSON.parse(storedUserJSON);
        exibeResultado(storedUser as IResponse[], 'favoritos')
    } else {
        console.log('Nenhum favorito encontrado no localStorage.');
    }
})