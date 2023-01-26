const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../.env') });

const envVarsSchema = Joi.object()
    .keys({
        NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
        PORT: Joi.number().default(3000),
        POSTGRES_HOST: Joi.string().required().description('Postgres host is required'),
        POSTGRES_DB: Joi.string().required().description('Postgres db is required'),
        POSTGRES_USER: Joi.string().required().description('Postgres user is required'),
        POSTGRES_PASSWORD: Joi.string().required().description('Postgres password is required'),
        JWT_SECRET: Joi.string().required().description('JWT secret key'),
    })
    .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    postgres: {
        url: envVars.MONGODB_URL + (envVars.NODE_ENV === 'test' ? '-test' : ''),
        options: {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    jwt: {
        secret: envVars.JWT_SECRET,
    },
    postgres: {
        host: envVars.POSTGRES_HOST,
        db: envVars.POSTGRES_DB,
        user: envVars.POSTGRES_USER,
        password: envVars.POSTGRES_PASSWORD
    }
};

