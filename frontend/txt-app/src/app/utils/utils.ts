type Field = { field: string, value: any };

export function flattenObject(obj: any, parentKey = ''): Field[] {
    let result: Field[] = [];

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                result = result.concat(flattenObject(obj[key], newKey));
            } else {
                result.push({ field: newKey, value: obj[key] });
            }
        }
    }
    
    return result;
}

// export function flattenObject(obj: any, parentKey = ''): Field[] {
//     console.log('test',obj)
//     let result: Field[] = [];

//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             const newKey = parentKey ? `${parentKey}.${key}` : key;
//             if (Array.isArray(obj[key])) {
//                 obj[key].forEach((item, index) => {
//                     if (typeof item === 'object' && item !== null) {
//                         result = result.concat(flattenObject(item, `${newKey}[${index}]`));
//                     } else {
//                         result.push({ field: `${newKey}[${index}]`, value: item });
//                     }
//                 });
//             } else if (typeof obj[key] === 'object' && obj[key] !== null) {
//                 result = result.concat(flattenObject(obj[key], newKey));
//             } else {
//                 result.push({ field: newKey, value: obj[key] });
//             }
//         }
//     }
    
//     return result;
// }