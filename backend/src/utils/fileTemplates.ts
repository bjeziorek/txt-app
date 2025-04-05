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

enum Sets {
    text='text',
    scenes='scenes',
    characters='characters',
    places='places',
    events='events',
    ideas='ideas'
}


export const TEMPLATES = {
    empty: [Sets.text],
    novel: [Sets.text, Sets.scenes, Sets.characters, Sets.places, Sets.events, Sets.ideas ],
} //as const;

const resolveTemplate = (template:string)=>{
    if(template==='empty'){
      return TEMPLATES.empty
    }
    if(template==='novel'){
       return TEMPLATES.novel
    }
    console.log('template poza scope:',template)
    return TEMPLATES.empty;
}

// przerobione generateInnerFiles
export const initProject = (template:string,projectName:string)=>{
    saveFile(projectName,'','config.json',initTemplateConfigContent);
    saveFile(projectName,'','index.json',initTemplateJsonContent);
    resolveTemplate(template).forEach(set=>{
            saveFile(projectName, set, 'index.json', {files:['0001.json']})
            saveFile(projectName, set, '0001.json', {text:''})
        })
}

// dousunięcia jak to powyżej zacznie działac
export const generateInnerFiles = (template:string[],projectName:string)=>{
    saveFile(projectName,'','config.json',initTemplateConfigContent);
    saveFile(projectName,'','index.json',initTemplateJsonContent);
    template.forEach(set=>{
            saveFile(projectName, set, 'index.json', {files:['0001.json']})
            saveFile(projectName, set, '0001.json', {text:''})
        })
}


type SubText = {
    id: number,
    text: string,
    comments:string[]
}

type TextSet = {
    subtexts:SubText[]
    formatting: any[]
}

type SceneSet = {

}

type CharacterSet = {

}

type PlaceSet = {

}

type EventSet = {
    
}



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
