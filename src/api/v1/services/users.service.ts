import { UsersRepository } from '../repositories'
import { Container } from 'typedi'
import { UserDTO } from '../dtos'

export class UsersService {
  private repository: UsersRepository

  constructor() {
    this.repository = Container.get(UsersRepository)
  }

  async getAll(): Promise<UserDTO[]> {
    try {
      const response = await this.repository.getAll()
      return response
    } catch (error) {
      throw error
    }
  }

  async create(dto: UserDTO) {
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

  async update(dto: UserDTO, id: string) {
    try {
      delete dto['_originalData']
      const response = await this.repository.update(dto, id)
      return response
    } catch (error) {
      throw error
    }
  }
}
