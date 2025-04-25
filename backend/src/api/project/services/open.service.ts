import path from "path"
import { readFile } from '../../../crud/crud';

const TEMPLATE_VERSION=0.1

const initTemplateConfigContent = {
    project_name: '?',
    template_version: TEMPLATE_VERSION,
    sets: [] as string[],
    config: 'test',
    template: 'novel | empty',
    last_seen: ['0001']
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
    // moreover I need to make it recursive for any template
    // here is works only for empty

    // what text give me? parsed content of asked file
    const text =  readFile(path.join('output', projectName, 'text',`0001.json`));

      // ok, how can I know what should I send?
      // core set is always text set, lastSeen should relate to text set and all accompanying files should be sent probably? Or maybe on demand only?

    return {
        config,
        text
    }
}

// in case the project doesnt exist server should send error to frontend
export const openProjectService = (name: string) => {
   return openProject(name)
};