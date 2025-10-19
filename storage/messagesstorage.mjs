const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

let nextMessageId = messages.length;

const getMessages = (() => {
  return messages;
});

const getMessageById = ((id) => {
  const message = messages.find((message) => {
    return (message.id === id)
  });

  if (message === undefined) {
    throw new Error("Message not found!");
  }

  return message;
});

const saveMessage = ((message) => {
  message.id = nextMessageId++;
  messages.push(message);
});

export default { getMessages, getMessageById, saveMessage };