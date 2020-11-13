import { equals } from './equality.js';

const callAndResponse = (message, call, response, match = false) => {
  if (!equals(call, match)) return;

  message.channel.send(call);
}

export default callAndResponse;
