import Fastify from "fastify";
import { WebSocketServer } from "ws";

import "dotenv/config";

import userRoutes from "./modules/user/user.route";
import { userSchemas } from "./modules/user/user.schema";
import { swaggerOptions } from "./utils/swagger";

const port = process.env.PORT || 3000;

const fastify = Fastify({ logger: true });

const wss = new WebSocketServer({ server: fastify.server });
wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received: %s", data);
    ws.send(data + " from server");
  });
  ws.emit("message", "something");

  ws.send("something");
});

async function main() {
  await fastify.register(import("@fastify/swagger"), swaggerOptions);

  fastify.register(import("@fastify/swagger-ui"), {
    routePrefix: "/docs",
  });

  fastify.get("/ping", async (request, reply) => {
    return { hello: "world" };
  });

  userSchemas.forEach((schema) => {
    fastify.addSchema(schema);
  });
  fastify.register(userRoutes, { prefix: "api/v1/users" });
  try {
    const address = await fastify.listen({ port: +port, host: "0.0.0.0" });
    console.log(`Server listening at ${address}`);
  } catch (error) {
    if (error) {
      console.error(error);
      process.exit(1);
    }
  }
}
main();
