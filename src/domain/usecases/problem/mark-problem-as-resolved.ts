export interface IMarkProblemAsResolvedUseCase {
  execute: (problemId: string) => Promise<void>
}
