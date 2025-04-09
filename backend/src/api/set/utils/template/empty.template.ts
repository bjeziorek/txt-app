import { generateTextSet } from "../sets/text.set";
import { SetsData } from "../types";


const data: SetsData ={
    "sets": [
      {
        "name": "text",
        "fields": generateTextSet()
      },
    ]
  }

  export function generateEmptyTemplateSchema():SetsData{
    return data;
  }
