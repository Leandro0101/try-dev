import { Express, Router } from 'express'
import addUserRoute from '../routes/add-user'
import addProblemRoute from '../routes/add-problem'
export default (app: Express): void => {
  const routes = Router()
  app.use('/api', routes)
  addUserRoute(routes)
  addProblemRoute(routes)
}
