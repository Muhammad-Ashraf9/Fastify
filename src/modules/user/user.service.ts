import { hashPassword } from "../../utils/hash";
import prisma from "../../utils/prisma";
import { CreateUserInput } from "./user.schema";

export async function createUser(input: CreateUserInput) {
  const { password, ...rest } = input;
  const hashedPassword = await hashPassword(password);

  const user = prisma.user.create({
    data: {
      ...rest,
      password: hashedPassword,
    },
  });

  return user;
}

export async function getUsers() {
  const users = prisma.user.findMany();
  return users;
}

export async function getUserById(id: string) {
  const user = prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
}

export async function updateUser(id: string, input: CreateUserInput) {
  const { password, ...rest } = input;
  const hashedPassword = await hashPassword(password);

  const user = prisma.user.update({
    where: {
      id,
    },
    data: {
      ...rest,
      password: hashedPassword,
    },
  });

  return user;
}

export async function deleteUser(id: string) {
  const user = prisma.user.delete({
    where: {
      id,
    },
  });

  return user;
}
