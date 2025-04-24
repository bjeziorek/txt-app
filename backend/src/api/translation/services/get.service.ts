import { parsePropertiesFile } from '../utils/parseProperties';

export const getTranslationService = (lang: string) => {
    return parsePropertiesFile(`./src/api/translation/data/langs/${lang}.properties`)
};