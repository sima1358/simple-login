import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  dateCreated: { type: Date, required: true, default: Date.now },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
