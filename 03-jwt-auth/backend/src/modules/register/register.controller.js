import asyncHandler from '../../utils/asyncHandler.js'
import ApiError from '../../utils/apiError.js'
import ApiResponse from '../../utils/apiResponse.js'
import registerService from '../register/register.service.js'

const registerController = asyncHandler(async(req, res) => {
    const {username, email , password} = req.body;

    if(!username || !email || !password){
        throw new ApiError(400, "All Fieldsa are required.")
    }

    const result = await registerService(username, email, password)

    res.status(201).json(new ApiResponse(201, "User registered succesfully!", result))
})

export default registerController;