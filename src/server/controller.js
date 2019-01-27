const banner = require('./dummy-data/baner.json');
const promotions = require('./dummy-data/promotions.json');
const killswitch = require('./dummy-data/killswitch.json');

function getBanner(req, res) {
  res.json(banner);
}

function getPromotions(req, res) {
  res.json(promotions);
}

function getKillswitch(req, res) {
  res.json(killswitch);
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
