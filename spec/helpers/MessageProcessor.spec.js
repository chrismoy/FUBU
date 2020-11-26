import MessageProcessor from 'helpers/MessageProcessor.js';
import MockDiscord from '../fixtures/MockDiscord.js';

describe('MessageProcessor', () => {
  let discord, message, processor;

  beforeEach(() => {
    discord = new MockDiscord;
    message = discord.getMessage();
    processor = new MessageProcessor(message);
  });

  describe('callAndResponse', () => {
    it('has an included substring', () => {
      processor.callAndResponse('trap', 'passing test');
      expect(message.channel.send).toBeCalledWith('passing test');
    });

    it('has a unincluded substring', () => {
      processor.callAndResponse('tr4pg0d', 'passing test');
      expect(message.channel.send).not.toHaveBeenCalled()
    });

    it('has a matching string', () => {
      processor.callAndResponse('trapgod', 'passing test', true);
      expect(message.channel.send).toBeCalledWith('passing test');
    });

    it('has a mismatched string', () => {
      processor.callAndResponse('tr4pg0d', 'passing test', true);
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
      expect(message.channel.send).toHaveBeenCalled();
    });

    it('has a unincluded substring', () => {
      processor.randomPhoto('tr4pg0d', 'passing test');
      expect(message.channel.send).not.toHaveBeenCalled()
    });

    it('has a matching string', () => {
      processor.randomPhoto('trapgod', 'dude', true);
      expect(message.channel.send).toHaveBeenCalled();
    });

    it('has a mismatched string', () => {
      processor.randomPhoto('tr4pg0d', 'passing test', true);
      expect(message.channel.send).not.toHaveBeenCalled()
    });
  });
});
