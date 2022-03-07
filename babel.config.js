let dir = '';

switch (process.env.NODE_ENV) {
  case 'production':
  case 'homolog':
    dir = 'dist';
    break;
  default:
    dir = 'src';
    break;
}

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@modules': [`./${dir}/modules`],
          '@config': [`./${dir}/config`],
          '@shared': [`./${dir}/shared`],
          '@errors': [`./${dir}/shared/errors`],
          '@utils': [`./${dir}/utils`],
        },
      },
    ],
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
