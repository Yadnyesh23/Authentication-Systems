import ApiError from "../../utils/apiError";

const registerService = async(username, email, password) => {
    const userExist = await checkUserExist(email);

    if(userExist){
        throw new ApiError(400, "User already registered.")
    }

    
}