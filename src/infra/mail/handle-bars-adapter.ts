import { ITemplateData, ITemplateGenerate } from '@data/protocols'
import handlebars from 'handlebars'
import fs from 'fs'

export class HandleBarsAdapter implements ITemplateGenerate {
  async execute (data: ITemplateData): Promise<string> {
    const templateFileContent = fs.readFileSync(data.path).toString('utf8')
    const mailTemplateParse = handlebars.compile(templateFileContent)
    const html = mailTemplateParse(data.variables)
    return await new Promise(resolve => resolve(html))
  }
}
