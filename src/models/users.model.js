const mongoose = require("mongoose");
const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      require: false,
    },
    password: {
      type: String,
      require: [true, "Please enter name"],
    },
    avatar: {
      type: String,
      require: [true, "Please enter name"],
      default: "../public/images/avt-default.jpg",
    },
    email: {
      type: String,
      require: [true, "Please enter name"],
    },
    // coder, projectManager, leader, admin
    role: {
      type: String,
      require: false,
    },
    gender: {
      type: String,
      require: false,
    },
    birthday: {
      type: String,
      require: false,
    },
    address: {
      type: String,
      require: false,
    },
    position: {
      type: String,
      require: false,
    },
    idDepartment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "department",
      require: false,
      default: null,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("user", userModel);
