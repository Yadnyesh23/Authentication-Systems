import ApiError from "../../utils/ApiError.js";
import userModel from "./login.model.js";
import bcrypt from "bcrypt";

const loginService = async (email, password) => {

    
    const user = await userModel.getUserByEmail(email);

    if (!user) {
        throw new ApiError(404, "User not registered");
    }

    
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new ApiError(401, "Invalid credentials");
    }

    
    return {
        user_id: user.user_id,
        username: user.username,
        email: user.email
    };
};

export default loginService;