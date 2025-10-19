import { Router } from "express";
import messagesController from "../controllers/messagescontroller.mjs"

const messagesRouter = new Router();

messagesRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messagesController.getMessages() });
});

messagesRouter.get("/new", (req, res) => {
  res.render('messageform', { title: "Create Message" });
});

messagesRouter.post("/new", [
  messagesController.postMessage,
  (req, res) => { res.redirect("/") },
]);

messagesRouter.get("/message/:messageId", [
  messagesController.getMessage,
  (req, res) => { res.render("message", { message: req.message }) }
]);

export default messagesRouter;