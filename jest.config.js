module.exports = {
  verbose: true,
  setupFiles: ['<rootDir>/.utils/setupTest.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  },
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|gif|png|mp4|mkv|avi|webm|swf|wav|mid)$':
      '<rootDir>/.utils/file.stub.js',
    'react-redux-notify/dist/ReactReduxNotify.css':
      '<rootDir>/.utils/file.stub.js'
  },
  transformIgnorePatterns: ['./node_modules/'],
  moduleFileExtensions: ['js'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
