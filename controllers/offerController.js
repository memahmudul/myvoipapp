import offerModel from "../models/offerModel.js";

export const getAllOfferController = async (req, res) => {
  try {
    const { operator, offer_type } = req.body;
    console.log(operator, offer_type);

    if (!operator) {
      return res.send({ message: "can not find operator" });
    }

    if (!offer_type) {
      return res.send({ message: "enter offer type" });
    }

    const result = await offerModel.find({ operator, offer_type });

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Do not have any offer",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "offer fetched successfully",

        result,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: "error in fetching all offer",
      error,
    });
  }
};

export const getAllOfferByAdminController = async (req, res) => {
  try {
    const { operator } = req.body;
    const result = await offerModel.find({ operator });

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Do not have any offer",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "offer fetched successfully",

        result,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: "error in fetching all offer",
      error,
    });
  }
};

export const addNewOfferController = async (req, res) => {
  try {
    const { operator, offer_type, name, validity, price } = req.body;
    console.log(req.body);

    if (!operator) {
      return res.send({ message: "can not find operator" });
    }
    if (!offer_type) {
      return res.send({ message: "can not find offer_type" });
    }
    if (!name) {
      return res.send({ message: "can not find offer name" });
    }
    if (!validity) {
      return res.send({ message: "can not find validity" });
    }
    if (!price) {
      return res.send({ message: "can not find price" });
    }

    const data = await new offerModel({
      operator,
      offer_type,
      name,
      validity,
      price,
    }).save();

    if (!data) {
      return res.status(201).send({
        success: false,
        message: "Something wrong happend",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "new offer added successfully",
        data,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: "error in adding new offer",
      error,
    });
  }
};

export const deleteAnOfferController = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.send({ message: "can not find ID" });
    }

    const data = await offerModel.findByIdAndDelete({ _id: id });

    console.log(data);

    if (!data) {
      return res.status(201).send({
        success: false,
        message: "Something wrong happend",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "offer deleted successfully",
        data,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: "error in deleting offer",
      error,
    });
  }
};
