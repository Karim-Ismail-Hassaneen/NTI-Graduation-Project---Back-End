const UserType = require('../../Models/Register/userType');

const createUserType = async (req,res)=>{
    const userType = await UserType.create(req.body);
    res.status(201).json(userType);
}

const getUserType= async (req,res)=>{
    const userTypes = await UserType.find();
    res.status(200).json(userTypes);
}

module.exports = { createUserType, getUserType }