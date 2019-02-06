module.exports = {
  verbose: true,
  setupFiles: ['<rootDir>/.utils/setupTest.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
    '.*\\.js$':
      '<rootDir>/node_modules/jest-runtime/build/script_transformer.js'
  },
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|gif|png|mp4|mkv|avi|webm|swf|wav|mid)$':
      '<rootDir>/.utils/file.stub.js'
  },
  transformIgnorePatterns: ['./node_modules/'],
  moduleFileExtensions: ['js'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
