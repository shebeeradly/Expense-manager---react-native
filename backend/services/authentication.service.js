const { mongoConfig, tokenSecret } = require("../config");
const MongoDB = require("./mongodb.service");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { query } = require("express");

const userRegister = async (user) => {
    try {
        if (!user?.name || !user?.email || !user?.password)
            return { status: false, message: "Please fill up all the fields" };
        const passwordHash = await bcrypt.hash(user?.password, 10)
        let userObject = {
            name: user?.name,
            email: user?.email,
            password: passwordHash,
        };
        let savedUser = await MongoDB.db
            .collection(mongoConfig.collections.USERS)
            .insertOne(userObject);
        if (savedUser?.acknowledged && savedUser?.insertedId) {
            let token = jwt.sign({
                email: userObject?.email
            }, tokenSecret, { expiresIn: "30 days" })
            return {
                status: true,
                message: "User registered successfully",
                data: token,
            };
        } else {
            return {
                status: false,
                message: "User registered failed",
            };
        }
    } catch (error) {
        console.log(error);
        let errorMessage = "User registered failed"
        error?.code === 11000 && error?.keyPattern?.email ?
            (errorMessage = "Email already exist") : null;
        return {
            status: false,
            message: errorMessage,
            error: error?.toString(),
        };
    }
};

const userLogin = async (user) => {
    try {
        if (!user?.email || !user?.password)
            return { status: false, message: "Please fill all fields" };
        let userObject = await MongoDB.db
            .collection(mongoConfig.collections.USERS)
            .findOne({ email: user?.email });
        if (userObject) {
            let isPasswordVerfied = await bcrypt.compare(
                user?.password,
                userObject?.password
            );
            if (isPasswordVerfied) {
                let token = jwt.sign({
                    email: userObject?.email
                },
                    tokenSecret, { expiresIn: "30 days" });
                return {
                    status: true,
                    message: "User login successful",
                    data: token,
                };
            } else {
                return {
                    status: false,
                    message: "Incorrect password",
                };
            }
        }
        else {
            return {
                status: false,
                message: "No user found",
            };
        }
    } catch (error) {
        console.log(error);
        return {
            status: false,
            message: "User login failed",
            error: error?.toString(),
        };
    }
};

const checkUserExist = async (query) => {
    
    try {
        let userObject = await MongoDB.db
        .collection(mongoConfig.collections.USERS)
        .findOne(query);
        console.log(userObject);
        return !userObject 
        ? {status: true, message: "This email is not taken"}
        : {status: false, message: "User alredy exist"}
    } catch (error) {
        
    }
}

module.exports = { userRegister, userLogin, checkUserExist };