export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    // process `*.tsx` files with `ts-jest`
  },
  silient: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  // coverageDirectory: 'coverage',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
