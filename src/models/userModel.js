import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please provide a password"],
  },
  email: {
    type: String,
    unique: [true, "Please provide a email"],
    lowercase: true,
    trim: true,
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  isAdmain: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken:String,
  forgotPasswordTokenExpiry: Date,
  verifyToken:String,
  verifyTokenExpiry:Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
