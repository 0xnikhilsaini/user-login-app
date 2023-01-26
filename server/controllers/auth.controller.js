const jwt = require('jsonwebtoken');
const config = require('../config/config')
const authService = require('../services/auth');
const catchAsync = require('../utills/catchAsync')


const signup = catchAsync(async (req, res) => {
    const user = await authService.signup(req.body);
    res.status(201).send({ status: 201, message: "Signup successfully!", data: user });
})


const login = catchAsync(async (req, res) => {
    const user = await authService.login(req.body);
    const accessToken = jwt.sign({ userId: user.id }, config.jwt.secret);
    res.status(201).send({ status: 201, message: "Login successfully!", data: { ...user, accessToken: accessToken } });
});


module.exports = { login, signup };