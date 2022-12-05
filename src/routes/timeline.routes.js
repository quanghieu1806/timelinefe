const router = require("express").Router();
const timeLineCtrl = require("../controllers/timeline.controller");
/* GET users listing. */
router.post("/comment-here", timeLineCtrl.commentTask);
router.post("/create-time-line", timeLineCtrl.createTimeLine);
router.get("/list-all-tasks/all/:idTask", timeLineCtrl.showListAllTasks);
router.get("/list-all-tasks/:idTask", timeLineCtrl.showDetailTask);
router.get("/request/:idDepartment/:status", timeLineCtrl.showListRequest);
router.put("/update-tasks/:idTask/:status", timeLineCtrl.updateStatusTask);
router.put("/remove-comment/:idTask/:idComment", timeLineCtrl.removeComment);
router.get("/get-comment/:idTask/:idComment", timeLineCtrl.getComment);
router.put("/comment-here", timeLineCtrl.updateTask);
// detail

module.exports = router;
