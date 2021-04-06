import { Express, Router } from 'express'
import {
  addUserRoute, addProblemRoute, addSolutionRoute,
  addStarRoute, markProblemAsResolvedRoute,
  editSolutionRoute, loadProblemByIdRoute, loadSolutionByIdRoute,
  loadUserByIdRoute, loadProblemsByUserRoute, removeSolutionRoute
} from '../routes'

export default (app: Express): void => {
  const routes = Router()
  app.use('/api', routes)
  addUserRoute(routes)
  addProblemRoute(routes)
  addSolutionRoute(routes)
  loadProblemByIdRoute(routes)
  loadSolutionByIdRoute(routes)
  removeSolutionRoute(routes)
  addStarRoute(routes)
  loadUserByIdRoute(routes)
  loadProblemsByUserRoute(routes)
  markProblemAsResolvedRoute(routes)
  editSolutionRoute(routes)
}
