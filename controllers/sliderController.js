import sliderImageModel from "../models/sliderImageModel.js";

export const addSliderImageController = async (req, res) => {
  try {
    const { image_url } = req.body;

    if (!image_url) {
      return res.send({ error: "can not find image_url" });
    }

    const data = await new sliderImageModel({ image_url }).save();

    if (!data) {
      return res.status(201).send({
        success: false,
        message: "Something wrong happened",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "new slider image  table added successfully",
        data,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: "error in adding new slider image table",
      error,
    });
  }
};

export const editSliderImageController = async (req, res) => {
  try {
    const { image_url } = req.body;

    console.log(image_url);

    if (!image_url) {
      return res.send({ error: "can not find image_url" });
    }

    const data = await sliderImageModel.findOneAndUpdate({}, { image_url });

    if (!data) {
      return res.status(201).send({
        success: false,
        message: "Something wrong happened",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "slider image  table edited successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: "error in editing  slider image table",
      error,
    });
  }
};

export const getSliderImageController = async (req, res) => {
  try {
    const result = await sliderImageModel.find({});

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Do not have any slider Image",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "slider Images fetched Successfully",

        result,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: "error in fetching SLider Images",
      error,
    });
  }
};

export const deleteSliderImageController = async (req, res) => {
  try {
    const { id } = req.body;

    const result = await sliderImageModel.findOneAndDelete(id);

    if (!result) {
      return res.status(201).send({
        success: false,
        message: "Can not delete Sldier Image",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "Slider deleted successfully",

        result,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: "error in deleting SLider Images",
      error,
    });
  }
};
