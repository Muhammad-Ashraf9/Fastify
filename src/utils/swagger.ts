export const  swaggerOptions = {
    openapi: {
      openapi: "3.0.0",
      info: {
        title: "User CRUD API",
        description: "User CRUD API using Fastify",
        version: "0.1.0",
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: "Development server",  
        },
      ],
      tags: [{ name: "user", description: "User CRUD end-points" }],

      externalDocs: {
        url: "https://github.com/Muhammad-Ashraf9/Fastify",
        description: "Find more info here",
      },
    },
  }