const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

export function importProject(){

}

export function exportProject(){

}

export function readFile(filePath:string,){
  try {
    const data = fs.readFileSync(filePath, 'utf-8'); // Odczyt pliku
    return JSON.parse(data); // Parsowanie JSON
  } catch (error) {
    console.error(`Błąd odczytu pliku ${filePath}:`, error);
    return null; // W przypadku błędu zwracamy null
  }
  // wejście do folderu, 
  // odczytanie z config pliku ostanio używanego
  // odczytanie struktury
  // wysłanie listę setów na podstawie template - uwaga zapisać template do settings

}

export function saveFile(projectName:string, setName: string, fileName: string, fileContent: object):string{
    const filePath = path.join('output', projectName, setName, fileName);
    const dirPath = path.dirname(filePath);
    let resultInfo = '';

    fs.mkdir(dirPath, { recursive: true }, (err: NodeJS.ErrnoException | null) => {
        if (err) {
          resultInfo='Error creating directories:' + err.errno + ' ' +err.code;
          console.error(resultInfo);
        } else {
          // Zapis pliku
          fs.writeFile(filePath, JSON.stringify(fileContent, null, 2), (err: NodeJS.ErrnoException | null) => {
            if (err) {
              resultInfo='Error writing file:' + err.errno + ' ' +err.code;
              console.error(resultInfo);
            } else {
              resultInfo=`File saved at: ${filePath}`;
              console.log(resultInfo);
            }
          });
        }
      });
  return resultInfo;
}

export function deleteFile(){

}