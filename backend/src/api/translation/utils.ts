import app from "../../app";
import { parsePropertiesFile } from "./utils/parseProperties";
const fs = require('fs');

export function getTranslation(lang:string){
    return parsePropertiesFile(`./src/api/translation/langs/${lang}.properties`)  
  };
