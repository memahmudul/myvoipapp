import userModel from "../../models/userModel.js";

export const getAllUserController = async (req, res) => {
  try {
    const result = await userModel.find({});

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Do not have any User",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "User List fetched successfully",

        result,
      });
    }
  } catch (error) {
    console.log(error);

    res.status(200).send({
      success: false,
      message: "error in fetching user List",
      error,
    });
  }
};

export const getSingleUserController = async (req, res) => {
  try {
    const { username } = req.body;
    console.log(username);

    const result = await userModel.findOne({ username });

    if (!result) {
      return res.status(200).send({
        success: false,
        message: "Do not have any User",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "User  fetched successfully",

        result,
      });
    }
  } catch (error) {
    console.log(error);

    res.status(200).send({
      success: false,
      message: "error in fetching user",
      error,
    });
  }
};

export const deleteUserController = async (req, res) => {
  try {
    const { username } = req.body;

    console.log(username);

    const result = await userModel.findOneAndDelete({ username });
    console.log(result);

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Can not delete user",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "User deleted successfully",

        result,
      });
    }
  } catch (error) {
    res.status(200).send({
      success: false,
      message: "error in deleting user",
      error,
    });
  }
};
