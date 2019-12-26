import * as Joi from 'joi';

export const createUserSchema: Joi.SchemaLike = {
    firstName: Joi.string().required().min(3).max(30),
    lastName: Joi.string().required().min(3).max(30),
    email: Joi.string().required().email(),
    isActive: Joi.boolean().required()
};

export const getSingleUserSchema: Joi.SchemaLike = {
    email: Joi.string().required().email()
}

export const updateUserSchema: Joi.SchemaLike = {
    firstName: Joi.string().optional().min(3).max(30),
    lastName: Joi.string().optional().min(3).max(30),
    email: Joi.string().optional().email(),
    isActive: Joi.boolean().optional()
}

export const deleteUserSchema: Joi.SchemaLike = {
    email: Joi.string().email().required()
}