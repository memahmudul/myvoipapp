import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerFirstPageController = async (req, res) => {
  try {
    const { name, username, phone, admin } = req.body;
    if (!name) {
      return res.send({ error: "name is required" });
    }
    if (!username) {
      return res.send({ error: "username is required" });
    }

    if (!phone) {
      return res.send({ error: "phone number is required" });
    }

    if (!admin) {
      return res.send({ error: "Admin Name is required" });
    }

    //check username
    const existingUsername = await userModel.findOne({ username });
    //existing username
    if (existingUsername) {
      return res.status(200).send({
        success: false,
        message: "ইউজারনেমটি ইতোমধ্যেই নিবন্ধিত আছে",
      });
    }

    //check Email

    //check phone
    const existingPhone = await userModel.findOne({ phone });
    //existing phone
    if (existingPhone) {
      return res.status(200).send({
        success: false,
        message: "ফোন নাম্বারটি ইতোমধ্যেই নিবন্ধিত আছে",
      });
    }

    res.status(201).send({
      success: true,
      message: "Registartion first page validation success",
    });
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: "error in registration first page",
      error,
    });
  }
};

export const registerController = async (req, res) => {
  try {
    const { name, username, phone, admin, password, pin } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "name is required" });
    }
    if (!username) {
      return res.send({ error: "username is required" });
    }

    if (!phone) {
      return res.send({ error: "phone number is required" });
    }

    if (!admin) {
      return res.send({ error: "Admin name is required" });
    }
    if (!password) {
      return res.send({ error: "password is required" });
    }
    if (!pin) {
      return res.send({ error: "pin is required" });
    }

    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const balance = "0";
    const user = await new userModel({
      name,
      username,
      phone,
      admin,
      password: hashedPassword,
      pin,
      balance,
    }).save();
    res.status(201).send({
      success: true,
      message: "সফলভাবে রেজিষ্ট্রেশন সম্পন্ন হয়েছে",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: "error in registration",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username) {
      return res.send({ error: "Username is required" });
    }
    if (!password) {
      return res.send({ error: "Password is required" });
    }

    //check user
    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(201).send({
        success: false,
        message: "ইউজারনেমটি ডাটাবেসে খুঁজে পাওয়া যায়নি",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(201).send({
        success: false,
        message: "পাসওয়ার্ড টি ভুল",
      });
    }

    //token
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.status(200).send({
      success: true,
      message: "সফলভাবে লগইন সম্পন্ন হয়েছে",
      user: {
        admin: user.admin,
        name: user.name,
        username: user.username,
        pin: user.pin,
        phone: user.phone,

        balance: user.balance,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: "error in login",
      error,
    });
  }
};

export const confirmPinController = async (req, res) => {
  try {
    const { pin, username } = req.body;
    if (!pin) {
      return res.send({ error: "Pin is required" });
    }
    if (!username) {
      return res.send({ error: "User is not registered" });
    }

    ///verify pin

    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(201).send({
        success: false,
        message: "username is not registered",
      });
    }
    const matchPin = user.pin === pin;
    if (!matchPin) {
      return res.status(201).send({
        success: false,
        message: "পিন সঠিক নয়।",
      });
    }
    res.status(200).send({
      success: true,
      message: "পিন সফলভাবে নিশ্চিত করা হয়েছে",
    });
  } catch (error) {
    res.status(200).send({
      success: false,
      message: "error in pin confirm",
      error,
    });
  }
};

export const changePasswordController = async (req, res) => {
  try {
    const { username, oldPassword, newPassword } = req.body;
    if (!username) {
      return res.send({ message: "username is required" });
    }
    if (!oldPassword) {
      return res.send({ message: "old Password is not registered" });
    }
    if (!newPassword) {
      return res.send({ message: "new Password is not registered" });
    }

    ///verify pin

    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(201).send({
        success: false,
        message: "username is not registered",
      });
    }

    const match = await comparePassword(oldPassword, user.password);
    if (!match) {
      return res.status(201).send({
        success: false,
        message: "Old Password does not match",
      });
    } else {
      const hashedPassword = await hashPassword(newPassword);

      const data = await userModel.findOneAndUpdate(
        { username },
        { password: hashedPassword }
      );

      res.status(201).send({
        success: true,
        message: "Password Changed successfully",
        data,
      });
    }
  } catch (error) {
    res.status(200).send({
      success: false,
      message: "error in Password change",
      error,
    });
  }
};

export const changePinController = async (req, res) => {
  try {
    const { username, oldPin, newPin } = req.body;
    if (!username) {
      return res.send({ message: "username is required" });
    }
    if (!oldPin) {
      return res.send({ message: "old Pin is required" });
    }
    if (!newPin) {
      return res.send({ message: "new Pin is required" });
    }

    ///verify pin

    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(201).send({
        success: false,
        message: "username is not registered",
      });
    }

    const match = user.pin === oldPin;
    if (!match) {
      return res.status(201).send({
        success: false,
        message: "Old Pin does not match",
      });
    } else {
      await userModel.findOneAndUpdate({ username }, { pin: newPin });

      res.status(201).send({
        success: true,
        message: "Pin Changed successfully",
      });
    }
  } catch (error) {
    res.status(200).send({
      success: false,
      message: "error in pin Change",
      error,
    });
  }
};
