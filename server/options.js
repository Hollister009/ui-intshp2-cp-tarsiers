const fs = require('fs');
const path = require('path');
const banner = require('./data/baner.json');
const promotions = require('./data/promotions.json');

function getBanner(req, res) {
  res.json(banner);
}

function getPromotions(req, res) {
  res.json(promotions);
}

function getKillswitch(req, res) {
  const dest = path.join(__dirname, 'data/killswitch.json');

  fs.readFile(dest, 'utf8', (err, data) => {
    res.set('Content-Type', 'application/json');
    res.send(data);
  });
}

function NotFound(req, res) {
  res.status(404).send();
}

module.exports = {
  getBanner,
  getPromotions,
  getKillswitch,
  NotFound
};
