import adminfcmTokenModel from "../models/pushNotification/adminfcmTokenModel.js";
import fcmTokenModel from "../models/pushNotification/fcmTokenModel.js";

export const registerFcmTokenControllerforUser = async (req, res) => {
  try {
    const { tokenID, username } = req.body;

    if (!username) {
      return res.send({ message: "can not find username" });
    }
    if (!tokenID) {
      return res.send({ message: "can not find tokenID" });
    }

    const result = await new fcmTokenModel({ username, tokenID }).save();

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Can not add fcm token to database",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "fcm token Added Successfully to database",
      });
    }
  } catch (error) {
    console.log(error);

    res.status(200).send({
      success: false,
      message: "error in adding fcm token",
      error,
    });
  }
};

export const registerFcmTokenControllerforAdmin = async (req, res) => {
  try {
    const { email, tokenID } = req.body;

    if (!email) {
      return res.send({ message: "can not  find email" });
    }

    if (!tokenID) {
      return res.send({ message: "can not find tokenID" });
    }

    const result = await new adminfcmTokenModel({ email, tokenID }).save();

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Can not add fcm token to database",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "fcm token Added Successfully to database",
      });
    }
  } catch (error) {
    console.log(error);

    res.status(200).send({
      success: false,
      message: "error in adding fcm token",
      error,
    });
  }
};

export const updateFcmTokenControllerforUser = async (req, res) => {
  try {
    const { tokenID, username } = req.body;

    if (!username) {
      return res.send({ message: "can not  find username" });
    }
    if (!tokenID) {
      return res.send({ message: "can not find tokenID" });
    }

    const result = await fcmTokenModel.findOneAndUpdate(
      { username },
      { tokenID }
    );

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Can not update fcm token to database",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "fcm token updated Successfully to database",
      });
    }
  } catch (error) {
    console.log(error);

    res.status(200).send({
      success: false,
      message: "error in updating fcm token",
      error,
    });
  }
};

export const updateFcmTokenControllerforAdmin = async (req, res) => {
  try {
    const { tokenID, email } = req.body;

    if (!email) {
      return res.send({ message: "can not  find email" });
    }
    if (!tokenID) {
      return res.send({ message: "can not find tokenID" });
    }

    const result = await adminfcmTokenModel.findOneAndUpdate(
      { email },
      { tokenID }
    );

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Can not update fcm token to database",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "fcm token updated Successfully to database",
      });
    }
  } catch (error) {
    console.log(error);

    res.status(200).send({
      success: false,
      message: "error in updating fcm token",
      error,
    });
  }
};

export const getFcmTokenOfAUserController = async (req, res) => {
  try {
    const { username } = req.body;
    if (!username) {
      return res.send({ message: "can not  find username" });
    }

    const result = await fcmTokenModel.findOne({ username });

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Can not find username on fcm database",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "fcm token fetched Successfully",
        result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getFcmTokenOfAllUserController = async (req, res) => {
  try {
    const result = await fcmTokenModel.find({});

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Can not find any username on fcm database",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "all fcm token fetched Successfully",
        result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getFcmTokenOfAdminController = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.send({ message: "can not  find email" });
    }

    const result = await adminfcmTokenModel.findOne({ email });

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Can not find email on fcm database",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "fcm token fetched Successfully",
        result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
