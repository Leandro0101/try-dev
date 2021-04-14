import { Express, Router } from 'express'
import {
  loadUserByIdRoute, loadProblemsByUserRoute, removeSolutionRoute,
  editSolutionRoute, loadProblemByIdRoute, loadSolutionByIdRoute,
  addUserRoute, addProblemRoute, addSolutionRoute,
  addStarRoute, markProblemAsResolvedRoute,
  editProblemRoute
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
  editProblemRoute(routes)
}
