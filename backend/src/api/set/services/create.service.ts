import { resolveSet, SetsEnum } from '../../../utils/setResolver';
import path from 'path';
import { readFile, saveFile } from '../../../crud/crud';

type ReturnArg = {
  index: object | null,
  file: object
}

enum CreateSetModesEnum {
  createExistingSet= 'createExistingSet',
  createNewSet='createNewSet',
  createNewSingularFile='createNewSingularFile',
  updateExistinngSingularFile='updateExistinngSingularFile'
}

export const createSet= async (
  projectName:string,
  set:SetsEnum,
  fileName:string,
  fileData:object,
  mode:CreateSetModesEnum
)=>{
  console.log('openSet',projectName,set,fileName)
    const data: ReturnArg = {
      index: null,
      file: {}
    };

    switch(mode){
      case CreateSetModesEnum.createNewSet:
        // create new set - todo
    // will require data for set schema
    // example of use: user creates own
    // custom set
        console.log('createNewSet is not implemented yet!')
        break;
      case CreateSetModesEnum.createExistingSet:
        // create existing set - todo
    // will require name of existing schema
    // example of use: user for empy file wants
    // to add there for example idea set
        console.log('createNewSet is not implemented yet!')
        break;
      case CreateSetModesEnum.createNewSingularFile:
        // create new singular file
    // for existing set user creates new file
        const newFileName = Date.now().toString()
        saveFile(projectName, set,newFileName , resolveSet(set))
        const rawData = readFile(path.join('output', projectName, set, 'index.json'))
        console.log('---------------',rawData)
       // const jsonData = JSON.parse(rawData);
        rawData.files.push(newFileName+'.json')
        console.log('hhhhhhhhhhh',rawData)
        saveFile(projectName, set, 'index.json', rawData)
        break;
        case CreateSetModesEnum.updateExistinngSingularFile:
        // update existing singular file
    // for existing set user updates existing file
        saveFile(projectName, set, fileName, fileData)
        break;
      default:
        console.log('unknown mode:',mode)
        break;
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
 // includeIndex: boolean
  fileData:object,
 mode: CreateSetModesEnum
}

export const createSetService = (arg:OpenArgType) => {
    console.log('otrzymano:',arg)
    return createSet(
      arg.projectName,
      arg.set,
      arg.fileName,
     // arg.includeIndex
     arg.fileData,
     arg.mode
    
    )
};
