export default {
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  roots: ["<rootDir>"],
  moduleNameMapper: {
    "^Logic/(.*)$": "<rootDir>/logic/$1",
    "^Web/(.*)$": "<rootDir>/web/$1",
    "^Domain/(.*)$": "<rootDir>/domain/$1",
  },
};
