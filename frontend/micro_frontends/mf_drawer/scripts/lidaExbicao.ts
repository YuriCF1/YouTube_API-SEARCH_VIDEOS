const buscaBotao = document.getElementById('buscarBotao');
const favoritosBotao = document.getElementById('favoritos');


const componenteBusca = document.getElementById('componente_busca');
const componenteFavorito = document.getElementById('componente_favorito');

if (buscaBotao && favoritosBotao && componenteBusca && componenteFavorito) {
    buscaBotao.addEventListener('click', () => {
        mudaClasseBotoes(buscaBotao, favoritosBotao);
        mudaClasseDivs(componenteBusca, componenteFavorito)
    });

    favoritosBotao.addEventListener('click', () => {
        console.log('clicado');
        mudaClasseBotoes(favoritosBotao, buscaBotao);
        mudaClasseDivs(componenteFavorito, componenteBusca)
    });
}

function mudaClasseBotoes(activeButton: HTMLElement, inactiveButton: HTMLElement) {
    activeButton.classList.add('ativo');
    activeButton.classList.remove('inativo');
    inactiveButton.classList.add('inativo');
    inactiveButton.classList.remove('ativo');
}

function mudaClasseDivs(activeButton: HTMLElement, inactiveButton: HTMLElement) {
    activeButton.classList.add('vis');
    activeButton.classList.remove('inv');
    inactiveButton.classList.remove('vis');
    inactiveButton.classList.add('inv');
}

if (componenteFavorito) {
    componenteFavorito.style.display = 'none';
}
