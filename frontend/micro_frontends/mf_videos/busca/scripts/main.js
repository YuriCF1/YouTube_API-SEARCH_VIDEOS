//ARQUIVO RESPONSÁVEL POR FAZER BUSCAS E IMPLEMENTAR HTML
import { exibeResultado } from './ExibeVideos.js';
let timeoutId;
const input = document.getElementById('buscar');
const resultadoContainer = document.getElementById('resultados_container_busca');
input.addEventListener('input', () => {
    const termoBuscado = input.value.trim();
    if (termoBuscado.length > 2) { //Muito improvável que exista algo a ser buscado com menos de 3 letras. Economizando recursos
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
                exibeResultado(data, 'busca');
            })
                .catch(error => {
                console.error('Ops... Erro ao fazer requisição:', error);
            });
        }, 1);
    }
    else {
        clearTimeout(timeoutId);
        resultadoContainer.innerHTML = '';
        resultadoContainer.innerHTML = `
    <h2 id="slogan">
      Educação, entretenimento, notícias... Tire o melhor do <strong class="youtube">YouTube</strong>!
    </h2>`;
    }
});
