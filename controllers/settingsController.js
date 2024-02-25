import settingsModel from "../models/settingsModel.js";

export const addSettingsController = async (req, res) => {
  try {
    const { url, facebook, whatsapp, youtube } = req.body;

    if (!url) {
      return res.send({ message: "can not find url" });
    }
    if (!facebook) {
      return res.send({ message: "can not find facebook" });
    }
    if (!whatsapp) {
      return res.send({ message: "can not find whatsapp" });
    }
    if (!youtube) {
      return res.send({ message: "can not find youtube" });
    }

    const result = await new settingsModel({
      url,
      facebook,
      whatsapp,
      youtube,
    }).save();

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Can not settings info",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "Settings info Added Successfully",
      });
    }
  } catch (error) {
    console.log(error);

    res.status(200).send({
      success: false,
      message: "error in adding settings info",
      error,
    });
  }
};

export const getSettingsController = async (req, res) => {
  try {
    const result = await settingsModel.find({});

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Do not have any Settings Info",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "Settings Info fetched successfully",

        result,
      });
    }
  } catch (error) {
    console.log(error);

    res.status(200).send({
      success: false,
      message: "error in fetching NSettings Info",
      error,
    });
  }
};
