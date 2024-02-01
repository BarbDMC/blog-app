
import { User } from "@prisma/client";
import { UserInterface } from "./userInterface";

export interface PrismaClientInterface {
  user: {
    findUnique: (params: { where: { email: string } }) => Promise<User | null>;
    create: (params: { data: UserInterface }) => Promise<User>;
  };
}
