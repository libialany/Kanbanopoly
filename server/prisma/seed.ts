import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const user = await prisma.user.create({
    data: {
      username: 'U1',
    },
  });
  const task = await prisma.task.create({
    data: {
      name: "Brief explanation of the app's purpose",
      user_id: user.id,
      status: 'Pending',
    },
  });
  console.log({ user, task });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
