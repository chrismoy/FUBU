import sinon from '../../node_modules/sinon/pkg/sinon.js';

import MessageProcessor from 'helpers/MessageProcessor.js';

describe('MessageProcessor', () => {
  let fakeSend, message, processor;

  beforeEach(() => {
    message = { content: 'trapgod' };
    processor = new MessageProcessor(message);

    fakeSend = sinon.fake();
    processor.sendMessage = sinon.replace(processor, 'sendMessage', fakeSend);
  });

  it('Should be able to call new() on MessageProcessor', () => {
    expect(processor).toBeTruthy();
  });

  describe('callAndRespond', () => {
    it('has an included substring', () => {
      processor.callAndRespond('trap', 'passing test');
      expect(fakeSend.firstArg).toEqual('passing test');
    });

    it('has an unincluded substring', () => {
      processor.callAndRespond('tr4pg0d', 'passing test');
      expect(fakeSend.callCount).toEqual(0);
    });

    it('has a matching string', () => {
      processor.callAndRespond('trapgod', 'passing test', true);
      expect(fakeSend.firstArg).toEqual('passing test');
    });

    it('has a mismatched string', () => {
      processor.callAndRespond('tr4pg0d', 'passing test', true);
      expect(fakeSend.callCount).toEqual(0);
    });
  });

  describe('randomPhoto', () => {
    let content, imgUrl, searchTerm;

    beforeEach(() => {
      content = `${message.author}, this dude supports the JRA:`;
      searchTerm = 'dude';
      imgUrl = `https://source.unsplash.com/random?${searchTerm}`;
    });

    it('has an included substring', () => {
      processor.randomPhoto('trap', searchTerm);
      expect(fakeSend.firstArg).toEqual(content);

      expect(fakeSend.lastArg.image).toEqual(
        expect.objectContaining({
          url: expect.stringContaining(imgUrl),
        })
      );
    });

    it('has an unincluded substring', () => {
      processor.randomPhoto('tr4pg0d', 'passing test');
      expect(fakeSend.callCount).toEqual(0);
    });

    it('has a matching string', () => {
      processor.randomPhoto('trapgod', searchTerm, true);
      expect(fakeSend.firstArg).toEqual(content);

      expect(fakeSend.lastArg.image).toEqual(
        expect.objectContaining({
          url: expect.stringContaining(imgUrl),
        })
      );
    });

    it('has a mismatched string', () => {
      processor.randomPhoto('tr4pg0d', 'passing test', true);
      expect(fakeSend.callCount).toEqual(0);
    });
  });
});
