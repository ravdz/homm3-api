import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production'),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5433),
  DB_NAME: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().allow(null, ''),
  PORT: Joi.number().default(3000),
});
