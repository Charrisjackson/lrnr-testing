// src/test/setup.ts

import '@testing-library/jest-dom';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Automatically cleanup after each test
afterEach(() => {
  cleanup();
});

// If you have any global mocks or other setup, add them here
// For example:
// global.fetch = vi.fn();

// You can also add custom matchers here
// For example:
// expect.extend({
//   toBeInRange(received, floor, ceiling) {
//     const pass = received >= floor && received <= ceiling;
//     return {
//       pass,
//       message: () => `expected ${received} ${pass ? 'not ' : ''}to be in range [${floor}, ${ceiling}]`,
//     };
//   },
// });