import { PrismaClient } from '@prisma/client'

import { createRandomUsers, logRandomUsers } from './utils'

const prisma = new PrismaClient()

const main = async (): Promise<void> => {
  await prisma.ingredient.deleteMany({})
  await prisma.recipe.deleteMany({})
  await prisma.user.deleteMany({})

  const users = await Promise.all(
    createRandomUsers(5, 10).map(async (data) => {
      return prisma.user.create({ data })
    })
  )

  logRandomUsers(users)
}

main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e)
    process.exit(1)
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect()
  })
