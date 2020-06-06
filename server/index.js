const express = require('express');
const bodyParser = require('body-parser'); // extracts body portion of an etire request (JSON object) and parses it onto req.body
const morgan = require('morgan');
const cors  = require("cors") // cross origina resource sharing.
const path = require('path');
const router = require('./router');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true }));
app.use(morgan('dev')); // generates logs when requests are being made
app.use(cors());

app.use('/api', router);
app.get('/name', (req, res) => res.send("Jonathan"));
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))