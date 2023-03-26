import Exchange from '../src/js/exchange.js';

describe('Template', () => {
  let userCash;

  beforeEach(() => {
    userCash = new Exchange();
  });

  test('should collect input from user', () => {
    expect(userCash.userInput()).toEqual(50);
  });
});