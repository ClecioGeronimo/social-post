import { Router, Request, Response, NextFunction } from 'express'
import Container from 'typedi'
import { UsersController } from '../controllers'
import { RouteValidator } from './validations'
import { CreateOriginValidator, GetOriginValidator } from './schemas'

const controller = Container.get(UsersController)
const router = Router()

router
  .route('/users$')
  .get((req: Request, res: Response, next: NextFunction) => {
    controller.getAll(req, res, next)
  })
  .post(
    (req: Request, res: Response, next: NextFunction) =>
      controller.create(req, res, next)
  )
router
  .route('/users/:id')
  .get(
    (req: Request, res: Response, next: NextFunction) => {
      controller.getById(req, res, next)
    }
  )
  .put((req: Request, res: Response, next: NextFunction) => {
    controller.update(req, res, next)
  })
  .delete((req: Request, res: Response, next: NextFunction) => {
    controller.deleteOrigin(req, res, next)
  })

export { router as UsersRouter }
