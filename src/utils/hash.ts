import bcrypt from "bcrypt";
import exp from "constants";
export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = bcrypt.hash(password, salt);
  return hashPassword;
}

export async function comparePassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}
