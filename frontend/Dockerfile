# Use uma imagem base com Node.js
FROM node:20.5.0

# Diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Instale o TypeScript globalmente
RUN npm install -g typescript

# Copie o restante dos arquivos do projeto
COPY . .

# Build do projeto (opcional, depende do uso do TypeScript)
RUN npm run build

# Porta em que o aplicativo será executado dentro do contêiner
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD [ "npm", "start" ]
