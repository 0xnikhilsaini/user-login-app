const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utills/database');

const UserProfile = sequelize.define("usersProfile", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
});


module.exports = UserProfile;