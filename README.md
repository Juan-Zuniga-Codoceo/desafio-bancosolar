# Banco Solar C.A

Banco Solar es una aplicación web que permite gestionar usuarios y realizar transferencias entre ellos. La aplicación está construida con Node.js, Express y PostgreSQL, y utiliza Bootstrap para el diseño de la interfaz de usuario.

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [API Endpoints](#api-endpoints)
- [Tecnologías](#tecnologías)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Requisitos

- Node.js
- PostgreSQL

## Instalación

1. Clona el repositorio:
    ```sh
    git clone <URL del repositorio>
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd banco-solar
    ```

3. Instala las dependencias:
    ```sh
    npm install
    ```

4. Configura la base de datos:
    - Crea una base de datos en PostgreSQL.
    - Copia el archivo `.env.example` y renómbralo a `.env`. Actualiza los valores según tu configuración de PostgreSQL.

5. Inicia el servidor:
    ```sh
    npm start
    ```

## Uso

1. Abre tu navegador web y ve a `http://localhost:3000`.
2. Utiliza la interfaz para agregar usuarios y realizar transferencias.

## Estructura del Proyecto

banco-solar/
│
├── node_modules/
├── views/
│ ├── index.html
├── config/
│ └── db.js
├── controllers/
│ ├── usersController.js
│ └── transfersController.js
├── routes/
│ ├── usersRoutes.js
│ └── transfersRoutes.js
├── index.js
├── models/
│ ├── userQueries.js
│ └── transferQueries.js
├── .env.example
├── package.json
└── package-lock.json


## API Endpoints

### Usuarios

- **GET `/api/usuarios`**
    - Descripción: Obtiene todos los usuarios.
    - Respuesta: Array de usuarios.

- **POST `/api/usuarios`**
    - Descripción: Agrega un nuevo usuario.
    - Parámetros:
        - `nombre` (string): Nombre del usuario.
        - `balance` (number): Balance inicial del usuario.
    - Respuesta: Usuario creado.

- **PUT `/api/usuarios`**
    - Descripción: Modifica un usuario existente.
    - Parámetros:
        - `id` (number): ID del usuario.
        - `nombre` (string): Nombre del usuario.
        - `balance` (number): Balance del usuario.
    - Respuesta: Usuario modificado.

- **DELETE `/api/usuarios`**
    - Descripción: Elimina un usuario.
    - Parámetros:
        - `id` (number): ID del usuario.
    - Respuesta: Usuario eliminado.

### Transferencias

- **GET `/api/transferencias`**
    - Descripción: Obtiene todas las transferencias.
    - Respuesta: Array de transferencias.

- **POST `/api/transferencias`**
    - Descripción: Realiza una nueva transferencia.
    - Parámetros:
        - `emisor` (number): ID del usuario emisor.
        - `receptor` (number): ID del usuario receptor.
        - `monto` (number): Monto a transferir.
    - Respuesta: Transferencia realizada.

## Tecnologías

- Node.js
- Express
- PostgreSQL
- Bootstrap
- jQuery
- Moment.js
- Axios

## Contribuir

Las contribuciones son bienvenidas. Por favor, sigue los siguientes pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

