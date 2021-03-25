import { Express, Router } from 'express'
import addUserRoute from '../routes/add-user'
import addProblemRoute from '../routes/add-problem'
import addSolutionRoute from '../routes/add-solution'
import loadProblemByIdRoute from '../routes/load-problem-by-id'
export default (app: Express): void => {
  const routes = Router()
  app.use('/api', routes)
  addUserRoute(routes)
  addProblemRoute(routes)
  addSolutionRoute(routes)
  loadProblemByIdRoute(routes)
}
