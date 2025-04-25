import { CharactersType, EventsType, IdeasType, PlacesType, ScenesType, TextType } from '../../../models/sets.models';
import { createProject } from '../../../utils/fileTemplates';
import { SetsEnum } from '../../../utils/setResolver';

export type DataTypeMap = {
  [SetsEnum.text]: TextType;
  [SetsEnum.scenes]: ScenesType;
  [SetsEnum.characters]: CharactersType;
  [SetsEnum.places]: PlacesType;
  [SetsEnum.events]: EventsType;
  [SetsEnum.ideas]: IdeasType;
};

export type CreateSetArgType<T extends SetsEnum> = {
    name: T;
    data: DataTypeMap[T];
  };

export const createExistingSetService = <T extends SetsEnum>(arg:CreateSetArgType<T>): void => {
console.log(arg.name,arg.data)
    // initProject(template,arg.name)
};