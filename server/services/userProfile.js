const User = require('../models/user.model');
const UserProfile = require('../models/userProfile.model');
const httpStatus = require('http-status')
const ApiError = require('../utills/ApiError');


const updateProfile = async (userId, body) => {
    const userProfile = await UserProfile.findOne({
        where: {
            id: userId
        }
    });
    if (userProfile) {
        await UserProfile.update(
            {
                firstName: body.firstName,
                lastName: body.lastName,
            },
            { where: { id: userId } }
        );
    }
    else {
        await UserProfile.create({ ...body, id: userId });
    }
}


const deleteProfile = async (userId) => {
    await UserProfile.destroy({ where: { id: userId } })
}


const getUser = async (userId) => {
    const user = await User.findOne({
        where: {
            id: userId
        }
    });

    const userProfile = await UserProfile.findOne({
        where: {
            id: userId
        }
    });
    let resUserProfile = {};
    if (!userProfile) {
        resUserProfile.firstName = ""
        resUserProfile.lastName = ""
    }
    else {
        resUserProfile.firstName = userProfile.firstName
        resUserProfile.lastName = userProfile.lastName
    }
    return { email: user.email, id: user.id, userProfile: resUserProfile }

}

module.exports = { updateProfile, deleteProfile, getUser }