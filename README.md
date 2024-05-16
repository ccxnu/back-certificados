# Certificados Backend

Este es el backend de la aplicación Certificados App, que proporciona una API
para gestionar usuarios y generar certificados en formato PDF.

### API

De manera local es servidor corre en:

    http://localhost:3000

La API proporciona las siguientes rutas:

    GET /api/users - Obtiene todos los usuarios.
    GET /api/user/:userId - Obtiene un usuario específico por su ID.
    GET /api/user/:userId/qr - Genera y devuelve el código QR para un usuario específico.
    POST /api/user/pdf - Genera y devuelve el certificado PDF para un usuario específico.

### Tecnologías Utilizadas

- Express: Framework de Node.js para construir aplicaciones web y APIs.
- MySQL: Sistema de gestión de bases de datos relacional.
- Puppeteer: Biblioteca de Node.js que permite generar archivos PDF a partir de HTML.

Puedes usar herramientas como Postman o cURL para realizar solicitudes a estas rutas y gestionar los usuarios y certificados.
