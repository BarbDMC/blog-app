
import { User } from "@prisma/client";

export interface PrismaClientInterface {
  user: {
    findUnique: (params: { where: { email: string } }) => Promise<User | null>;
  };
}
