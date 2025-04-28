import { SetsEnum } from "../utils/setResolver";
import { TemplatesEnum } from "../utils/templateResolver";

export type SubText = {
    id: string,
    sceneId: string,
    text: string,
    comments:string[]
}

export type Presence = 'present' | 'mentioned';

export type CharacterInScene = {
  name:string,
  presence:Presence,
  emotions:string,
  goal:string,
  other:string[]
}

export type DateKryst = {
  year:number,
  month:number,
  day:number,
  hour:number,
  desc:string,
}

export type IndexType = {
  project_name: string,
  template_version: string,
  sets: SetsEnum[],
  config: string,
  template: TemplatesEnum,
  last_seen: string[]
}