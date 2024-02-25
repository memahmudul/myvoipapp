import balanceRequest from "../../models/balanceRequest.js";
import userModel from "../../models/userModel.js";
import { conn } from "../../config/db.js";

export const getBalanceRequestListController = async (req, res) => {
  try {
    const result = await balanceRequest.find({});

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Do not have any Balance Request",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "balance request List fetched successfully",

        result,
      });
    }
  } catch (error) {
    console.log(error);

    res.status(200).send({
      success: false,
      message: "error in fetching balance",
      error,
    });
  }
};

export const editBalanceController = async (req, res) => {
  try {
    const { username, balance } = req.body;

    if (!username) {
      return res.send({ error: "can not find username" });
    }

    if (!balance) {
      return res.send({ error: "can not find balance" });
    }

    const user = await userModel.findOne({ username }).exec();
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "কাস্টমার খুঁজে পাওয়া যায়নি।",
      });
    }

    const result = await userModel.findOneAndUpdate({ username }, { balance });

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Can not update balance",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "balance Added Successfully",
      });
    }
  } catch (error) {
    console.log(error);

    res.status(200).send({
      success: false,
      message: "error in fetching balance",
      error,
    });
  }
};

export const addBalanceController = async (req, res) => {
  try {
    const { username, balance } = req.body;

    const user = await userModel.findOne({ username }).exec();
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "কাস্টমার খুঁজে পাওয়া যায়নি।",
      });
    }

    const currentBalance = user.balance;

    const newbalance = parseInt(currentBalance) + parseInt(balance);

    const updatedBalance = newbalance.toString();

    const result = await userModel.findOneAndUpdate(
      { username },
      { balance: updatedBalance }
    );

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Can not Edit Balance",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "balance Edited Successfully",
        result,
      });
    }
  } catch (error) {
    res.status(200).send({
      success: false,
      message: "error in editing balance",
      error,
    });
  }
};
