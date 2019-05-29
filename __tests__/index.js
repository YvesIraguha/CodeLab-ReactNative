import addNumbers from '../src/index';

test('should test one number', () => {
  expect(addNumbers(2, 3)).toEqual(5);
});
