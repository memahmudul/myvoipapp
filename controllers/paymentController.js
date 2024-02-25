import mobilePaymentModel from "../models/mobilePaymentModel.js";
import bankPaymentModel from "../models/bankPaymentModel.js";

export const getMobilePaymentController = async (req, res) => {
  try {
    const result = await mobilePaymentModel.find({});
    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Do not have any mobile payment method",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "mobile payment method fetched Successfully",
        result,
      });
    }
  } catch (error) {
    res.status(200).send({
      success: false,
      message: "error in fetching payment met",
      error,
    });
  }
};

export const getBankPaymentController = async (req, res) => {
  try {
    const result = await bankPaymentModel.find({});
    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Do not have any bank payment method",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "bank payment method fetched Successfully",
        result,
      });
    }
  } catch (error) {
    res.status(200).send({
      success: false,
      message: "error in fetching payment met",
      error,
    });
  }
};
