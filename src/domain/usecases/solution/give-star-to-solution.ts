export interface IGiveStarToSolutionUseCase {
  execute: (solutionId: string) => Promise<void>
}
