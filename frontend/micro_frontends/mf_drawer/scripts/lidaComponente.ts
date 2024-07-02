document.addEventListener('DOMContentLoaded', async () => {
    async function loadContent(url: string) {
        if (!url) return; 

        const response = await fetch(url);
        const content = await response.text();
        const componenteAtual = document.getElementById('componente_atual');

        if (componenteAtual) {
            componenteAtual.innerHTML += content;
        }
    }

    async function loadScript(caminhoScript: string) {
        if (!caminhoScript) return;

        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = caminhoScript;
            script.type = "module";
            script.onload = resolve;
            script.onerror = reject;

            document.body.appendChild(script);
        });
    }

  
    try {
        await loadContent("/micro_frontends/mf_videos/busca/index.html");
        await loadContent("/micro_frontends/mf_videos/favoritos/index.html");

        await new Promise(resolve => setTimeout(resolve, 200));

        await loadScript("/micro_frontends/mf_videos/busca/scripts/main.js");
        await loadScript("/micro_frontends/mf_videos/favoritos/scripts/mainFav.js");
        await loadScript("/micro_frontends/mf_drawer/scripts/lidaExbicao.js");

        console.log('Todos os conteúdos e scripts foram carregados.');
    } catch (error) {
        console.error('Ocorreu um erro durante o carregamento:', error);
    }
});
