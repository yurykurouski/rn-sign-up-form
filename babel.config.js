module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          assets: './src/assets',
          constants: './src/constants',
          types: './src/types',
        },
      },
    ],
  ],
};
