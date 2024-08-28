const bcrypt = require("bcrypt");
const UserRegister = require("../../Models/Register/UserRegister");
const jwt = require('jsonwebtoken') 


const Register = async (req, res) => {
    try {
      const { username, email, password, userType } = req.body;
      const hashedPassword = await bcrypt.hash(password,10)
      const newUser = await UserRegister.create({username,email,password:hashedPassword,userType});;
      await newUser.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

const getUsers = async (req, res) => {
  try {
    const getUserData = await UserRegister.find().populate('userType');
    res.status(200).json(getUserData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const DeleteUsers = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteOneUserData = await UserRegister.findByIdAndDelete(id);
    if (!deleteOneUserData) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(deleteOneUserData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const UpdateUsers =  async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    // If the password is being updated, hash it before saving
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    const updateUserData = await UserRegister.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updateUserData) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updateUserData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserRegister.findOne({ email });
        if (!user) return res.status(400).json({ error: 'Invalid Inputes' });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid Inpuets' });
        user.password = undefined
        const token = jwt.sign({id: user._id, userType: user.userType}, "mySecret", {expiresIn : '1h'})    
        
      res.status(200).json({token,user});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { Register, Login, getUsers, DeleteUsers, UpdateUsers }
