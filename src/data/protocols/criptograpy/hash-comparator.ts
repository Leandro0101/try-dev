export interface IHashComparator {
  compare: (plaintext: string, ciphertext: string) => Promise<boolean>
}
