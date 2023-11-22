
import { join } from "path";
import { execSync } from "child_process";
import {PrismaClient} from "@prisma/client";

export function prismaTestContext() {
  const prismaBinary = join(__dirname, "..", "..", "node_modules", ".bin", "prisma");
  const prismaClient = new PrismaClient();
  return {
    async before() {
      process.env.DATABASE_URL = "postgresql://postgres:new_password@localhost:5432/BlogAppTest?schema=public";
      execSync(`${prismaBinary} migrate dev --name create_user_table`, { env: process.env });

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
