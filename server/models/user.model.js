const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utills/database');
const bcrypt = require("bcrypt");


const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    hooks: {
        beforeCreate: (user) => {
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password, salt);
        }
    },
});

User.prototype.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };



module.exports = User;