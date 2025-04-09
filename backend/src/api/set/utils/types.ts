// general types

export type SetsData = {
    sets: SetData[]
}

export type SetData = {
    name: string,
    fields: SetFields[]
}

export type SetFields = {  // to będzie generikiem, bo każdy set ma swoje
    name: string,
    type: string | SetFields[],
    value: string | null,
    isFieldRequired: boolean
}


// types for sets

export type TextSet = {
    content: string,
    formatting: object,
}

type CharacterPresence = 'present' | 'mentioned';

export type Char = {
    name:string,
    presence:CharacterPresence,
    emotions:string,
    goal:string,
    other:string[]
  }
  
  type DateKryst = {
    year:number,
    month:number,
    day:number,
    hour:number,
    desc:string,
    [key: string]: any;
  }

export type ScenetSet = {
    content: string,
    nr: number,
    sceneIntensity?:number,
    idMalformation? :string,
    descTitle:string,
    shortDesc:string,
    date:DateKryst,
    characters:Char[],
    pov:string,
    place:string[],
    didascalia:string,
}