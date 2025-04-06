import { parsePropertiesFile } from '../utils/parseProperties';

export const getTranslationService = (lang: string) => {
    return parsePropertiesFile(`./src/api/translation/langs/${lang}.properties`)
};