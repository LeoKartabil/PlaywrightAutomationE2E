const { test } = require('@playwright/test')
const { RegisterPage } = require('../pages/register.page')
const { LoginPage } = require('../pages/login.page')
const { Factory } = require('../data/factory')

test('Cadastrar usuário com sucesso', { tag: ['@Register', '@Regression' ] }, async ({page}) => {
    const registerPage = new RegisterPage(page)
    const factory = new Factory(page)

    const userData = await factory.createValidUser()

    await registerPage.goTo()
    await registerPage.registerUser(userData)
    await registerPage.validateRegistration()
    await registerPage.saveLastUserRegistered(userData)
});

test('Logar usuário com sucesso', { tag: ['@Login', '@Regression' ] }, async ({page}) => {
    const loginPage = new LoginPage(page)
    const userData = require('../data/lastUserRegistered.json')

    await loginPage.goTo()
    await loginPage.login(userData)
    await loginPage.validateLogin()
})


