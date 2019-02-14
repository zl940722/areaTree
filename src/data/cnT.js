const _ = require('lodash');
const areas = require('./areas')
const cities = require('./cities')
const province = require('./province')


const cnCity = _.map(JSON.parse(cities), (citiesValue, key) => {
    const areasChildren = [];
    _.map(JSON.parse(areas), (areasValue, key) => {
        if( areasValue.pId  === citiesValue.code) {
            areasChildren.push(areasValue)
        }
    })
    citiesValue.children = areasChildren;
    return citiesValue

});

const cnTree = _.map(JSON.parse(province), (provinceValue, key) => {
    const citiesChildern = [];
    _.forEach(cnCity, (citiesValue, key) => {
        if( citiesValue.pId  === provinceValue.code) {
            citiesChildern.push(citiesValue)
            }
    })
    provinceValue.children = citiesChildern;
    return provinceValue
});

const cnT =  JSON.stringify(cnTree, null, 2)

module.exports = cnT;