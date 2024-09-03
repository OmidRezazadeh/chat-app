
const {Router}= require("express");
const AuthController = require("../controller/AuthController");
const router =new Router();
router.post("/store", AuthController.register);
router.post("/login",AuthController.login);
module.exports = router;
