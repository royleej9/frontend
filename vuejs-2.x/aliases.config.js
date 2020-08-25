const path = require('path');
const fs = require('fs');
const prettier = require('prettier');

const aliases = {
  '@': 'src',
  '@assets': 'src/assets',
  '@apis': 'src/apis',
  '@libs': 'src/libs',
  '@components': 'src/libs/components',
  '@directives': 'src/libs/directives',
  '@mixins': 'src/libs/mixins',
  '@utils': 'src/libs/utils',
  '@router': 'src/router',
  '@store': 'src/store',
  '@views': 'src/views',
  '@guide': 'src/views/guide',
  '@login': 'src/views/login',
  '@main': 'src/views/main',
  '@menus': 'src/views/menus',
  '@menu1': 'src/views/menus/menu1',
  '@menu2': 'src/views/menus/menu2',
  '@menu3': 'src/views/menus/menu3',
};

module.exports = {
  webpack: {},
  jest: {},
  jsconfig: {},
};

for (const alias in aliases) {
  const aliasTo = aliases[alias];
  module.exports.webpack[alias] = resolveSrc(aliasTo);
  const aliasHasExtension = /\.\w+$/.test(aliasTo);
  module.exports.jest[`^${alias}$`] = aliasHasExtension
    ? `<rootDir>/${aliasTo}`
    : `<rootDir>/${aliasTo}/index.js`;
  module.exports.jest[`^${alias}/(.*)$`] = `<rootDir>/${aliasTo}/$1`;
  module.exports.jsconfig[alias + '/*'] = [aliasTo + '/*'];
  module.exports.jsconfig[alias] = aliasTo.includes('/index.')
    ? [aliasTo]
    : [
        aliasTo + '/index.js',
        aliasTo + '/index.json',
        aliasTo + '/index.vue',
        aliasTo + '/index.scss',
        aliasTo + '/index.css',
      ];
}

const jsconfigTemplate = require('./jsconfig.template.js') || {};
const jsconfigPath = path.resolve(__dirname, 'jsconfig.json');

fs.writeFile(
  jsconfigPath,
  prettier.format(
    JSON.stringify({
      ...jsconfigTemplate,
      compilerOptions: {
        ...(jsconfigTemplate.compilerOptions || {}),
        paths: module.exports.jsconfig,
      },
    }),
    {
      ...require('./.prettierrc'),
      parser: 'json',
    }
  ),
  (error) => {
    if (error) {
      console.error(
        'Error while creating jsconfig.json from aliases.config.js.'
      );
      throw error;
    }
  }
);

function resolveSrc(_path) {
  return path.resolve(__dirname, _path);
}
