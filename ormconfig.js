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
  type: 'postgres',
  port: process.env.POSTGRES_PORT,
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  migrations: [`./${dir}/database/migrations/*.*`],
  seeds: ['src/seeds/*.*'],
  entities: [`./${dir}/modules/**/entities/*.*`],
  cli: {
    migrationsDir: `./${dir}/database/migrations`,
  },
};
