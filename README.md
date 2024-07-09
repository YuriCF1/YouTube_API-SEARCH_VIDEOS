## Note: I deleted the API's, while i was cleaning my Google Cloud account. I'll make another one later. If you have your own, feel free to add it and test it by yourself :)

### Instruções para uso
Baixe os arquivos em forma de zip. Abra o seu programa Docker, e em seguida abra o terminal na pasta raiz do projeto e digite:
 - docker-compose up --build -d --remove-orphans (para remover imagens desnecessárias)

 Dentro do Docker, na aba Container, voce poderá ver o mais recente arquivo gerado. Nele, as imagens estarão rodando. 
 Tanto as do Backend, quanto do Frontend. Bem como o resultado do teste do backend.

-> Após a dockerização
LINK PARA ACESSO: http://localhost:3000/, obs: Após digitar sua busca, esperar cerca de 2seg para o resultado aperecer. Coloquei esse intervalo de tempo entre input e resposta, para optimizar a busca, economizando recursos.

### Observações 
- Se o usuário clicar sem querer para remover o vídeo dos favoritos, ele poderá desfazer o erro pois optei por atualizar os favoritos apenas quando o usuário troca de página, justamente para evitar acidentes.
- Gostaria muito de ter tido tempo para elaborar um backend robusto com integração MySQL, mas atualizações do Docker e alguns imprevistos acabaram me atrasando... Por isso, no backend tem mais pastas do que deveria. Pois é o rascunho do banco de dados que planejei.
- Sei que os testes foram exigidos no frontend e no backend. Mas por conta de imprevistos pessoais, fiz o teste do backend, que ao meu ver, é o mais importante.
- No mais, grato pela oportunidade. Aguardo ansiosamente o feedback, seja ele qual for. Tenha um ótimo trabalho! 

### Acompanhe o passo a passo

- [ X ] Criando chave da API do YouTube e estudando documentação
- [ X ] Criando pastas no backend, visando boas práticas de manutenção
  - [ X ] Arquivo principal: app.ts
  - [ X ] Pasta Utils
  - [ X ] Pasta Service
  - [ X ] Pasta Contraollers
  - [ X ] Pasta Routes
  - [ X ] Pasta Interfaces
- [ X ] - BACKEND INICIAL VALIDADO NO POSTMAN

- [ X ] - Micro Frontends Elaborado
- [ X ] - Função para adicionar/remover favoritos
- [ X ] - Função para mostrar os favoritos
- [ X ] - Docker compose elaborado

- [ X ] - Teste unitário da função principal de buscar vídeos no backend
