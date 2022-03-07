import moduleAlias from 'module-alias';
import path from 'path';

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

moduleAlias.addAlias('@modules', path.resolve(`${dir}/modules`));
moduleAlias.addAlias('@config', path.resolve(`${dir}/config`));
moduleAlias.addAlias('@shared', path.resolve(`${dir}/shared`));
moduleAlias.addAlias('@errors', path.resolve(`${dir}/errors`));
moduleAlias.addAlias('@utils', path.resolve(`${dir}/utils`));
