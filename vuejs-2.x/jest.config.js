module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: require('./aliases.config').jest,
  collectCoverage: true,
  // coverageReporters: ['html'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
};
