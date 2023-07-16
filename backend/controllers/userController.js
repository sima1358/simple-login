import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateToken } from "../helpers/authenticationHelper.js";
import {StatusCodes} from 'http-status-codes'

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user == null) {
    return res
      .status(StatusCodes.OK)
      .json({ message: "User with that email was not found", user });
  }

  //sign in the user
  try {
    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (checkPassword) {
      // Generate JWT token
      const token = generateToken(user);
      return res.status(StatusCodes.OK).json({ token });
    } else {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: "Passwords not matching" });
    }
  } catch (error) {
    return res.status(400).json({message:'Error happened'})
  }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPassword,
    });

    res.status(StatusCodes.OK).json({ message: "User Created"});
  } catch (error) {
   return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: "Something goes wrong creating user", error: error.toString() });
  }
};


export const users=async(req, res)=>{
  try {
    const allUsers = await User.find();

    return res.status(StatusCodes.OK).json(allUsers)
  } catch (error) {
    return res.status(StatusCodes.NOT_FOUND).json({message:"Users NOT Found", error:error.toString()})
    
  }
}
