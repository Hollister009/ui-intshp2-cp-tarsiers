const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const router = require('./router');

const app = express();

const port = process.env.PORT || 3001;

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
}

app.use(clientErrorHandler);
app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api', router);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

if (process.env.NODE_ENV === 'production') {
  app
    .use(express.static(path.resolve(__dirname, '../client/build')))
    .get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
    );
}

module.exports = app;
