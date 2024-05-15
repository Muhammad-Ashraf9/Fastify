import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {
  deleteUserHandler,
  getUserByIdHandler,
  getUserHandler,
  registerUserHandler,
  updateUserHandler,
} from "./user.controller";
import { $ref } from "./user.schema";

export default async function (fastify: FastifyInstance, opts: any) {
  fastify.get(
    "/",
    {
      schema: {
        response: {
          200: $ref("GetUsersResponseSchema"),
        },
      },
    },
    getUserHandler
  );

  fastify.get(
    "/:id",
    {
      schema: {
        params: {
          type: "object",
          properties: {
            id: { type: "string" },
          },
        },
        response: {
          200: $ref("GetUserResponseSchema"),
        },
      },
    },
    getUserByIdHandler
  );

  fastify.post(
    "/",
    {
      schema: {
        body: $ref("CreateUserInputSchema"),
        response: {
          201: $ref("CreateUserResponseSchema"),
        },
      },
    },
    registerUserHandler
  );

  fastify.put(
    "/:id",
    {
      schema: {
        body: $ref("CreateUserInputSchema"),
        response: {
          201: $ref("CreateUserResponseSchema"),
        },
      },
    },
    updateUserHandler
  );

  fastify.delete(
    "/:id",
    {
      schema: {
        response: {
          204: $ref("CreateUserResponseSchema"),
        },
      },
    },
    deleteUserHandler
  );
}
