import MessageProcessor from 'helpers/MessageProcessor.js';
import MockDiscord from '../fixtures/MockDiscord.js';

describe('MessageProcessor', () => {
  let discord, message, processor;

  beforeEach(() => {
    discord = new MockDiscord;
    message = discord.getMessage();
    processor = new MessageProcessor(message);
  });

  it('Should be able to call new() on MessageProcessor', () => {
    expect(processor).toBeTruthy();
  });

  describe('callAndRespond', () => {
    it('has an included substring', () => {
      processor.callAndRespond('trap', 'passing test');
      expect(message.channel.send).toBeCalledWith('passing test');
    });

    it('has an unincluded substring', () => {
      processor.callAndRespond('tr4pg0d', 'passing test');
      expect(message.channel.send).not.toHaveBeenCalled()
    });

    it('has a matching string', () => {
      processor.callAndRespond('trapgod', 'passing test', true);
      expect(message.channel.send).toBeCalledWith('passing test');
    });

    it('has a mismatched string', () => {
      processor.callAndRespond('tr4pg0d', 'passing test', true);
      expect(message.channel.send).not.toHaveBeenCalled()
    });
  });

  describe('randomPhoto', () => {
    let content;

    beforeEach(() => {
      content = `${message.author}, this dude supports the JRA:`;
    });

    it('has an included substring', () => {
      processor.randomPhoto('trap', 'dude');
      expect(message.channel.send).toHaveBeenCalledTimes(1);
    });

    it('has an unincluded substring', () => {
      processor.randomPhoto('tr4pg0d', 'passing test');
      expect(message.channel.send).not.toHaveBeenCalled()
    });

    it('has a matching string', () => {
      processor.randomPhoto('trapgod', 'dude', true);
      expect(message.channel.send).toHaveBeenCalledTimes(1);
    });

    it('has a mismatched string', () => {
      processor.randomPhoto('tr4pg0d', 'passing test', true);
      expect(message.channel.send).not.toHaveBeenCalled()
    });
  });
});
