import { HealhtChecker } from './health-check-routers'
import { UsersRouter } from './users'
import { Router } from 'express'

const v1 = Router()
v1.use(HealhtChecker)
v1.use(UsersRouter)

export { v1 }
