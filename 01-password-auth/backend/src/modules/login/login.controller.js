import asyncHandler from "../../utils/asynchHandler.js";
import ApiError from "../../utils/ApiError.js";
import ApiResponse from "../../utils/ApiResponse.js";
import loginService from "./login.service.js";

const loginController = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "All fields are required");
    }

    const result = await loginService(email, password);

    return res.status(200).json(
        new ApiResponse(200, "Login successful!", result)
    );
});

export default loginController;