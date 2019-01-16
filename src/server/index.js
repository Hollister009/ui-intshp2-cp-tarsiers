const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const router = require('./router');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', router);

app.listen(config.PORT, () => {
  console.log(`listening on ${config.PORT}`);
});

module.exports = app;
