import { CharactersType, EventsType, IdeasType, PlacesType, ScenesType, TextType } from "../models/sets.models";

export enum SetsEnum {
    text='text',
    scenes='scenes',
    characters='characters',
    places='places',
    events='events',
    ideas='ideas'
}

export const SET_TEXT_DEFAULT: TextType = {
    subtexts:[
        {
            id: '1',
            sceneId: '1',
            text: '',
            comments:['']
        }
    ],
    formatting: []
} as const;

export const SET_SCENES_DEFAULT: ScenesType = {
    nr: 0,
    sceneIntensity: 0,
    idMalformation: '',
    descTitle: '',
    shortDesc: '',
    date: {
        year:0,
        month:0,
        day:0,
        hour:0,
        desc:'',
    },
    characters: [
        {
        name:'',
        presence:'present',
        emotions:'',
        goal:'',
        other:[]
        }
    ],
    pov: '',
    place: [],
    didascalia: '',
    remarks: '',
    textId: '',
} as const;

export const SET_CHARACTER_DEFAULT: CharactersType = {
    names:[''],
    birthDate: {
        year:0,
        month:0,
        day:0,
        hour:0,
        desc:'',
    },
    look:'',
} as const;

export const SET_PLACE_DEFAULT: PlacesType = {
    name:'',
} as const;

export const SET_EVENT_DEFAULT: EventsType = {
    shortDesc:'',
} as const;

export const SET_IDEA_DEFAULT: IdeasType = {
    text:'',
} as const;

export const SETS = {
    text: SET_TEXT_DEFAULT,
    scenes: SET_SCENES_DEFAULT,
    characters: SET_CHARACTER_DEFAULT,
    places: SET_PLACE_DEFAULT,
    events: SET_EVENT_DEFAULT,
    ideas:SET_IDEA_DEFAULT
} as const;



export const resolveSet = (set:SetsEnum)=>{
    if(set===SetsEnum.characters){
        return SETS.characters;
    }
    if(set===SetsEnum.events){
        return SETS.events;
    }
    if(set===SetsEnum.ideas){
        return SETS.ideas;
    }
    if(set===SetsEnum.places){
        return SETS.places;
    }
    if(set===SetsEnum.scenes){
        return SETS.scenes;
    }
    if(set===SetsEnum.text){
        return SETS.text;
    }
    console.log('set poza scope:',set)
    return SETS.text;
}