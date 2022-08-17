import { PostsRepository } from '../repositories'
import { Container } from 'typedi'
import { PostDTO } from '../dtos'

export class PostsService {
  private repository: PostsRepository

  constructor() {
    this.repository = Container.get(PostsRepository)
  }

  async getAll(){
    try {
      const response = await this.repository.getAll()
      return response
    } catch (error) {
      throw error
    }
  }

  async create(dto: PostDTO) {
    try {
      delete dto['_originalData']
      const response = await this.repository.create({ data: dto })
      return response
    } catch (error) {
      throw error
    }
  }

  async getById(id: string) {
    try {
      const response = await this.repository.getById(id)
      return response
    } catch (error) {
      throw error
    }
  }

  async delete(id: string) {
    try {
      const response = await this.repository.delete(id)
      return response
    } catch (error) {
      throw error
    }
  }

  async update(dto: PostDTO, id: string) {
    try {
      delete dto['_originalData']
      const response = await this.repository.update(dto, id)
      return response
    } catch (error) {
      throw error
    }
  }
}
