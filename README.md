# Proyecto API de Gestión de Productos

Este proyecto es un microservicio para la gestión de productos utilizando **Node.js**, **PostgreSQL** y **Docker**. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los productos, que se almacenan en una base de datos PostgreSQL. Este microservicio está dockerizado para facilitar su ejecución y despliegue.

## Tecnologías Utilizadas
- **Node.js**: Para el desarrollo del backend de la API.
- **PostgreSQL**: Para almacenar la información de los productos.
- **Docker**: Para la creación y gestión de contenedores.
- **pgAdmin**: Para la administración de la base de datos PostgreSQL.

## Requisitos Previos
- Tener **Docker** instalado en tu máquina.
- Tener **Node.js** instalado (si deseas hacer modificaciones al backend).

## Instrucciones de Ejecución

1. **Clonar el Repositorio**
   - Clona este repositorio en tu máquina local:

     ```bash
     git clone https://github.com/tu_usuario/tu_repositorio.git
     cd tu_repositorio
     ```

2. **Configurar Docker**
   - Este proyecto incluye un archivo `docker-compose.yml` que se encargará de levantar tanto el contenedor de PostgreSQL como el contenedor de la API de Node.js.
   - Para construir y levantar los contenedores, ejecuta el siguiente comando:

     ```bash
     docker-compose up --build
     ```

   - Esto construirá las imágenes de Docker y ejecutará los contenedores necesarios.

3. **Acceder a la API**
   - La API estará disponible en `http://localhost:3000` y la base de datos de PostgreSQL en `localhost:5432`.
   - Puedes usar herramientas como **Postman** o **cURL** para interactuar con la API.

---

## Endpoints de la API

A continuación, se describen los endpoints disponibles en la API para interactuar con los productos.

1. **Crear un Producto** (`POST /products`)
   - **Descripción**: Este endpoint permite crear un nuevo producto en la base de datos.
   - **Datos requeridos**: `name`, `price`, `stock`, `supplier`
   - **Ejemplo de solicitud (cuerpo JSON)**:
  
     ```json
     {
       "name": "Producto A",
       "price": 100.00,
       "stock": 50,
       "supplier": "Proveedor A"
     }
     ```

   - **Ejemplo de Respuesta**:

     ```json
     {
       "id": 1,
       "name": "Producto A",
       "price": 100.00,
       "stock": 50,
       "supplier": "Proveedor A"
     }
     ```

2. **Obtener todos los productos** (`GET /products`)
   - **Descripción**: Este endpoint devuelve todos los productos almacenados en la base de datos.
   - **Ejemplo de respuesta**:

     ```json
     [
       {
         "id": 1,
         "name": "Producto A",
         "price": 100.00,
         "stock": 50,
         "supplier": "Proveedor A"
       },
       {
         "id": 2,
         "name": "Producto B",
         "price": 200.00,
         "stock": 30,
         "supplier": "Proveedor B"
       }
     ]
     ```

3. **Actualizar un Producto** (`PUT /products/:id`)
   - **Descripción**: Este endpoint permite actualizar los detalles de un producto por su `id`.
   - **Datos requeridos**: `name`, `price`, `stock`, `supplier` (puedes actualizar cualquier campo).
   - **Ejemplo de solicitud (cuerpo JSON)**:
  
     ```json
     {
       "name": "Producto A Actualizado",
       "price": 120.00,
       "stock": 60,
       "supplier": "Proveedor A Actualizado"
     }
     ```

   - **Ejemplo de Respuesta**:

     ```json
     {
       "id": 1,
       "name": "Producto A Actualizado",
       "price": 120.00,
       "stock": 60,
       "supplier": "Proveedor A Actualizado"
     }
     ```

4. **Eliminar un Producto** (`DELETE /products/:id`)
   - **Descripción**: Este endpoint elimina un producto por su `id`.
   - **Respuesta**: Si la eliminación es exitosa, se devolverá un código de estado 204 sin cuerpo.

---

## Ejemplos de Pruebas con Postman

A continuación, se muestran ejemplos de cómo probar los endpoints usando **Postman**.

1. **Crear un Producto (POST)**
   - **Método**: `POST`
   - **URL**: `http://localhost:3000/products`
   - **Cuerpo (Body)**:

     ```json
     {
       "name": "Producto A",
       "price": 100.00,
       "stock": 50,
       "supplier": "Proveedor A"
     }
     ```

   - **Respuesta**:

     ```json
     {
       "id": 1,
       "name": "Producto A",
       "price": 100.00,
       "stock": 50,
       "supplier": "Proveedor A"
     }
     ```

2. **Obtener Todos los Productos (GET)**
   - **Método**: `GET`
   - **URL**: `http://localhost:3000/products`
   - **Ejemplo de Respuesta**:

     ```json
     [
       {
         "id": 1,
         "name": "Producto A",
         "price": 100.00,
         "stock": 50,
         "supplier": "Proveedor A"
       },
       {
         "id": 2,
         "name": "Producto B",
         "price": 200.00,
         "stock": 30,
         "supplier": "Proveedor B"
       }
     ]
     ```

---

## Notas Adicionales
- La base de datos se encuentra persistente gracias a la configuración del volumen de Docker, lo que asegura que los datos no se pierdan al detener o reiniciar los contenedores.
- Si necesitas acceder a la base de datos directamente, puedes hacerlo usando herramientas como **pgAdmin** en `http://localhost:5050` o conectándote directamente a PostgreSQL en `localhost:5432` con el cliente que prefieras.

---

## Conclusiones

Este proyecto implementa una API completa para la gestión de productos utilizando las tecnologías adecuadas. La persistencia de los datos está garantizada con PostgreSQL y Docker. La estructura de la API está diseñada para ser extensible y escalable, permitiendo futuras mejoras y modificaciones.


