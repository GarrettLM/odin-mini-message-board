import messagesStorage from '../storage/messagesstorage.mjs';

const getMessages = messagesStorage.getMessages;

const postMessage = ((req, res, next) => {
  messagesStorage.saveMessage({
    user: req.body.user,
    text: req.body.text,
    date: new Date(),
  });

  next();
});

const getMessage = ((req, res, next) => {
  try {
    const messageId = parseInt(req.params.messageId);
    const message = messagesStorage.getMessageById(messageId);
    req.message = message;
    next();
  } catch (e) {
    next(e);
  }
});

export default { getMessages, getMessage, postMessage };