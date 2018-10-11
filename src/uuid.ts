import * as crypto from 'crypto';

/**
 * Generate version 4 universally unique identifier
 * Bytes sizes are 4, 2, 2, 2, 6 with sum of 16
 * @returns {string}
 */
export const uuid16 = () => {
  return [4, 2, 2, 2, 6].map(
    (size: number) => crypto.randomBytes(size).toString('hex')
  ).join('-');
}

/**
 * Generate version 4 universally unique identifier.
 * Bytes sizes are 2, 1, 1, 1, 3 with a sum of 8
 * @returns {string}
 */
export const uuid8 = () => {
  return [2, 1, 1, 1, 3].map(
    (size: number) => crypto.randomBytes(size).toString('hex')
  ).join('-');
}
