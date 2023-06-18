export default {
    verbose: true,
    testEnvironment: 'node',
    globalTeardown: "./src/tests/teardown.js",
    testTimeout: 10000,
    transform: {} // see: https://jestjs.io/docs/ecmascript-modules
};