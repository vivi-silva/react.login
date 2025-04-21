# Etapa 1: Build da aplicação
FROM node:18 AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Faz o build da aplicação
RUN npm run build

# Etapa 2: Servir com nginx
FROM nginx:alpine

# Copia os arquivos estáticos para o nginx
COPY --from=build /app/build /usr/share/nginx/html

# Remove o arquivo default do nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia um novo arquivo de configuração
COPY nginx.conf /etc/nginx/conf.d

# Expõe a porta
EXPOSE 80

# Comando padrão
CMD ["nginx", "-g", "daemon off;"]
