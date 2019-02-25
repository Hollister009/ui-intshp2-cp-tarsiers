const fs = require('fs');
const path = require('path');
const banner = require('./dummy-data/baner.json');
const promotions = require('./dummy-data/promotions.json');

function getBanner(req, res) {
  res.json(banner);
}

function getPromotions(req, res) {
  res.json(promotions);
}

function getKillswitch(req, res) {
  const dest = path.join(__dirname, 'dummy-data/killswitch.json');

  fs.readFile(dest, 'utf8', (err, data) => {
    res.set('Content-Type', 'application/json');
    res.send(data);
  });
}

function notFound(req, res) {
  res.status(404).send();
}

module.exports = {
  getBanner,
  getPromotions,
  getKillswitch,
  notFound
};
