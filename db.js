var faker = require('faker'),
    _ = require('lodash');

module.exports = function() {

    return {
        persons: _.times(100, function(n) {
            return {
                id: n,
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                avatar: faker.internet.avatar(),
                jobTitle: faker.name.jobTitle(),
                jobDescription: faker.lorem.paragraph(),
                image: faker.image.people()
            }
        })
    }
}
