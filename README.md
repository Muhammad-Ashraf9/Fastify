# Fastify Application with CRUD Operations, Swagger Documentation, and Socket Server Integration

This project is a Fastify application that implements CRUD operations for a User entity, with Swagger documentation and integrated with a socket server for bidirectional communication. It uses Prisma as the ORM and TypeScript as the programming language.

## Prerequisites

- Node.js (Version:20)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Muhammad-Ashraf9/Fastify.git
```

Navigate to the project directory:

```bash
cd Fastify
```

Install dependencies:

```bash
npm install
```


---

### Prisma Setup

This project uses Prisma as the ORM. To set up the Prisma client and database, follow these steps:

- Create a new PostgreSQL database or use an existing one.
- Update the DATABASE_URL environment variable in the .env file with your database connection URL.
- Run the following command to generate the Prisma client:

```bash
npx prisma generate
```

If you need to apply pending database migrations, run:

```bash
npx prisma migrate dev
```

---

### Running the Application

Start the Fastify server:

```bash
npm run dev
```

The server will start running on http://localhost:3000.

Access the Swagger documentation:

Visit [Docs](http://localhost:3000/docs) to access the Swagger documentation for the Fastify endpoints.

Join the Postman workspace by following this invite link: [postman](https://app.getpostman.com/join-team?invite_code=a6695057ac76a9235f52c0e3826bdeb1&target_code=ee1e405e709019015be001e221a9e41f)
