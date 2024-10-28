import Joi from 'joi';

export const PostValidateSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  author: Joi.string().required(),
  published: Joi.boolean().required()
});
