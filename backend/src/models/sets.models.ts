import { CharacterInScene, DateKryst, SubText } from "./helpers.models"

export type TextType = {
    subtexts:SubText[]
    formatting: any[]
}

export type ScenesType = {
  nr: number,
  sceneIntensity?:number,
  idMalformation? :string,
  descTitle:string,
  shortDesc:string,
  date:DateKryst,
  characters:CharacterInScene[],
  pov:string,
  place:string[],
  didascalia:string,
  remarks:string,
  textId:string
}

export type CharactersType = {
    names:string[],
    birthDate: DateKryst,
    look:string,
}

export type PlacesType = {
    name: string
}

export type EventsType = {
    shortDesc: string,
}

export type IdeasType = {
    text: string,
}
