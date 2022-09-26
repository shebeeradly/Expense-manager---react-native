var express = require('express');
const { userRegister } = require('../services/authentication.service');
var router = express.Router();

router.post('/register', async (req, res, next) => {
  let body = req.body;
  let response = await userRegister(body);
  res.json(response);
});

module.exports = router;
