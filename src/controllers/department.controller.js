const Department = require("../models/department.model");
const departmentCtrl = {
  createDepartment: async (req, res) => {
    const { nameDepartment, idBranch } = req.body;
    try {
      const existEmail = await Department.findOne({
        nameDepartment: nameDepartment,
        idBranch: idBranch,
      });
      if (existEmail) {
        return res.status(400).json({ success: false, msg: "Has exits" });
      } else {
        const user = new Department({
          nameDepartment,
          idBranch,
        });
        await user.save();

        return res.status(200).json({ success: true, msg: "success" });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
  showAllDepartment: async (req, res) => {
    try {
      const data = await Department.find({}, "nameDepartment idBranch").exec();
      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  },
  showById: async (req, res) => {
    try {
      const data = await Department.findOne(
        { _id: req.params.id },
        "nameDepartment idBranch"
      ).exec();
      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  },
  updateDepartment: async (req, res) => {
    try {
      const { nameDepartment, idBranch } = req.body;

      const updatedPost = await Department.findOneAndUpdate(
        { _id: req.params.id },
        {
          nameDepartment,
          idBranch,
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
};

module.exports = departmentCtrl;
