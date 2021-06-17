export interface ITemplateData {
  path: string
  variables: object
}
export interface ITemplateGenerate {
  execute: (data: ITemplateData) => Promise<string>
}
