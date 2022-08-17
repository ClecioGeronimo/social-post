import 'reflect-metadata'
import { Express } from 'express'
import App from './app'
import { Server } from './server'
require('dotenv').config()

class Bootstrap {
  static async main() {
    const app: Express = App.build()
    Server.init(app)
  }
}

Bootstrap.main()
