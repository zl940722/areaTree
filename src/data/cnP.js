const _ = require('lodash');
const areas = require('./areas')
const cities = require('./cities')
const province = require('./province')

const cnPlain = _.concat(JSON.parse(areas),JSON.parse(cities),JSON.parse(province));
const cnP = JSON.stringify(cnPlain, null, 2)

module.exports = cnP;