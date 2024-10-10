import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User doesn't exist!" });
    }

    const password_scan = await bcrypt.compare(password, user.password);

    if (!password_scan) {
      return res.json({ success: false, message: "Invalid credentials!" });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// register
export const signup = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const user_exists = await userModel.findOne({ email });

    /* checking to see if user already exists */
    if (user_exists) {
      return res.json({ success: false, message: "User already exists!" });
    }

    /* validating email format and password */
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Incorrect email or password!",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password!",
      });
    }

    /* hashing user password */
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const new_user = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await new_user.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
