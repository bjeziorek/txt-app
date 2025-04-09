import { SetFields } from "../types";

// TODO when I finish prototyping phase
// I need to implement some mechanism to 
// control list of fields like conetent, formatting etc.
// I need to have them somewhere defined
// and self controlling
// for now they are manually written without
// any control

const data: SetFields[] = [
{
    name: 'name',
    type: 'string',
    value: '-',
    isFieldRequired: true
},
{
    name: 'description',
    type: 'string',
    value: '-',
    isFieldRequired: false
},
]

export function generatePlaceSet(): SetFields[]{ 
    return data;
}