import { Express, Router } from 'express'
import addUserRoute from '../routes/add-user'
export default (app: Express): void => {
  const routes = Router()
  app.use('/api', routes)
  addUserRoute(routes)
}
