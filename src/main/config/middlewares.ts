import { Express, Request, Response, NextFunction } from 'express'

export const middlewares = (app: Express): void => {
  app.use((request: Request, response: Response, next: NextFunction): void => {
    response.set('access-control-allow-origin', process.env.ALLOW_ORIGIN)
    response.set('access-control-allow-methods', '*')
    response.set('access-control-allow-headers', '*')
    next()
  })
}
