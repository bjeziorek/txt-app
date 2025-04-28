import { SetsEnum } from '../../../utils/setResolver';
import path from 'path';
import { readFile } from '../../../crud/crud';
import { IndexType } from '../../../models/helpers.models';

type ReturnArg = {
  index: object | null,
  file: object
}

export const openSet= (projectName:string,set:SetsEnum,fileName:string,includeIndex:boolean)=>{
  console.log('openSet',projectName,set,fileName)
    const data: ReturnArg = {
      index: null,
      file: {}
    };

    if(includeIndex){
      data.index=readFile(path.join('output', projectName, set, 'index.json'))
    } else {
      data.index=null;
    }

    if(!fileName){
      // I read only first lastSeen, but in future I should be able to send more
     // const file:IndexType = JSON.parse(path.join('output', projectName, set, 'index.json'))
      //fileName=file.last_seen[0]?file.last_seen[0]:"0001.json"
      fileName='0001.json'
    }
      data.file = readFile(path.join('output', projectName, set, fileName))
    console.log('data',data)
    return data
}

type OpenArgType = {
  projectName: string,
  set: SetsEnum,
  fileName: string,
  includeIndex: boolean
}

export const openSetService = (arg:OpenArgType) => {
    console.log('otrzymano:',arg)
    return openSet(arg.projectName,arg.set,arg.fileName,arg.includeIndex)
};
