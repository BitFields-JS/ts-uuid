import { uuid16, uuid8 } from '../src/uuid';

// uuid16
test('uuid16 - return an string with length of 36 characters', () => {
  expect(uuid16().length).toBe(36);
});


// uuid8
test('uuid8 - return an string with length of 20 characters', () => {
  expect(uuid8().length).toBe(20);
});
