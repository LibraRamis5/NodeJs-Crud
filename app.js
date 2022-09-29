require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const web = require('./routes/web.js');


app.use(express.json());
app.use('/api', web);


  
app.listen(port, () => console.log(`Example app listening on port: http://localhost:${port}`));