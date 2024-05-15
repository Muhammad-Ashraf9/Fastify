import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserInput } from "./user.schema";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "./user.service";
import exp from "constants";

export async function registerUserHandler(
  request: FastifyRequest<{
    Body: CreateUserInput;
  }>,
  reply: FastifyReply
) {
  const user = request.body;
  try {
    const newUser = await createUser(user);
    reply.code(201).send(newUser);
  } catch (error) {
    console.error(error);
    reply.code(500).send(error);
  }
}

export async function getUserHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const users = await getUsers();
    reply.code(200).send(users);
  } catch (error) {
    console.error(error);
    reply.code(500).send(error);
  }
}

export async function getUserByIdHandler(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  try {
    const { id } = request.params;
    const user = await getUserById(id);
    reply.code(200).send(user);
  } catch (error) {
    console.error(error);
    reply.code(500).send(error);
  }
}

export async function updateUserHandler(
  request: FastifyRequest<{ Params: { id: string }; Body: CreateUserInput }>,
  reply: FastifyReply
) {
  try {
    const { id } = request.params;
    const user = request.body;
    const updatedUser = await updateUser(id, user);
    reply.code(201).send(updatedUser);
  } catch (error) {
    console.error(error);
    reply.code(500).send(error);
  }
}

export async function deleteUserHandler(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  try {
    const { id } = request.params;
    const user = await deleteUser(id);
    reply.code(201).send(user);
  } catch (error) {
    console.error(error);
    reply.code(500).send(error);
  }
}
