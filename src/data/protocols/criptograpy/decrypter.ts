export interface IDecrypter {
  decrypt: (value: string, key: string) => Promise<string>
}
