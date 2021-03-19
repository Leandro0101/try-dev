export interface IHashComparer {
  compare: (plaintext: string, ciphertext: string) => Promise<boolean>
}
