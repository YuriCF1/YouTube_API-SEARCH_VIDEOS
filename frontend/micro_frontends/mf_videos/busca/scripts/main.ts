//ARQUIVO RESPONSÁVEL POR FAZER BUSCAS E IMPLEMENTAR HTML
import { adicionarFav } from "./manageFavorites.js"
import { IResponse } from "../../../Interfaces/IVideo.js";

let timeoutId: ReturnType<typeof setTimeout>;

const input = document.getElementById('busca') as HTMLInputElement;
const resultadoContainer = document.getElementById('resultados_container');
const modal = document.getElementById('videoModal') as HTMLElement;
const frameVideo = document.getElementById('frame_Video') as HTMLIFrameElement;
const fechaModal = document.getElementsByClassName('close')[0] as HTMLElement;

const titulo = document.getElementById('video-titulo') as HTMLElement;
const desc = document.getElementById('video-desc') as HTMLElement;
const canal = document.getElementById('video-canal') as HTMLElement;

input.addEventListener('input', () => {
  const termoBuscado = input.value.trim();
  if (termoBuscado.length > 2) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const url = `http://localhost:8000/api/search?query=${encodeURIComponent(termoBuscado)}`;

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
    }, 1);
  } else {
    clearTimeout(timeoutId);
    resultadoContainer!.innerHTML = '';
    resultadoContainer!.innerHTML = `
    <h2 id="slogan">
      Educação, entretenimento, notícias... Tire o melhor do <strong class="youtube">YouTube</strong>!
    </h2>`;
  }
});

function exibeResultado(results: IResponse[]) {
  resultadoContainer!.innerHTML = '';

  results.forEach(result => {
    const videoDiv = document.createElement('div');
    videoDiv.classList.add('video-resulto');

    const videoButton = document.createElement('button');
    videoButton.classList.add('video-button');

    const thumbnailEncontrada = document.createElement('img');
    thumbnailEncontrada.classList.add('img-button')
    thumbnailEncontrada.src = result.betterThumbnail;
    thumbnailEncontrada.alt = result.title;
    videoButton.appendChild(thumbnailEncontrada);

    const tituloEncontrado = document.createElement('h2');
    tituloEncontrado.textContent = result.title;
    videoButton.appendChild(tituloEncontrado);

    videoButton.addEventListener('click', () => {
      frameVideo.src = `https://www.youtube.com/embed/${result.id}`;
      modal.style.display = 'block';
      titulo.innerHTML = `${result.title}`
      canal.innerHTML = `${result.channelTitle}`
      desc.innerHTML = `${result.description}`
    });

    const favEstrela = document.createElement('img')
    favEstrela.src = 'micro_frontends/assets/fav-icon-off.svg'
    favEstrela.id = result.id;
    favEstrela.classList.add('fav-estrela') //Estrela de favorito

    const videosInfos = {
      id: result.id,
      channelId: result.channelId,
      title: result.title,
      thumbnail: result.thumbnail,
      betterThumbnail: result.betterThumbnail,
      description: result.description,
      channelTitle: result.channelTitle,
    }

    const videosAtributo = JSON.stringify(videosInfos);
    favEstrela.setAttribute('data-videoInfo', videosAtributo)

    videoDiv.appendChild(videoButton);
    videoDiv.appendChild(favEstrela);
    resultadoContainer!.appendChild(videoDiv);

    favEstrela.addEventListener('click', () => {
      const idFav = favEstrela.id
      adicionarFav(idFav) ? favEstrela.src = 'micro_frontends/assets/fav-icon-on.svg' : favEstrela.src = 'micro_frontends/assets/fav-icon-off.svg'
    })
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
