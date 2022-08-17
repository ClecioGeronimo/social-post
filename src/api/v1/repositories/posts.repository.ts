import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export class PostsRepository {
  async getAll() {
    try {
      const response = await prisma.posts.findMany()
      return response
    } catch (error) {
      throw error
    }
  }

  async create(post) {
    try {
      const response = await prisma.posts.create(post)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async getById(id: string) {
    try {
      const origins = await prisma.posts.findUnique({
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
      const response = await prisma.posts.delete({
        where: {
          id,
        },
      })
      return response
    } catch (error) {
      throw error
    }
  }

  async update(post: any, id: string) {
    try {
      const data = post
      const response = await prisma.posts.update({
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
