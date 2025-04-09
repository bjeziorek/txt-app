
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
    name: 'nr',
    type: 'number',
    value: '-',
    isFieldRequired: true,
},
{
    name: 'sceneIntensity',
    type: 'string',
    value: '-',
    isFieldRequired: false
},
{
    name: 'idMalformation',
    type: 'string',
    value: '-',
    isFieldRequired: false
},
{
    name: 'descTitle',
    type: 'string',
    value: '-',
    isFieldRequired: true
},
{
    name: 'shortDesc',
    type: 'string',
    value: '-',
    isFieldRequired: true
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
    value: null,
    isFieldRequired: true
},
{
    name: 'characters',
    type: [
        {
            name: 'name',
            type: 'string',
            value: '-',
            isFieldRequired: true
        },
        {
            name: 'presence',
            type: 'present|mentioned',
            value: '-',
            isFieldRequired: true
        },
        {
            name: 'emotions',
            type: 'string',
            value: '-',
            isFieldRequired: true
        },
        {
            name: 'goal',
            type: 'string',
            value: '-',
            isFieldRequired: true
        },
        {
            name: 'other',
            type: 'string[]',
            value: '-',
            isFieldRequired: false
        },
    ],
    value: '-',
    isFieldRequired: false
},
{
    name: 'pov',
    type: 'string',
    value: '-',
    isFieldRequired: true
},
{
    name: 'place',
    type: 'string[]',
    value: '-',
    isFieldRequired: true
},
{
    name: 'didascalia',
    type: 'string',
    value: '-',
    isFieldRequired: false
},
{
    name: 'remarks',
    type: 'string',
    value: '-',
    isFieldRequired: false
},
]

export function generateSceneSet(): SetFields[]{ 
    return data;
}