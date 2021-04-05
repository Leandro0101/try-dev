import { Express, Router } from 'express'
import addUserRoute from '../routes/add-user'
import addProblemRoute from '../routes/add-problem'
import addSolutionRoute from '../routes/add-solution'
import loadProblemByIdRoute from '../routes/load-problem-by-id'
import loadSolutionByIdRoute from '../routes/load-solution-by-id'
import addStarRoute from '../routes/add-star'
import loadUserByIdRoute from '../routes/load-user-by-id'
import loadProblemsByUserRoute from '../routes/load-problems-by-user'
import markProblemAsResolvedRoute from '../routes/mark-problem-as-resolved'
import removeProblemRoute from '../routes/remove-solution'

export default (app: Express): void => {
  const routes = Router()
  app.use('/api', routes)
  addUserRoute(routes)
  addProblemRoute(routes)
  addSolutionRoute(routes)
  loadProblemByIdRoute(routes)
  loadSolutionByIdRoute(routes)
  addStarRoute(routes)
  loadUserByIdRoute(routes)
  loadProblemsByUserRoute(routes)
  markProblemAsResolvedRoute(routes)
  removeProblemRoute(routes)
}
