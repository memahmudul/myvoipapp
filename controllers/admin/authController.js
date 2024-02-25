import adminModel from "../../models/admin/adminModel.js";
import { comparePassword, hashPassword } from "../../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //validations
    if (!name) {
      return res.send({ message: "name is required" });
    }

    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "password is required" });
    }

    //check Email
    const existingEmail = await adminModel.findOne({ email });
    //existing Email
    if (existingEmail) {
      return res.status(200).send({
        success: false,
        message: "Email already exists",
      });
    }

    //register user
    const hashedPassword = await hashPassword(password);
    //save

    const admin = await new adminModel({
      name,
      email,
      password: hashedPassword,
      status: "pending",
    }).save();
    res.status(200).send({
      success: true,
      message: "Admin registered successfully.",
      admin,
    });
  } catch (error) {
    res.status(200).send({
      success: false,
      message: "error in Admin Registration",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }

    //check user
    const admin = await adminModel.findOne({ email });

    if (!admin) {
      return res.status(200).send({
        success: false,
        message: "Email number is not registered As Admin",
      });
    }

    const match = await comparePassword(password, admin.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Password does not match",
      });
    }

    if (admin.status === "pending") {
      return res.status(200).send({
        success: false,
        message: "The Account is pending.",
      });
    }

    //token
    const token = JWT.sign({ _id: admin._id }, process.env.JWT_SECRET);
    res.status(200).send({
      success: true,
      message: "Admin Login successfull",
      admin: {
        name: admin.name,
        email: admin.email,
        status: admin.status,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: "error in admin login",
    });
  }
};

export const getAdminEmailController = async (req, res) => {
  try {
    const admin = await adminModel.findOne();

    if (!admin) {
      return res.status(200).send({
        success: false,
        message: "Can Not find any admin",
      });
    }

    const adminemail = admin.email;

    console.log(adminemail);

    res.status(200).send({
      success: true,
      message: "Admin email fetched successfully",
      adminemail,
    });
  } catch (error) {
    res.status(200).send({
      success: false,
      message: "error in Fetching Admin email",
      error,
    });
  }
};
