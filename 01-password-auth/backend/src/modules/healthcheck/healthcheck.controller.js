import asyncHandler from "../../utils/asynchHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";

const healthCheckController = asyncHandler((req, res) => {
    return res.status(200).json(
        new ApiResponse(200, "Server is healthy", {
            status: "ok",
            timestamp: new Date().toISOString()
        })
    );
});

export default healthCheckController;