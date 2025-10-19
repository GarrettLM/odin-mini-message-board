import messagesStorage from '../storage/messages.mjs';

const getMessages = messagesStorage.getMessages;

const postMessage = ((req, res, next) => {
  messagesStorage.saveMessage({
    user: req.body.user,
    text: req.body.text,
    date: new Date(),
  });

  next();
});

export default { getMessages, postMessage };