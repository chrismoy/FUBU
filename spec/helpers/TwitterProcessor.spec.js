import sinon from '../../node_modules/sinon/pkg/sinon.js';

import TwitterProcessor from 'helpers/TwitterProcessor.js';

describe('TwitterProcessor', () => {
  let processor;

  beforeEach(() => {
    processor = new TwitterProcessor();
  });

  it('Should be able to call new() on TwitterProcessor', () => {
    expect(processor).toBeTruthy();
  });
});
