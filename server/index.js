const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const router = require('./router');

const app = express();
const port = process.env.PORT || config.port;

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
}

app
  .use(clientErrorHandler)
  .use(cors())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use('/api', router)
  .listen(port, () => console.log(`listening on ${port}`));

if (process.env.NODE_ENV === 'production') {
  app
    .use(express.static(path.resolve(__dirname, '../client/build')))
    .get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
    );
}

module.exports = app;
