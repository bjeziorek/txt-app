import fs from 'fs';
import { parseStringPromise } from 'xml2js';

/**
 * Rekursywna funkcja do zamiany obiektu XML na czytelny tekst
 */
function formatXmlToText(data: any, depth: number = 0): string {
    let result = '';
    const indent = '  '.repeat(depth); // Wcięcia dla czytelności

    for (const key in data) {
        if (typeof data[key] === 'object') {
            result += `${indent}${key}:\n`;
            result += formatXmlToText(data[key], depth + 1);
        } else {
            result += `${indent}${key}: ${data[key]}\n`;
        }
    }
    return result;
}

/**
 * Rekursywna funkcja do usuwania prefiksów z kluczy
 */
function removeNamespacePrefixes(obj: any): any {
    if (typeof obj !== 'object' || obj === null) return obj;

    const newObj: any = {};
    for (const key in obj) {
        const newKey = key.includes(':') ? key.split(':')[1] : key; // Usuwamy wszystko przed ":"
        newObj[newKey] = removeNamespacePrefixes(obj[key]); // Rekursywne przetwarzanie obiektu
    }
    return newObj;
}

/**
 * Funkcja do konwersji pliku XML na format tekstowy
 */
export async function convertXmlToTxt(xmlPath: string, txtPath: string) {
    try {
        const xmlContent = await fs.promises.readFile(xmlPath, 'utf-8');
        const parsedData = await parseStringPromise(xmlContent, {
            explicitArray: false, // Usuwa tablice, jeśli nie są konieczne
        xmlns: false, // Ignoruje przestrzenie nazw
        });
        
        const formattedText = formatXmlToText(removeNamespacePrefixes(parsedData));
        await fs.promises.writeFile(txtPath, formattedText, 'utf-8');

        console.log(`Konwersja zakończona! Plik TXT zapisany jako: ${txtPath}`);
    } catch (error) {
        console.error('Błąd podczas konwersji XML na TXT:', error);
    }
}
