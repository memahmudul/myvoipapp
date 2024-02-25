import bankPaymentModel from "../../models/bankPaymentModel.js";
import mobileBankingModel from "../../models/mobileBankingModel.js";
import mobilePaymentModel from "../../models/mobilePaymentModel.js";

// export const editFirstPaymentController = async (req, res) => {
//   try {
//     const { payment_method_1 } = req.body;

//     if (!payment_method_1) {
//       return res.send({ error: "can not find payment_method_1" });
//     }

//     const data = await paymentModel.findOneAndUpdate({}, { payment_method_1 });

//     if (!data) {
//       return res.status(201).send({
//         success: false,
//         message: "Something wrong happened",
//       });
//     } else {
//       res.status(200).send({
//         success: true,
//         message: "first payment method   updated successfully",
//         data,
//       });
//     }
//   } catch (error) {
//     res.status(200).send({
//       success: false,
//       message: "error in adding new payment method table",
//       error,
//     });
//   }
// };

export const addBankPaymentController = async (req, res) => {
  try {
    const { bank_name, bank_holder, account_no } = req.body;
    if (!bank_name) {
      return res.send({ message: "Bank Name is Required" });
    }
    if (!bank_holder) {
      return res.send({ message: "Bank Holder name is required" });
    }
    if (!account_no) {
      return res.send({ message: "Bank Account No required" });
    }

    const data = await new bankPaymentModel({
      bank_name,
      bank_holder,
      account_no,
    }).save();

    if (!data) {
      return res.status(201).send({
        success: false,
        message: "Something wrong happened",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "Bank Payment Method Addedd successfully",
        data,
      });
    }
  } catch (error) {
    res.status(200).send({
      success: false,
      message: "error in adding new bank payment method",
      error,
    });
  }
};

export const addMobilePaymentController = async (req, res) => {
  try {
    const { mobile_banking, phone } = req.body;
    if (!mobile_banking) {
      return res.send({ message: "Mobile Banking Name is required" });
    }

    if (!phone) {
      return res.send({ message: "Phone number is required" });
    }

    const data = await new mobilePaymentModel({
      mobile_banking,
      phone,
    }).save();

    if (!data) {
      return res.status(201).send({
        success: false,
        message: "Something wrong happened",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "Mobile Payment Method added successfully",
        data,
      });
    }
  } catch (error) {
    res.status(200).send({
      success: false,
      message: "error in adding new mobile payment method",
      error,
    });
  }
};

export const getAllMobilePaymentController = async (req, res) => {
  try {
    const result = await mobilePaymentModel.find({});

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Do not have any Mobile Payments",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "Mobile Payment List fetched successfully",

        result,
      });
    }
  } catch (error) {
    console.log(error);

    res.status(200).send({
      success: false,
      message: "error in fetching Mobile Payment List",
      error,
    });
  }
};

export const getAllBankPaymentController = async (req, res) => {
  try {
    const result = await bankPaymentModel.find({});

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Do not have any Bank Payments",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "Bank Payment List fetched successfully",

        result,
      });
    }
  } catch (error) {
    console.log(error);

    res.status(200).send({
      success: false,
      message: "error in fetching Bank Payment List",
      error,
    });
  }
};

export const deleteAMobilePaymentController = async (req, res) => {
  try {
    const { id } = req.body;

    const result = await mobilePaymentModel.findOneAndDelete(id);
    console.log(result);

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Can not delete user",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "Mobile Payment deleted successfully",

        result,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: "error in deleting Mobile Payment",
      error,
    });
  }
};

export const deleteABankPaymentController = async (req, res) => {
  try {
    const { id } = req.body;

    const result = await bankPaymentModel.findOneAndDelete(id);

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Can not delete bank payment",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "bank Payment deleted successfully",

        result,
      });
    }
  } catch (error) {
    res.status(200).send({
      success: false,
      message: "error in deleting bank Payment",
      error,
    });
  }
};
