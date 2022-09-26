const { mongoConfig } = require("../config");
const MongoDB = require("./mongodb.service");

const userRegister = async (user) => {
    try {
        let userObject = {
            username: user?.username,
            email: user?.email,
            password: user?.password,
        };
        let savedUser = await MongoDB.db
        .collection(mongoConfig.collections.USERS)
        .insertOne(userObject);
        if(savedUser?.acknowledged && savedUser?.insertedId){
            return {
                status: true,
                message: "User registered successfully",
            };
        } else {
            return {
                status: true,
                message: "User registered failed",  
            };
        }
    } catch (error) {
        console.log(error);
        return {
            status: false,
            message: "User registered failed",
            error: error
        };
    }
};

module.exports = { userRegister };