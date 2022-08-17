import * as passport from 'passport'
import { HeaderAPIKeyStrategy } from 'passport-headerapikey'
import {
  ExtractJwt,
  Strategy as JWTStrategy,
  StrategyOptions,
} from 'passport-jwt'
import { AppEnvs } from './app-envs'
import { ErrorHandler } from './exceptions'

export class PassportLoader {
  static _OPTS: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || 'A})D.26Gcv8!tpHg',
  }

  static load() {
    passport.use(
      new JWTStrategy(PassportLoader._OPTS, function (jwt, done) {
        done(null, {
          fullname: jwt.fullname,
          email: jwt.email,
          phone: jwt.phone,
        })
      })
    )
    passport.use(
      new HeaderAPIKeyStrategy(
        { header: 'Authorization', prefix: 'x-api-key ' },
        false,
        function (apikey, done) {
          if (process.env.API_ACCESS_KEY == apikey) {
            return done(null, {})
          } else {
            return done(new ErrorHandler('unauthorized', 401))
          }
        }
      )
    )
  }
}
