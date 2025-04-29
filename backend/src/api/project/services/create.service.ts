import { saveFile } from "../../../crud/crud"
import { TEMPLATE_VERSION } from "../../../models/templates.models"
import { resolveSet, SetsEnum } from "../../../utils/setResolver"
import { resolveTemplate, TemplatesEnum } from "../../../utils/templateResolver"

type CreateProjectArgType = {
    name: string,
    template: TemplatesEnum
}

type InitTemplateConfigContentType = {
    project_name: string,
    template_version: string,
    sets: string[],
    template: TemplatesEnum,
    last_seen: string[]
};

const initTemplateConfigContent: InitTemplateConfigContentType = {
    project_name: '?',
    template_version: TEMPLATE_VERSION,
    sets: [] as string[],
    template: TemplatesEnum.empty,
    last_seen: ['0001.json']
} as const;

// this scructure requires rebuilding
// I don't need directories as I have them listed in sets in config
// or maybe I should mive them here... not sure yet
const initTemplateJsonContent = {
    files:['config.json'],
    directories: ['lista folderów']
}

export const createProject = (template:TemplatesEnum,projectName:string)=>{
    console.log('teeeeeeest', template,projectName)
    // assign default content for config file, requires filling some filelds
    let templateConfig= {...initTemplateConfigContent};
    templateConfig.sets=[];
    // filling project_name field
    templateConfig.project_name=projectName
    templateConfig.template=template
    // jak jest osobna stała na templates to on nie multiplikuje
    const templates = resolveTemplate(template)
    console.log('TEMPLATES:',templates)
    // basing on templete name, resolveTemplate returns array with sets
    templates.forEach((set: SetsEnum)=>{
        // filling sets field
            templateConfig.sets.push(set)
            // saves file content (4th arg) to file (3rd arg)
            saveFile(projectName, set, 'index.json', {files:['0001.json']})
            // resolveSet returns dedicated template for given set
            saveFile(projectName, set, '0001.json', resolveSet(set))
        })    
    saveFile(projectName,'','config.json',templateConfig);
    saveFile(projectName,'','index.json',initTemplateJsonContent);
    console.log('initTemplateConfigContent',initTemplateConfigContent)
    console.log('templateConfig',templateConfig)
    templateConfig={...initTemplateConfigContent};
}

export const createProjectService = (arg:CreateProjectArgType): void => {
    console.log(arg.name,arg.template)
    createProject(arg.template,arg.name)
};