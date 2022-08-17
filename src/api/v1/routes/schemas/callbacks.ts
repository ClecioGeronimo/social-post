import * as Joi from 'joi';
import { SchemaValidator } from '../validations';

export class CallbackValidator {
  private static body = Joi.object();
  static post(): SchemaValidator {
    return {
      body: this.body,
    };
  }
}

export class CallbackStatusValidator {
  private static body = Joi.object();
  static post(): SchemaValidator {
    return {
      body: this.body,
    };
  }
}
