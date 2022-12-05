const mongoose = require("mongoose");
const departmentModel = mongoose.Schema(
  {
    nameDepartment: {
      type: String,
      required: true,
    },
    // 3 branch
    // branch HaNoi, HCM,DN
    idBranch: {
      type: String,
      require: false,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("department", departmentModel);
