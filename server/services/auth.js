const User = require('../models/user.model');
const UserProfile = require('../models/userProfile.model');
const httpStatus = require('http-status')
const ApiError = require('../utills/ApiError');


const signup = async (body) => {
    const user = await User.findOne({
        where: {
            email: body.email
        }
    });
    if (user) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Email Already Exists!');
    }


    const newUser = await User.create(body)
    const userProfile = await UserProfile.create({ firstName: "dummy", lastName: "dummyName", id: newUser.id });
    return { email: newUser.email, userProfile: { firstName: userProfile.firstName, lastName: userProfile.lastName, id: newUser.id } }
}


const login = async (body) => {
    const user = await User.findOne({
        where: {
            email: body.email
        }
    });

    if (!user) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Wrong email or password!');
    }

    let isValidPassword = await user.validPassword(body.password)
    if (!isValidPassword) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Wrong email or password!');
    }
    const userProfile = await UserProfile.findOne({
        where: {
            id: user.id
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




module.exports = { signup, login }