import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export class UsersRepository {
  async getAll() {
    try {
      const response = await prisma.users.findMany()
      return response
    } catch (error) {
      throw error
    }
  }

  async create(user) {
    try {
      const response = await prisma.users.create(user)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async getById(id: string) {
    try {
      const origins = await prisma.users.findUnique({
        where: {
          id,
        },
      })
      return origins
    } catch (error) {
      throw error
    }
  }

  async delete(id: string) {
    try {
      const response = await prisma.users.delete({
        where: {
          id,
        },
      })
      return response
    } catch (error) {
      throw error
    }
  }

  async update(user: any, id: string) {
    try {
      const data = user
      const response = await prisma.users.update({
        where: {
          id,
        },
        data,
      })
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
