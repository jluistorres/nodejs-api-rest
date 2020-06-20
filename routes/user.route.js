const express = require("express");
const userController = require("../controller/user.controller");
const router = express.Router();

router.get("/", userController.GetAllUser);
router.get("/:id", userController.GetByID);
router.post("/", userController.Create);
router.put("/:id", userController.Update);
router.delete("/:id", userController.Delete);

module.exports = router;