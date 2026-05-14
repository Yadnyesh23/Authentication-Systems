import ApiError from "../../utils/ApiError.js";
// import checkUserExist from "./register.model.js";
// import createUser from "./register.model.js";
import bcrypt from "bcrypt";
import userModel from "./register.model.js";



const registerService = async (username, email, password) => {
    const userExists = await userModel.checkUserExist(email);

    if (userExists) {
        throw new ApiError(400, "User already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.createUser(username, email, hashedPassword);

    return newUser;
};

export default registerService;