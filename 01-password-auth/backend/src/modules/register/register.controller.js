import asyncHandler from "../../utils/asynchHandler.js";
import ApiError from "../../utils/ApiError.js";
import ApiResponse from "../../utils/ApiResponse.js";
import registerService from "./register.service.js";

const registerController = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        throw new ApiError(400, "All fields are required");
    }

    const result = await registerService(username, email, password);

    return res
        .status(201)
        .json(new ApiResponse(201, "User registered successfully!", result));
});

export default registerController;