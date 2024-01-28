const peopleNames = require('../country/state/city/index')
const getFirstNames = require('../utilities/utlis/index')

const getPeopleInCity = peopleNames => {
  return getFirstNames(peopleNames)
}

module.exports = getPeopleInCity
