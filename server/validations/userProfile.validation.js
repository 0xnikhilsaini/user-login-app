const Joi = require('joi');

const updateProfile = {
    body: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
    }),
};


module.exports = { updateProfile }