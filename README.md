# Heroes3 API

A RESTful API for Heroes of Might & Magic 3

## Tech Stack

- NestJS
- TypeScript
- PostgreSQL

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Environment

Copy the example env and adjust if needed:

```bash
cp .env.example .env.development
```

### 3. Start PostgreSQL (Docker)

```bash
docker compose up -d
```

### 4. Run the app

```bash
# development & watch mode
npm run start:dev

# production mode
npm run start:prod
```

In development, TypeORM `synchronize` creates/updates tables automatically.
