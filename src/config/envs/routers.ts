import { Router } from 'express'
import * as swaggerUi from 'swagger-ui-express'
import { Express } from 'express'
import { v1 } from '../../api/v1/routes'
import { NextFunction, Request, Response } from 'express'
import { ErrorHandler } from './exceptions'
import * as YAMLJS from 'yamljs'

export class AppRouters {
  static load(app: Express) {
    try {
      const router = Router()
      router.use('/v1', v1)

      const swaggerDocument = YAMLJS.load('./swagger.yml')
      router.use('^/$', (req, res) => {
        return res.redirect('/api-docs')
      })
      router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
      app.use(router)
    } catch (error) {
      console.error(error)
    }
  }

  static handleError(app: Express) {
    app.use(
      (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
        let { statusCode, message, errors } = err

        if (err.response?.data) {
          errors = err.response.data
        }

        return res.status(statusCode || 500).json({
          status: 'error',
          statusCode,
          message,
          errors,
        })
      }
    )
  }
}

export { v1 }
