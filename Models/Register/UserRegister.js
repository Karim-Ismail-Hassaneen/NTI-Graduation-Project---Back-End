const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserRegisterSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 30,
    trim: true,
    match: /^[a-zA-Z0-9]+$/,
    uppercase: false
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (value) => {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
      },
      message: "Invalid email format",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be at least 8 characters long'], // Custom message
    },
    userType:{
      type: mongoose.Schema.Types.ObjectId,
      ref : 'userType',
      required:true
  }
});

const UserRegister = mongoose.model("UserRegister", UserRegisterSchema);
module.exports = UserRegister;
