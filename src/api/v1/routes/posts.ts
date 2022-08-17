import { Router, Request, Response, NextFunction } from 'express'
import Container from 'typedi'
import { PostsController } from '../controllers'

const controller = Container.get(PostsController)
const router = Router()

router
  .route('/posts$')
  .get((req: Request, res: Response, next: NextFunction) => {
    controller.getAll(req, res, next)
  })
  .post(
    (req: Request, res: Response, next: NextFunction) =>
      controller.create(req, res, next)
  )
router
  .route('/posts/:id')
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

export { router as PostRouter }
