// eslint-disable-next-line max-classes-per-file
import * as Joi from 'joi'
import { SchemaValidator } from '../validations'

const destinationSchema = Joi.object({
  id: Joi.string(),
  name: Joi.string().required(),
  description: Joi.string(),
  type: Joi.string(),
  urlAddress: Joi.string(),
  user: Joi.string(),
  password: Joi.string(),
}).meta({ className: 'Destination' })

export class GetDestinationValidator {
  private static params = Joi.object({
    id: Joi.string().required(),
  })

  static get(): SchemaValidator {
    return {
      params: this.params,
    }
  }
}

export class CreateDestinationValidator {
  private static body = destinationSchema

  static post(): SchemaValidator {
    return {
      body: this.body,
    }
  }
}
