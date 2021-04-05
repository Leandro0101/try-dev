export interface IRemoveSolutionUseCase {
  execute: (solutionId: string) => Promise<void>
}
