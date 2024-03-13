const {UserModel} = require("../models/user.model")

const generateToken = async (userId)=>{
    try {
        const user = await UserModel.findById(userId);
        const accessToken = user.generateAccessToken();

        return accessToken;
    } catch (error) {
        throw new Error("Unable to create Accesstoken at this moment");
    }
}

 
const RegisterUser = async (userData)=>{
    const {email,name, password,role} = userData;

    try {
        if(!name || !email || !password || !role){
            throw new Error("All fields are required, Please add all reqired infromastion");
        }
        const user = await UserModel.findOne({"email": email});
        if(user){
            throw new Error("User Already Exist with this email id");
        }
        const newUser = await UserModel.create({email,name, password,role});

        return newUser;
    } catch (error) {
        throw error
    }
} 

const LoginUser = async (LoginData)=>{
    const {email, password} = LoginData;

    try {
        if(!email || !password){
            throw new Error("All fields are required, Please add all reqired infromastion");
        }

        const existedUser = await UserModel.findOne({"email" : email});
        if(!existedUser){
            throw new Error("No account found with this email, please signup first");
        }

        const isPasswordCorrect = await existedUser.isPasswordCorrect(email, password);
        if(!isPasswordCorrect){
            throw new Error("Incorrect Password");
        }

        const accessToken = await generateToken(existedUser._id);
        const loggedInUser = await UserModel.findById(existedUser._id).select(
            "-password"
        );
        console.log(accessToken);
        const options = {
            httpOnly: true,
            secure: true,
        }
        return loggedInUser;
    } catch (error) {
        throw error;
    }
}


const passwordChange = async ()=>{
    try {
        
    } catch (error) {
        next(error)
    }
}

const getUserProfile = async (req, res, next)=>{
    try {
        
    } catch (error) {
        
    }
}

const logoutUser = async (req, res, next)=>{
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    RegisterUser,
    LoginUser,
    passwordChange,
    getUserProfile,
    logoutUser
}