import { generateTextSet } from "./sets/text.set";

export function resolveSet(setName:string){
    switch(setName){
        case "text": return generateTextSet();
        default: return {}
        // todo
    }
}

// todo: use listing files and dynamic imports
// with unified generate() funcion in sets