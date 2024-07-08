const express = require("express");
const router = express.Router();
const methods = require("../controllers/controller.task.js");

router.get("/", methods.getTasks);
router.get("/:name", methods.getTask);
// router.get("/",methods.postTask);
// router.get("delete/:id",methods.deleteTask);
router.post("/",methods.postTask);

// router.post("/edit/:id",methods.editTask);

router.post("/delete/:name",methods.deleteTask);

module.exports = router
