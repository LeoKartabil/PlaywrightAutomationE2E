const { test } = require('@playwright/test')
const { RegisterPage } = require('../pages/register.page')
const { createValidUser } = require('../data/user.factory')

test('Cadastrar usuário com sucesso', { tag: ['@Register', '@UI', '@Regression' ] }, async ({page}) => {
    const registerPage = new RegisterPage(page)
    const validUser = await createValidUser()

    await registerPage.goTo()
    await registerPage.registerUser(validUser)
    await registerPage.validateRegistration()
});
