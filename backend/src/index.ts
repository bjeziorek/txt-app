import { saveFile } from "./crud/crud";
import app from "./app";
import { convertXmlToTxt } from "./crud/xmlToTxt";

const cors = require('cors');
const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
