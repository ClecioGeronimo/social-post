import { Request, Response, NextFunction } from 'express'
import { UsersService } from '../services'
import { Container, Service, Inject } from 'typedi'

@Service()
export class UsersController {
  @Inject()
  private service: UsersService

  constructor() {
    this.service = Container.get(UsersService)
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.service.getAll()
      return res.status(response ? 200 : 204).json(response)
    } catch (error) {
      return next(error)
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const origin = req.body
      const response = await this.service.create(origin)
      if (response) {
        return res.status(201).json(response)
      }
      return res.status(409).json('')
    } catch (error) {
      return next(error)
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const response = await this.service.getById(id)
      return res.status(response ? 200 : 204).json(response)
    } catch (error) {
      return next(error)
    }
  }

  async deleteOrigin(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const response = await this.service.delete(id)
      return res.status(response ? 200 : 204).json(response)
    } catch (error) {
      return next(error)
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const origin = req.body
      const { id } = req.params
      const response = await this.service.update(origin, id)
      if (response) {
        return res.status(201).json(response)
      }
      return res.status(409).json('')
    } catch (error) {
      return next(error)
    }
  }
}
