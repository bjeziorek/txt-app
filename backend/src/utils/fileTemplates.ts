import { config } from "process"
import { saveFile } from "./crud"

const TEMPLATE_VERSION=0.1

const initTemplateConfigContent = {
    project_name: '?',
    template_version: TEMPLATE_VERSION,
    config: 'test',
    model: 'novel | empty'
}

const initTemplateJsonContent = {
    files:['config.json'],
    directories: ['lista folderów']
}

const generateInnerFiles = (template:string[],projectName:string)=>{
    saveFile(projectName,'','config.json',initTemplateConfigContent);
    saveFile(projectName,'','index.json',initTemplateJsonContent);
    template.forEach(set=>{
            saveFile(projectName, set, 'index.json', {files:['0001.json']})
            saveFile(projectName, set, '0001.json', {text:''})
        })
}

enum Sets {
    text='text',
    scenes='scenes',
    characters='characters',
    places='places',
    events='events'
}

export const TEMPLATES = {
    empty: [Sets.text],
    novel: [Sets.text, Sets.scenes, Sets.characters, Sets.places, Sets.events],
} //as const;

type Template = {
    generate: (projectName:string)=>void
}

export const emptyTemplate:Template = {
    generate:(projectName:string)=>{
        generateInnerFiles([
            Sets.text
        ],projectName)
    }
}

export const novelTemplate: Template = {
    generate:(projectName:string)=>{
        generateInnerFiles([
            Sets.text, Sets.scenes, Sets.characters, Sets.places, Sets.events
        ],projectName)
    }
}
