
const {Router}= require("express");
const AuthController = require("../controller/AuthController");
const router =new Router();
router.post("/store", AuthController.register);
module.exports = router;
