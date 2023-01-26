const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    'userloginapp',
    'postgres',
    'password',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);

module.exports = sequelize;