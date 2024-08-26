import { faker } from '@faker-js/faker';

export async function createValidUser() {
    const userObject = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password({length: 12}),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        country: faker.location.country(),
        city: faker.location.city(),
        address: faker.location.streetAddress(),
        state: faker.location.state({ abbreviated: true }),
        postalCode: faker.location.zipCode(),
        allowOffersPromotion: true,
        iAgree: true
    }

    if (process.env.LOGGING) console.log(`User been registered: ${JSON.stringify(userObject)}`)

    return userObject
}