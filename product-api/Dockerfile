# Dockerfile
FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias y del proyecto
COPY package*.json ./
RUN npm install
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 3000

# Iniciar la aplicación
CMD ["node", "app.js"]
