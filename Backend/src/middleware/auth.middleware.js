const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");
const { compare } = require("bcrypt");

const authentication = async (req, res) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization?.split(" ")[1] || " ";
    console.log(token)
    if (!token) { 
        console.log("No token found");
        return null;
    }
    try {
        const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await UserModel.findById(decoded._id).select("-password");
        console.log(user)
        return user;
    } catch (error) {
        console.error("Error in authentication middleware:", error);
    }
}


module.exports = {authentication};
