const SnakeNamingStrategy = require('typeorm-naming-strategies')
  .SnakeNamingStrategy
module.exports = {
  type: 'postgres',
  host: 'database',
  port: 5432,
  username: 'root',
  password: 'toor123',
  database: 'trydev',
  entities: ['./src/data/models/**.ts'],
  migrations: ['./src/infra/typeorm/migrations/**.ts'],
  cli: {
    migrationsDir: './src/infra/typeorm/migrations'
  },
  namingStrategy: new SnakeNamingStrategy()
}