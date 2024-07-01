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
const videoBotao = document.getElementById('videos');
document.addEventListener('DOMContentLoaded', () => {
    loadContent("/micro_frontends/mf_videos/busca/index.html", "/micro_frontends/mf_videos/busca/scripts/main.js");
});
function loadContent(url, scriptPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const content = yield response.text();
        document.getElementById('componente_atual').innerHTML = content;
        if (scriptPath) {
            const script = document.createElement("script");
            script.src = scriptPath;
            script.type = "module";
            document.body.appendChild(script);
        }
    });
}
