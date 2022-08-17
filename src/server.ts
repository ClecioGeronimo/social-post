import { Express } from 'express'
import { AppEnvs } from './config/envs'

export class Server {
  static async init(app: Express) {
    app.listen(AppEnvs.server.port, () =>
      console.info(
        `server started on port ${AppEnvs.server.port} Environment: ${AppEnvs.environment} 🚀`
      )
    )
  }
}
