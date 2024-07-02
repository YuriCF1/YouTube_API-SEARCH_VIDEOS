//ARQUIVO RESPONSÁVEL POR FAZER BUSCAS E IMPLEMENTAR HTML

import { IResponse } from "../../../Interfaces/IVideo.js";

import { exibeResultado } from './ExibeVideos.js'

let timeoutId: ReturnType<typeof setTimeout>;
const input = document.getElementById('buscar') as HTMLInputElement;
const resultadoContainer = document.getElementById('resultados_container');
// const modal = document.getElementById('videoModal') as HTMLElement;
// const frameVideo = document.getElementById('frame_Video') as HTMLIFrameElement;
// const fechaModal = document.getElementsByClassName('close')[0] as HTMLElement;

// const titulo = document.getElementById('video-titulo') as HTMLElement;
// const desc = document.getElementById('video-desc') as HTMLElement;
// const canal = document.getElementById('video-canal') as HTMLElement;

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
          exibeResultado(data, 'busca');
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



// fechaModal.addEventListener('click', () => {
//   modal.style.display = 'none';
//   frameVideo.src = '';
// });

// window.addEventListener('click', (event) => {
//   if (event.target === modal) {
//     modal.style.display = 'none';
//     frameVideo.src = '';
//   }
// });
