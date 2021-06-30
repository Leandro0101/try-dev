import { EndPointNotFoundMiddleware } from '@presentation/middlewares/endpoint-not-found'
import 'dotenv/config'
import express from 'express'
import { adaptMiddleware } from '../adapters/express-middleware'
import { middlewares } from './middlewares'
import setupRoutes from './routes'
const app = express()
app.use(express.json())
middlewares(app)
setupRoutes(app)
app.use('*', adaptMiddleware(new EndPointNotFoundMiddleware()))
export default app
