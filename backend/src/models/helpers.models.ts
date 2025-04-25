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
