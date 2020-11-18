import { contains, equals, matches } from 'actions/equality.js';

describe('equality', () => {
  let message;

  beforeEach(() => {
    message = { content: "I'm trapgod" };
  });

  describe('contains', () => {
    it('does not match missing substring', () => {
      expect(contains(message, "tr4pg0d")).toEqual(false);
    });

    it('matches present substring', () => {
      expect(contains(message, "trapgod")).toEqual(true);
    });

    it('matches case insensitive substring', () => {
      expect(contains(message, "TrApGoD")).toEqual(true);
    });
  });

  describe('matches', () => {
    it('does not match incomplete substring', () => {
      expect(matches(message, "trapgod")).toEqual(false);
    });

    it('matches exact string', () => {
      expect(matches(message, "I'm trapgod")).toEqual(true);
    });

    it('matches case insensitive string', () => {
      expect(matches(message, "I'm TrApGoD")).toEqual(true);
    });
  });

  describe('equals', () => {
    it('returns match for match === true', () => {
      expect(equals(message, "trapgod", true)).toEqual(false);
    });

    it('returns match for match === false', () => {
      expect(equals(message, "trapgod")).toEqual(true);
    });
  });
});
