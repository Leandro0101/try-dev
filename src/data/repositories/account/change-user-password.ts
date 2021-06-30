export interface IChangeUserPasswordRepository {
  execute: (newPassword: string, email: string) => Promise<void>
}
