
import { User } from "@prisma/client";
import { userInterface } from "./userInterface";

export interface PrismaClientInterface {
  user: {
    findUnique: (params: { where: { email: string } }) => Promise<User | null>;
    create: (params: { data: userInterface }) => Promise<User>;
  };
}
