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

### 4. Run migrations

Create or update the database schema:

```bash
npm run migration:run
```

If you already have tables from a previous `synchronize: true` setup, either use a fresh database or drop existing tables (and the `migrations` table if present), then run `migration:run` again.

### 5. (Optional) Seed data

Insert demo data (towns, heroes, units, etc.):

```bash
npm run seed
```

Seed is idempotent: it skips if data already exists.

### 6. Run the app

```bash
# development & watch mode
npm run start:dev

# production mode
npm run start:prod
```

---

## Migrations and seed

- **Migrations** define the schema (tables, columns, FKs). Always run `npm run migration:run` on a fresh DB or after pulling new migrations.
- **Seed** fills the DB with demo data; safe to run multiple times (no duplicates).

### How to create a new migration

1. Change entities in `src/` (add/remove columns, new tables, etc.).
2. Generate a migration from the diff:
   ```bash
   npm run migration:generate -- src/database/migrations/DescribeYourChange
   ```
   This creates a new file under `src/database/migrations/` with `up()` and `down()`.
3. Review the generated file, then run:
   ```bash
   npm run migration:run
   ```

### Useful commands

| Command | Description |
|--------|-------------|
| `npm run migration:run` | Run all pending migrations |
| `npm run migration:revert` | Revert the last migration |
| `npm run migration:generate -- src/database/migrations/Name` | Generate migration from entity changes |
| `npm run seed` | Insert demo data (skips if already seeded) |
