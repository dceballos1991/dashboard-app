const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: {
    "^.+\\.(svg)$": "<rootDir>/__mocks__/svgMock.js",
  },
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
    "!**/*.cy.*",
  ],
};

// ref https://github.com/vercel/next.js/discussions/31152#discussioncomment-1697047
// createJestConfig returns an async function that returns a jest config -
// so instead of doing this:
// module.exports = createJestConfig(customJestConfig)

// Take the returned async function...
const asyncConfig = createJestConfig(customJestConfig);

// and wrap it...
module.exports = async () => {
  const config = await asyncConfig();
  return config;
};
