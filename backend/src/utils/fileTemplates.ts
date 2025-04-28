import { saveFile, readFile } from "../crud/crud"
import path from "path"
import { resolveSet } from "./setResolver"
import { resolveTemplate, TemplatesEnum } from "./templateResolver"
import { IndexType } from "../models/helpers.models"

const TEMPLATE_VERSION="0.1"

const initTemplateConfigContent: IndexType = {
    project_name: '?',
    template_version: TEMPLATE_VERSION,
    sets: [],
    config: 'test',
    template: TemplatesEnum.empty,
    last_seen: ['0001.json']
}

const initTemplateJsonContent = {
    files:['config.json'],
    directories: ['lista folderów']
}

export const openProject = (projectName:string)=>{
    const data = null;
    const filePath = path.join('output', projectName,'config.json');

    const config = readFile(path.join('output', projectName,'config.json'));

    // TODO replace `0001.json` to last_seen from config
    const text =  readFile(path.join('output', projectName, 'text',`0001.json`));

    return {
        config,
        text
    }
}

export const createProject = (template:TemplatesEnum,projectName:string)=>{
    // assign default content for config file, requires filling some filelds
    let templateConfig= initTemplateConfigContent;
    // filling project_name field
    templateConfig.project_name=projectName
    templateConfig.template=template
    // basing on templete name, resolveTemplate returns array with sets
    resolveTemplate(template).forEach(set=>{
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
    templateConfig=initTemplateConfigContent;
}
