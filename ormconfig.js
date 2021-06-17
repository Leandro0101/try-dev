const environment = process.env.NODE_ENV === 'development'
const rootDir = environment ? 'src' : 'dist'
module.exports = {
  type: 'postgres',
  host: 'database',
  port: 5432,
  username: 'root',
  password: 'toor123',
  database: 'trydev',
  entities: [`${rootDir}/infra/typeorm/models/*{.js,.ts}`],
  migrations: [`${rootDir}/infra/typeorm/migrations/*{.js,.ts}`],
  cli: {
    migrationsDir: `${rootDir}/infra/typeorm/migrations`
  }
}
