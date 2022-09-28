var express = require("express");
const { getUserData } = require("../services/user.service");
var router = express.Router();

router.get("/get-user", async (req, res) => {
  let email = req?.email;
  let response = await getUserData(email);
  res.json(response);
});

module.exports = router;