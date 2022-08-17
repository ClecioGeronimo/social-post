// eslint-disable-next-line max-classes-per-file
import * as Joi from 'joi'
import { SchemaValidator } from '../validations'

const originSchema = Joi.object({
  id: Joi.string(),
  name: Joi.string().required(),
  description: Joi.string(),
  type: Joi.string(),
  urlAddress: Joi.string(),
  user: Joi.string(),
  password: Joi.string(),
  ipFilter: Joi.string(),
}).meta({ className: 'Origin' })

export class GetOriginValidator {
  private static params = Joi.object({
    id: Joi.string().required(),
  })

  static get(): SchemaValidator {
    return {
      params: this.params,
    }
  }
}

export class CreateOriginValidator {
  private static body = originSchema

  static post(): SchemaValidator {
    return {
      body: this.body,
    }
  }
}
