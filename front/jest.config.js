/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/index.ts',
    '!**/node_modules/**',
    '!**/*.d.ts',
  ],
  transform: {
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  testMatch: [
    '**/*.test.{ts,tsx}'
  ],
  modulePathIgnorePatterns: ["cypress"]
};
