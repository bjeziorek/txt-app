import { getTranslation } from '../utils';

export const getTranslationService = (lang: string) => {
console.log('lang w serwisie',lang)
    return getTranslation(lang)
};