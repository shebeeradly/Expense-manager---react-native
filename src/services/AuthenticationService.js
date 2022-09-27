import axios from "axios";
import { ApiConstants } from '../constants';

const AuthRequest = axios.create({
    baseURL: ApiConstants.BACKEND_API.BASE_API_URL,
});

const register = async user => {
    if (!user?.name || !user?.email || !user?.password || !user?.confirmPassword) {
        return {
            state: false, message: "Please fill all field"
        };
    }
    try {
        let requestBody = {
            name: user?.name,
            email: user?.email,
            password: user?.password,
            confirmPassword: user?.confirmPassword,
        };

        if (user?.password === user?.confirmPassword) {


            let registerResponse = await AuthRequest.post(
                ApiConstants.BACKEND_API.REGISTER,
                requestBody,
            );
            // console.log(registerResponse?.data);
            return registerResponse?.data;

        } else {
            return {
                state: false,
                message: "Password Mismatch",
            }
        }

    } catch (error) {
        console.log(error);
        return {
            status: false, message: "Oops ! Something went wrong"
        };
    }
};

const checkUserExist = async (type,value) => {
    try {
        let params = {[type]: value };

        let userCheckResponse = await AuthRequest.get(
            ApiConstants.BACKEND_API.USER_EXIST,
            {params},
        );
        // console.log(userCheckResponse?.data);
        return userCheckResponse?.data;

    } catch (error) {
        console.log(error);
        return {
            status: false, message: "Oops ! Something went wrong"
        };
    }
}

export default { register, checkUserExist };