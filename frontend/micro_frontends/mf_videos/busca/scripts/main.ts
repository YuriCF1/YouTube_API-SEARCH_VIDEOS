//ARQUIVO RESPONSÁVEL POR FAZER BUSCAS E IMPLEMENTAR HTML
console.log('tee');
import { gerenciaFavorito } from "./test.js"
import { grito } from "./test.js"
import { IResponse } from "../../../Interfaces/IVideo.js";

grito()

// document.addEventListener('load', () => {
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
  console.log('a');
  if (termoBuscado.length > 2) {
    console.log('Pesquisa');
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const url = `http://localhost:8000/api/videos/search?query=${encodeURIComponent(termoBuscado)}`;

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
  } else {
    clearTimeout(timeoutId);
    resultadoContainer!.innerHTML = '';
    resultadoContainer!.innerHTML = `
      <h2 id="slogan">
        Educação, entretenimento, notícias... Tire o melhor do YouTube!
      </h2>`;
  }
});

function exibeResultado(results: IResponse[]) {
  resultadoContainer!.innerHTML = '';

  results.forEach(result => {
    const videoDiv = document.createElement('div');
    videoDiv.classList.add('video-resulto');

    const favEstrela = document.createElement('img')
    favEstrela.src = 'micro_frontends/assets/fav-icon-off.svg'
    favEstrela.id = result.id;
    favEstrela.classList.add('fav-estrela') //Estrela de favorito

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

    videoDiv.appendChild(videoButton);
    videoDiv.appendChild(favEstrela);
    resultadoContainer!.appendChild(videoDiv);

    favEstrela.addEventListener('click', () => {
      const idFav = favEstrela.id;
      gerenciaFavorito(idFav)
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
// });
