
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import lmsRoutes from './routes/lms.js';

const app = express();
const PORT = 8000;

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/lms', lmsRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on : http://localhost:${PORT}`)
})
