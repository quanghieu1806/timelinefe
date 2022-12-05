const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: false },
    comment: { type: String, required: false },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

const updateFileModel = mongoose.Schema(
  {
    idDepartment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "department",
    },
    nameCard: {
      type: String,
      require: false,
    },
    descriptionCard: {
      type: String,
      require: false,
    },
    startDate: {
      type: String,
      require: false,
    },
    img: {
      type: String,
      require: false,
    },
    endDate: {
      type: String,
      require: false,
    },
    owner: {
      type: String,
      require: false,
    },
    status: {
      type: String,
      require: false,
    },
    isDone: {
      type: String,
      require: false,
      default: "false",
    },
    attackFile: {
      type: String,
      require: false,
    },
    review: [reviewSchema],
  },

  { timestamps: true }
);

module.exports = mongoose.model("update", updateFileModel);
