module.exports = {
    testEnvironment: "jsdom",
    testMatch:["<rootDir>/src/**/*.test.js"],
    automock: false,
    resetMocks: false,
    setupFiles: ["./jest.setup.js"],
};