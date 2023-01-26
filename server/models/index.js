const sequelize = require('../utills/database');
const User = require('./user.model');
const UserProfile = require('./userProfile.model');


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

sequelize.sync({ force: true }).then(() => {
    console.log('table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});


User.belongsTo(UserProfile);

