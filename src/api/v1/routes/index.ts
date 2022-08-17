import { HealhtChecker } from './health-check-routers'
import { UsersRouter } from './users'
import { PostRouter } from './posts'
import { Router } from 'express'

const v1 = Router()
v1.use(HealhtChecker)
v1.use(UsersRouter)
v1.use(PostRouter)

export { v1 }
