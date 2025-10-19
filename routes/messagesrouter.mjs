import { Router } from "express";
import messagesController from "../controllers/messagescontroller.mjs"

const messagesRouter = new Router();

messagesRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messagesController.getMessages() });
});

export default messagesRouter;