import { adicionarFav } from "./manageFavorites.js";
const resultadoContainerBusca = document.getElementById('resultados_container_busca');
const resultadoContainerFavorito = document.getElementById('resultados_container_favorito');
const modal = document.getElementById('videoModal');
const frameVideo = document.getElementById('frame_Video');
const fechaModal = document.getElementsByClassName('close')[0];
const titulo = document.getElementById('video-titulo');
const desc = document.getElementById('video-desc');
const canal = document.getElementById('video-canal');
const storedVideosJSON = localStorage.getItem('videoFavs');
let storedVideos = storedVideosJSON ? JSON.parse(storedVideosJSON) : [];
export function exibeResultado(results, pagina) {
    let containerUsado;
    let ehPaginaBusca = pagina === 'busca' ? true : false;
    if (pagina === 'busca') {
        containerUsado = resultadoContainerBusca;
        containerUsado.innerHTML = '';
    }
    else if (pagina === 'favoritos') {
        containerUsado = resultadoContainerFavorito;
        containerUsado.innerHTML = '';
    }
    else {
        console.log('Nome da página inexistente ou digitado errado!');
        return;
    }
    results.forEach(result => {
        const videoDiv = document.createElement('div');
        videoDiv.classList.add('video-resulto');
        const videoButton = document.createElement('button');
        videoButton.classList.add('video-button');
        const thumbnailEncontrada = document.createElement('img');
        thumbnailEncontrada.classList.add('img-button');
        thumbnailEncontrada.src = result.betterThumbnail;
        thumbnailEncontrada.alt = result.title;
        videoButton.appendChild(thumbnailEncontrada);
        const tituloEncontrado = document.createElement('h2');
        tituloEncontrado.textContent = result.title;
        videoButton.appendChild(tituloEncontrado);
        videoButton.addEventListener('click', () => {
            modal.style.display = 'block';
            titulo.innerHTML = result.title;
            canal.innerHTML = result.channelTitle;
            desc.innerHTML = result.description;
            frameVideo.src = `https://www.youtube.com/embed/${result.id}?origin=https://yourdomain.com&rel=0&autoplay=1&modestbranding=1`;
            // if (ehPaginaBusca) {
            //     frameVideo.src = `https://www.youtube.com/embed/${result.id}`;
            //     modal.style.display = 'block';
            //     titulo.innerHTML = `${result.title}`;
            //     canal.innerHTML = `${result.channelTitle}`;
            //     desc.innerHTML = `${result.description}`;
            // } else {
            //     frameVideoFav.src = `https://www.youtube.com/embed/${result.id}`;
            //     modalFav.style.display = 'block';
            //     titulo.innerHTML = `${result.title}`;
            //     canal.innerHTML = `${result.channelTitle}`;
            //     desc.innerHTML = `${result.description}`;
            // }
        });
        const favEstrela = document.createElement('img');
        if (ehPaginaBusca) {
            favEstrela.src = 'micro_frontends/assets/fav-icon-off.svg';
        }
        else if (pagina === 'favoritos') {
            favEstrela.src = 'micro_frontends/assets/fav-icon-on.svg';
        }
        favEstrela.id = result.id;
        favEstrela.classList.add('fav-estrela'); // Estrela de favorito
        const videosInfos = {
            id: result.id,
            channelId: result.channelId,
            title: result.title,
            thumbnail: result.thumbnail,
            betterThumbnail: result.betterThumbnail,
            description: result.description,
            channelTitle: result.channelTitle,
        };
        const videosAtributo = JSON.stringify(videosInfos);
        favEstrela.setAttribute('data-videoInfo', videosAtributo);
        // Verificando se o vídeo está nos storedVideos, vindo do LocalStorage
        const videoArmazenado = storedVideos.find(video => video.id === result.id);
        if (videoArmazenado) {
            favEstrela.src = 'micro_frontends/assets/fav-icon-on.svg';
        }
        videoDiv.appendChild(videoButton);
        videoDiv.appendChild(favEstrela);
        containerUsado.appendChild(videoDiv);
        fechaModal.addEventListener('click', () => {
            modal.style.display = 'none';
            frameVideo.src = '';
        });
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
                frameVideo.src = '';
            }
        });
        favEstrela.addEventListener('click', () => {
            const idFav = favEstrela.id;
            if (adicionarFav(idFav)) {
                favEstrela.src = 'micro_frontends/assets/fav-icon-on.svg';
                storedVideos.push(result);
            }
            else {
                favEstrela.src = 'micro_frontends/assets/fav-icon-off.svg';
                storedVideos = storedVideos.filter(video => video.id !== result.id); // Remove do storedVideos se já estiver no LocalStorage
            }
            // Atualizando o localStorage
            localStorage.setItem('videoFavs', JSON.stringify(storedVideos));
        });
    });
}
