const environment = process.env.NODE_ENV === 'development'
const rootDir = environment ? 'src' : 'dist'
module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [`${rootDir}/infra/typeorm/models/*{.js,.ts}`],
  migrations: [`${rootDir}/infra/typeorm/migrations/*{.js,.ts}`],
  cli: {
    migrationsDir: `${rootDir}/infra/typeorm/migrations`
  }
}
