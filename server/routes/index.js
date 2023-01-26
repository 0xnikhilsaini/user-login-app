const express = require('express');
const authRoute = require('./auth.route');
const userProfileRoute = require('./userProfile.route');

const router = express.Router();

const allRoutes = [
    {
        path: '/auth',
        route: authRoute
    },
    {
        path: '/userProfile',
        route: userProfileRoute
    }
]

allRoutes.map((route) => {
    router.use(route.path, route.route)
})

module.exports = router;