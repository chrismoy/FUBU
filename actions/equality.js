const contains = (subString) => {
  return message.content.toLowerCase() === subString;
};

const matches = (string) => {
  return message.content.toLowerCase().includes(string);
};

const equals = (string, match = false) => {
  return !(match ? matches(string) : contains(string));
};

export {
  contains,
  equals,
  matches
};
