# Users Management API

API REST de gestion d'utilisateurs et de films, développée avec Node.js, Express et Prisma.

## Installation

```bash
npm install
npm run dev
```

## Variables d'environnement

Créer un fichier `.env` à la racine :
DATABASE_URL="postgresql://..."
JWT_SECRET="votre_secret"

## Technologies

- Node.js
- Express
- Prisma
- PostgreSQL
- JWT
- Bcrypt

---

## Routes Auth

### POST /api/auth/register
```json
{
    "email": "test@test.com",
    "name": "Test User",
    "password": "123456"
}
```

### POST /api/auth/login
```json
{
    "email": "test@test.com",
    "password": "123456"
}
```

### GET /api/auth/me
Header: Authorization: Bearer <token>

---

## Routes Movies

### POST /api/movies
```json
{
    "title": "Avatar",
    "description": "Un film de James Cameron",
    "releaseYear": 2009,
    "genre": "Science-Fiction",
    "director": "James Cameron",
    "rating": 7.8
}
```

### GET /api/movies
Header: Authorization: Bearer <token>

### GET /api/movies/:id
Header: Authorization: Bearer <token>

### PUT /api/movies/:id
```json
{
    "title": "Avatar 2"
}
```

### DELETE /api/movies/:id
Header: Authorization: Bearer <token>

### GET /api/movies/search?title=Avatar&genre=Science-Fiction
Header: Authorization: Bearer <token>

---

## Routes Users

### GET /api/users?page=1&limit=10
Header: Authorization: Bearer <token>

### GET /api/users/:id
Header: Authorization: Bearer <token>

### POST /api/users
```json
{
    "email": "user@test.com",
    "name": "User",
    "password": "123456"
}
```

### PUT /api/users/:id
```json
{
    "name": "New Name"
}
```

### DELETE /api/users/:id
Header: Authorization: Bearer <token>