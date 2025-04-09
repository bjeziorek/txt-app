import { generateCharacterSet } from "../sets/character.set";
import { generateEventSet } from "../sets/event.set";
import { generateIdeaSet } from "../sets/idea.set";
import { generatePlaceSet } from "../sets/place.set";
import { generateSceneSet } from "../sets/scene.set";
import { generateTextSet } from "../sets/text.set";
import { SetsData } from "../types";


const data: SetsData ={
    "sets": [
      {
        "name": "scene",
        "fields": generateSceneSet()
      },
      {
        "name": "characters",
        "fields": generateCharacterSet()
      },
      {
        "name": "events",
        "fields": generateEventSet()
      },
      {
        "name": "ideas",
        "fields": generateIdeaSet()
      },
      {
        "name": "places",
        "fields": generatePlaceSet()
      },
      {
        "name": "text",
        "fields": generateTextSet()
      },
    ]
  }

  export function generateNovelTemplateSchema():SetsData{
    return data;
  }
