const express = require('express');
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
app.get('/data', (req, res) => {
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    jsonData = JSON.parse(data);
    res.send(jsonData);
  });
});

app.post('/data/scene/id-pov', (req,res) => {
  const data = JSON.stringify(req.body, null, 2)
  console.log('serwer: otrzymano scenę:', data)
  // coś mi tu nie działa, serwer nie mówi, że coś dostał i nie potwierdza frontowi
  // przyjrzeć się temu
  res.send('serwer: otrzymano scenę');
})

// Endpoint do zapisu zmian w pliku JSON
app.post('/data', (req, res) => {
  saveJson(req,res);
});

function saveJson(){
  fs.writeFile(jsonFilePath, JSON.stringify(req.body, null, 2), 'utf8', (err) => {
    if (err) {
      return res.status(500).send('Error writing file');
    }
    res.send('File updated successfully');
  });
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
