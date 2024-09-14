
const {Router}= require("express");
const ChatController = require("../controller/ChatController");
const {authenticated} = require("../middleware/auth");
const chatRouter =new Router();
chatRouter.post("/store",authenticated, ChatController.store);

module.exports = chatRouter;