module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@app': './src',
          '@components': './src/components',
          '@services': './src/services',
          '@utilities': './src/utilities'
        }
      }
    ]
  ]
};
