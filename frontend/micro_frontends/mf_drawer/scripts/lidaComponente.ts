const videoBotao = document.getElementById('videos')

document.addEventListener('DOMContentLoaded', () => {
    loadContent("/micro_frontends/mf_videos/busca/index.html", "/micro_frontends/mf_videos/busca/scripts/main.js");
})

async function loadContent(url: string, scriptPath?: string) {
    const response = await fetch(url);
    const content = await response.text();
    document.getElementById('componente_atual')!.innerHTML = content;

    if (scriptPath) {
        const script = document.createElement("script");
        script.src = scriptPath;
        script.type = "module";
        document.body.appendChild(script);

    }

}