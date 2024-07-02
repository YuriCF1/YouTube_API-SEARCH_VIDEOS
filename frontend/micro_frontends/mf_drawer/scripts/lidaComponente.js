"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    function loadContent(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!url)
                return;
            const response = yield fetch(url);
            const content = yield response.text();
            const componenteAtual = document.getElementById('componente_atual');
            if (componenteAtual) {
                componenteAtual.innerHTML += content;
            }
        });
    }
    function loadScript(caminhoScript) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!caminhoScript)
                return;
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = caminhoScript;
                script.type = "module";
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        });
    }
    try {
        yield loadContent("/micro_frontends/mf_videos/busca/index.html");
        yield loadContent("/micro_frontends/mf_videos/favoritos/index.html");
        yield new Promise(resolve => setTimeout(resolve, 200));
        yield loadScript("/micro_frontends/mf_videos/busca/scripts/main.js");
        yield loadScript("/micro_frontends/mf_videos/favoritos/scripts/mainFav.js");
        yield loadScript("/micro_frontends/mf_drawer/scripts/lidaExbicao.js");
    }
    catch (error) {
        console.error('Ocorreu um erro durante o carregamento de algum script:', error);
    }
}));
