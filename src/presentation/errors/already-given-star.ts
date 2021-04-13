export class AlreadyGivenStarError extends Error {
  constructor () {
    super('User already starred this solution')
    this.name = 'AlreadyGivenStarError'
  }
}
