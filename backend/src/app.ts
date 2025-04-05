import express from 'express';
import bodyParser from 'body-parser';
import projectRoutes from './api/project/routes';
import translationRoutes from './api/translation/routes';
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/data/project', projectRoutes);
app.use('/data/translation', translationRoutes);

export default app;