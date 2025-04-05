import app from "../../app";
import { parsePropertiesFile } from "./utils/parseProperties";
const fs = require('fs');


export function getTranslation(lang:string){
    
// app.get('/data/${lang}', (req: any, res:any):void => {
//   fs.readFile("./data/langs/pl.properties", 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
//     if (err) {
//       return res.status(500).send('Error reading file');
//     }
   
//     res.send(data);
//   });
// });

    return    parsePropertiesFile(`./src/api/translation/langs/${lang}.properties`)  
    //  new Promise((resolve, reject) => {
      

    //   fs.readFile(`./src/api/translation/langs/${lang}.properties`, 'utf8', (err: any, data: unknown) => {
    //     if (err) {
    //       reject(err); // Zwróć błąd w przypadku problemów
    //     } else {
    //         console.log('utils trans',data)
    //       resolve(data); // Zwróć dane w przypadku sukcesu
    //     }
    //   });
    // });
  };


