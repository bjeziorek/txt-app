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
{
    name: 'date',
    type: [
        {
            name: 'year',
            type: 'number',
            value: '-',
            isFieldRequired: true
        },
        {
            name: 'month',
            type: 'number',
            value: '-',
            isFieldRequired: true
        },
        {
            name: 'day',
            type: 'number',
            value: '-',
            isFieldRequired: true
        },
        {
            name: 'hour',
            type: 'number',
            value: '-',
            isFieldRequired: true
        },
        {
            name: 'desc',
            type: 'string',
            value: '-',
            isFieldRequired: false
        },
    ],
    value: '-',
    isFieldRequired: false
},
]

export function generateEventSet(): SetFields[]{ 
    return data;
}