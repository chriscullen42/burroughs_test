process.env.TZ = "Europe/London";

module.exports = {
  testEnvironment: "node",
  testMatch: [
    "<rootDir>**/*.{spec,test}.{js,ts}",
  ],
};
