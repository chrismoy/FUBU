const contains = (message, subString) => {
  return message.content.toLowerCase().includes(subString.toLowerCase());
};

const matches = (message, string) => {
  return message.content.toLowerCase() === string.toLowerCase();
};

const equals = (message, string, match = false) => {
  return (match ? matches(message, string) : contains(message, string));
};

export {
  contains,
  equals,
  matches
};
