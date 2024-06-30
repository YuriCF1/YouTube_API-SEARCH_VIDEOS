//ARQUIVO RESPONSÁVEL POR 
import { favAdd } from "./test.js";
document.addEventListener('DOMContentLoaded', () => {
    let timeoutId;
    const input = document.getElementById('busca');
    const resultadoContainer = document.getElementById('resultados_container');
    const modal = document.getElementById('videoModal');
    const frameVideo = document.getElementById('frame_Video');
    const fechaModal = document.getElementsByClassName('close')[0];
    const titulo = document.getElementById('video-titulo');
    const desc = document.getElementById('video-desc');
    const canal = document.getElementById('video-canal');
    input.addEventListener('input', () => {
        const termoBuscado = input.value.trim();
        if (termoBuscado.length > 2) {
            console.log('Pesquisa');
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                const url = `http://localhost:8001/api/videos/search?query=${encodeURIComponent(termoBuscado)}`;
                fetch(url)
                    .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro na requisição.');
                    }
                    return response.json();
                })
                    .then(data => {
                    console.log('Dados da resposta:', data);
                    exibeResultado(data);
                })
                    .catch(error => {
                    console.error('Ops... Erro ao fazer requisição:', error);
                });
            }, 10);
        }
        else {
            clearTimeout(timeoutId);
            resultadoContainer.innerHTML = '';
            resultadoContainer.innerHTML = `
      <h2 id="slogan">
        Educação, entretenimento, notícias... Tire o melhor do YouTube!
      </h2>`;
        }
    });
    function exibeResultado(results) {
        resultadoContainer.innerHTML = '';
        results.forEach(result => {
            const videoDiv = document.createElement('div');
            videoDiv.classList.add('video-resulto');
            const favEstrela = document.createElement('img');
            favEstrela.src = '../assets/fav-icon-off.svg';
            favEstrela.id = result.id;
            favEstrela.classList.add('fav-estrela'); //Estrela de favorito
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
                frameVideo.src = `https://www.youtube.com/embed/${result.id}`;
                modal.style.display = 'block';
                titulo.innerHTML = `${result.title}`;
                canal.innerHTML = `${result.channelTitle}`;
                desc.innerHTML = `${result.description}`;
            });
            videoDiv.appendChild(videoButton);
            videoDiv.appendChild(favEstrela);
            resultadoContainer.appendChild(videoDiv);
            favEstrela.addEventListener('click', () => {
                const idFav = favEstrela.id;
                favAdd(idFav);
            });
        });
    }
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
});
