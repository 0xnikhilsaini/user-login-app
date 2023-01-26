const express = require('express');
const validate = require('../middlewares/validate');
const checkJwt = require('../middlewares/checkJwt')
const userProfileValidation = require('../validations/userProfile.validation')
const userProfileController = require('../controllers/userProfile.controller');
const router = express.Router();

router
    .route('/')
    .put(checkJwt, validate(userProfileValidation.updateProfile), userProfileController.updateProfile)
    .delete(checkJwt, userProfileController.deleteProfile);

router
    .route("/user")
    .get(checkJwt,userProfileController.getUser)

module.exports = router;