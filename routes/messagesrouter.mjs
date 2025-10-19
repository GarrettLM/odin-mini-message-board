import { Router } from "express";
import messagesController from "../controllers/messagescontroller.mjs"

const messagesRouter = new Router();

messagesRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messagesController.getMessages() });
});

messagesRouter.get("/new", (req, res) => {
  res.render('messageform', { title: "Create Message" });
});

messagesRouter.post("/new", (req, res) => {
  res.redirect("/");
});

export default messagesRouter;