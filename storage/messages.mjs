const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const getMessages = (() => {
  return messages;
});

const saveMessage = ((message) => {
  messages.push(message);
});

export default { getMessages, saveMessage };