const userProfileService = require('../services/userProfile');
const catchAsync = require('../utills/catchAsync')


const updateProfile = catchAsync(async (req, res) => {
    await userProfileService.updateProfile(req.userId, req.body);
    res.status(201).send({ status: 201, message: "Profile updated successfully!" });
})


const deleteProfile = catchAsync(async (req, res) => {
    await userProfileService.deleteProfile(req.userId);
    res.status(204).send();
});


const getUser = catchAsync(async (req, res) => {
    const userData = await userProfileService.getUser(req.userId);
    res.status(200).send({status:200,message:"user get successfully!",data:userData});
});

module.exports = { updateProfile, deleteProfile, getUser };