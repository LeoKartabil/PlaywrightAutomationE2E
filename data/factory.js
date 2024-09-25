import { faker } from '@faker-js/faker';

class Factory {
    constructor(page) {
        this.page = page
    }

    async createValidUser() {
    
        const userObject = {
            gender: faker.person.sex(),
            email: faker.internet.email(),
            password: faker.internet.password({length: 12}),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            birthDay: faker.number.int({ min: 1, max: 28 }).toString(),
            birthMonth: faker.date.month(),
            birthYear: faker.number.int({ min: 1924, max: 2006 }).toString(),
            companyName: faker.company.name(),
            newsletter: faker.datatype.boolean(),
        }
    
        if (process.env.LOGGING) console.log(`User been registered: ${JSON.stringify(userObject)}`)
    
        return userObject
    }

}

module.exports = { Factory };
