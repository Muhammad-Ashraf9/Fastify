import fastify from "fastify";

import "dotenv/config";

import userRoutes from "./modules/user.route";
import { userSchemas } from "./modules/user.schema";
import { swaggerOptions } from "./utils/swagger";

const port = process.env.PORT || 3000;

const server = fastify({ logger: true });

async function main() {
  await server.register(import("@fastify/swagger"), swaggerOptions);

  server.register(import("@fastify/swagger-ui"), {
    routePrefix: "/docs",
  });

  userSchemas.forEach((schema) => {
    server.addSchema(schema);
  });
  server.register(userRoutes, { prefix: "api/v1/users" });
  try {
    const address = await server.listen({ port: +port, host: "0.0.0.0" });
    console.log(`Server listening at ${address}`);
  } catch (error) {
    if (error) {
      console.error(error);
      process.exit(1);
    }
  }
}
main();
