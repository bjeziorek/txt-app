import { SetsEnum } from "./setResolver";

export enum TemplatesEnum {
    empty='empty',
    novel='novel'
}

export const TEMPLATES = {
    empty: [SetsEnum.text],
    novel: [SetsEnum.text, SetsEnum.scenes, SetsEnum.characters, SetsEnum.places, SetsEnum.events, SetsEnum.ideas ],
} as const;

export const resolveTemplate = (template:TemplatesEnum)=>{
    if(template===TemplatesEnum.empty){
      return TEMPLATES.empty
    }
    if(template===TemplatesEnum.novel){
       return TEMPLATES.novel
    }
    console.log('template poza scope:',template)
    return TEMPLATES.empty;
}