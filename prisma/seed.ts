
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin',
      surname: 'Admin',
      password: '$2a$10$.CFmwJGSv/p6LE43e6vzJueXTHDKgHqlNxw.tl7dzhopK41xj/dRe',
      birthday: new Date('1990-01-01')
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
