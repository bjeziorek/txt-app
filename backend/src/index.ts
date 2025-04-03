import { saveFile } from "./utils/crud";
import { emptyTemplate, novelTemplate } from "./utils/fileTemplates";

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;
const jsonFilePath = './data/data.json';
let jsonData = null;

app.use(cors());
app.use(bodyParser.json());

// Endpoint do odczytu pliku JSON
app.get('/data', (req: any, res:any):void => {
  console.log('data',saveFile('a','b','c.txt',{a:'asasas',v:47584}))
  console.log('empty',novelTemplate.generate('powieść_abc'))
  console.log('novel',emptyTemplate.generate('pusty2'))
  fs.readFile(jsonFilePath, 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    jsonData = JSON.parse(data);
    res.send(jsonData);
  });
});

app.post('/test', (req:any,res:any) => {
  console.log('wejscie do test',req)
 
  res.send('serwer: otrzymano test');
})

app.post('/api/endpoint', (req:any, res:any) => {
  console.log('Received data:', req.body);
  console.log('Received characters:', JSON.stringify(req.body, null, 2)); // Czytelne logowanie
 // res.json({ message: 'Data received successfully!' });

   // Zapisz dane do pliku
   fs.writeFile('characters2.json', JSON.stringify(req.body, null, 2), (err: NodeJS.ErrnoException | null) => {
    if (err) {
      console.error('Error writing to file:', err);
      res.status(500).json({ message: 'Failed to save data to file.' });
    } else {
      console.log('Data successfully written to file characters.json');
      res.json({ message: 'Data received and saved to file.' });
    }
  });

});

app.post('/data/scene/id-pov', (req:any,res:any) => {
  console.log('wejscie do id-pov')
  const data = JSON.stringify(req.body, null, 2)
  console.log('serwer: otrzymano scenę:', data)
  // coś mi tu nie działa, serwer nie mówi, że coś dostał i nie potwierdza frontowi
  // przyjrzeć się temu
  res.send('serwer: otrzymano scenę');
})

// Endpoint do zapisu zmian w pliku JSON
app.post('/data', (req:any, res:any) => {
  saveJson(req,res);
});

function saveJson(req: any, res: any){
  fs.writeFile(jsonFilePath, JSON.stringify(req.body, null, 2), 'utf8', (err:NodeJS.ErrnoException | null) => {
    if (err) {
      return res.status(500).send('Error writing file');
    }
    res.send('File updated successfully');
  });
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
