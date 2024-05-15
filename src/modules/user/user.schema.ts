import zod from "zod";
import { buildJsonSchemas } from "fastify-zod";

const baseUserSchema = {
  email: zod.string().email(),
  name: zod.string().min(2),
};

export const CreateUserInputSchema = zod.object({
  ...baseUserSchema,
  password: zod
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export const CreateUserResponseSchema = zod.object({
  id: zod.string(),
  ...baseUserSchema,
});

export const GetUserResponseSchema = zod.object({
  id: zod.string(),
  ...baseUserSchema,
});

export const GetUsersResponseSchema = zod.array(GetUserResponseSchema);

export type CreateUserInput = zod.infer<typeof CreateUserInputSchema>;

export const { schemas: userSchemas, $ref } = buildJsonSchemas({
  CreateUserInputSchema,
  CreateUserResponseSchema,
  GetUserResponseSchema,
  GetUsersResponseSchema,
});
