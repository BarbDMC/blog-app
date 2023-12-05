
import { join } from "path";
import { execSync } from "child_process";
import {PrismaClient} from "@prisma/client";

export function prismaTestContext() {
  const prismaBinary = join(__dirname, "..", "..", "node_modules", ".bin", "prisma");
  const prismaClient = new PrismaClient();
  return {
    async before() {
      execSync(`${prismaBinary} migrate dev --name create_user_table`, { env: {DATABASE_URL: process.env.TESTING_DATABASE_URL} });

      return prismaClient;
    },
    async after() {
      if (prismaClient) {
        await prismaClient.user.deleteMany({});
        await prismaClient.$disconnect();
      }
    },
  };
}
