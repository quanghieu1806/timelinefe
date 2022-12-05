const RequestModel = require("../models/request.file.model");
const PendingModel = require("../models/pending.model");
const ProgressModel = require("../models/progress.model");
const UpdateModel = require("../models/update.model");
const DoneModel = require("../models/done.model");
const mongoose = require("mongoose");

const timeLineCtrl = {
  createTimeLine: async (req, res) => {
    const {
      nameCard,
      idDepartment,
      descriptionCard,
      startDate,
      endDate,
      owner,
      img,
      status,
      attackFile,
    } = req.body;

    try {
      const timeLine = new RequestModel({
        ...req.body,
      });
      await timeLine.save();
      return res.status(200).json({ success: true, msg: "success" });
    } catch (error) {
      console.log("error: ", error);
    }
  },
  showListRequest: async (req, res) => {
    try {
      const data = await RequestModel.find({
        idDepartment: req.params.idDepartment,
        status: req.params.status,
      });

      if (data) {
        return res.status(200).json({
          success: true,
          data,
        });
      } else {
        return res.status(400).json({
          success: false,
          msg: "fails",
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
  showListAllTasks: async (req, res) => {
    try {
      const data = await RequestModel.find({
        idDepartment: mongoose.Types.ObjectId(req.params.idTask),
      }).populate("owner");

      if (data) {
        return res.status(200).json({
          success: true,
          data,
        });
      } else {
        return res.status(400).json({
          success: false,
          msg: "fails",
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },

  showDetailTask: async (req, res) => {
    try {
      const data = await RequestModel.findOne({
        _id: req.params.idTask,
      }).populate("owner");

      if (data) {
        return res.status(200).json({
          success: true,
          data,
        });
      } else {
        return res.status(400).json({
          success: false,
          msg: "fails",
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },

  updateStatusTask: async (req, res) => {
    try {
      const updatedPost = await RequestModel.findOneAndUpdate(
        { _id: req.params.idTask },
        {
          status: req.params.status,
        }
      );
      if (updatedPost) {
        res.status(200).json({ message: "Update successfully" });
      } else {
        res.status(404).json({ message: "Update fail" });
      }
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  },
  commentTask: async (req, res) => {
    const { comment, idUserComment, nameUserComment, idTask, linkImg } =
      req.body;
    const request = await RequestModel.findById(idTask);

    if (request) {
      const reviews = {
        name: nameUserComment,
        comment: comment,
        user: idUserComment,
        linkImg: linkImg,
      };

      request.review.push(reviews);

      await request.save();
      res.status(200).json({ message: "Reviewed Added" });
    } else {
      res.status(404);
      throw new Error("Reviewed not Found");
    }
  },
  removeComment: async (req, res) => {
    const request = await RequestModel.findById(req.params.idTask);

    if (request) {
      const newCommentUpdate = request?.review?.filter(
        (item) => item._id != req.params.idComment
      );

      request.review = [];
      request.review = newCommentUpdate;
      await request.save();
      res.status(200).json({ message: "Reviewed Added" });
    } else {
      res.status(404);
      throw new Error("Reviewed not Found");
    }
  },
  getComment: async (req, res) => {
    const request = await RequestModel.findById(req.params.idTask);

    if (request) {
      const newCommentUpdate = request?.review?.find(
        (item) => item._id == req.params.idComment
      );
      res.status(200).json({ message: "Success", data: newCommentUpdate });
    } else {
      res.status(404);
      throw new Error("Reviewed not Found");
    }
  },
  updateTask: async (req, res) => {
    const {
      comment,
      idUserComment,
      nameUserComment,
      idTask,
      linkImg,
      idComment,
    } = req.body;
    const request = await RequestModel.findById(idTask);

    if (request) {
      const newCommentUpdate = request?.review?.find(
        (item) => item._id == idComment
      );

      let newArr = request?.review?.filter((item) => item._id != idComment);

      const reviews = {
        ...newCommentUpdate,
        comment: comment,
      };

      // console.log(typeof req.params.idComment);

      newArr.push(reviews);
      // console.log(newArr);
      // console.log(reviews);

      request.review = newArr;

      await request.save();
      res.status(200).json({ message: "Reviewed Added" });
    } else {
      res.status(404);
      throw new Error("Reviewed not Found");
    }
  },
};

module.exports = timeLineCtrl;
