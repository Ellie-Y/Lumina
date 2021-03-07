const express = require("express");
const router = express.Router();
const userService = require("../../services/userServices");
const sendResult = require("../utils/resultFormat");

//  Get all user data
router.get("/", async (req, res) => {
  const type = req.query.type || "";
  const limit = req.query.limit || 10;
  const result = await userService.getUsers(type, limit);
  res.send(sendResult.returnData(result));
});

// Update user data
router.put("/:id", async (req, res) => {
  const result = await userService.updateMovie(req.params.id, req.body);
  res.send(sendResult.returnData(result));
});


module.exports = router;
