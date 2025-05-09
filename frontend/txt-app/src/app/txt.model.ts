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

export type Schema = {
  "nr": number,
  "sceneIntensity"?:number,
  "idMalformation"? :string,
  "descTitle":string,
  "shortDesc":string,
  "date":DateKryst,
  "characters":Char[],
  "pov":string,
  "place":string[],
  "didascalia":string,
  "remarks":string,
   [key: string]: any;
};