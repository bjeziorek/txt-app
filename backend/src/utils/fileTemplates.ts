import { config } from "process"
import { saveFile, readFile } from "../crud/crud"
import path from "path"

const TEMPLATE_VERSION=0.1

const initTemplateConfigContent = {
    project_name: '?',
    template_version: TEMPLATE_VERSION,
    sets: [] as string[],
    config: 'test',
    model: 'novel | empty',
    last_seen: '0001'
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
} as const;

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

// przerobione generateInnerFiles - działa
export const initProject = (template:string,projectName:string)=>{
    let templateConfig= initTemplateConfigContent;
    templateConfig.project_name=projectName

    resolveTemplate(template).forEach(set=>{
            templateConfig.sets.push(set)
            saveFile(projectName, set, 'index.json', {files:['0001.json']})
            saveFile(projectName, set, '0001.json', {text:''})
        })    
    saveFile(projectName,'','config.json',templateConfig);
    saveFile(projectName,'','index.json',initTemplateJsonContent);
    templateConfig=initTemplateConfigContent;
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

// export const emptyTemplate:Template = {
//     generate:(projectName:string)=>{
//         generateInnerFiles([
//             Sets.text
//         ],projectName)
//     }
// }

// export const novelTemplate: Template = {
//     generate:(projectName:string)=>{
//         generateInnerFiles([
//             Sets.text, Sets.scenes, Sets.characters, Sets.places, Sets.events
//         ],projectName)
//     }
// }
