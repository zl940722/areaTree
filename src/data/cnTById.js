const cnT = require('./cnT')

const byId = _.find(JSON.parse(cnT), (value) => {
    return value.id
});


const cnTById =  JSON.stringify(byId, null, 2)
module.exports = cnTById;