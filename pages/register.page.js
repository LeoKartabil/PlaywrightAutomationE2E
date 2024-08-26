import { expect } from '@playwright/test';

export default class RegisterPage {
    constructor(page) {
        this.page = page
        this.url = 'https://www.advantageonlineshopping.com/#/register'
        this.inputUsername =                page.locator('input[name="usernameRegisterPage"]')
        this.inputEmail =                   page.locator('input[name="emailRegisterPage"]')
        this.inputPassword =                page.locator('input[name="passwordRegisterPage"]')
        this.inputConfirmPassword =         page.locator('input[name="confirm_passwordRegisterPage"]')
        this.inputFirstName =               page.locator('input[name="first_nameRegisterPage"]')
        this.inputLastName =                page.locator('input[name="last_nameRegisterPage"]')
        this.inputPhoneNumber =             page.locator('input[name="phone_numberRegisterPage"]')
        this.selectCountry =                page.getByRole('listbox')
        this.inputCity =                    page.locator('input[name="cityRegisterPage"]')
        this.inputAddress =                 page.locator('input[name="addressRegisterPage"]')
        this.inputState =                   page.locator('input[name="state_\\/_province_\\/_regionRegisterPage"]')
        this.inputPostalCode =              page.locator('input[name="postal_codeRegisterPage"]')
        this.checkAllowOffersPromotion =    page.locator('input[name="allowOffersPromotion"]')
        this.checkIAgree =                  page.locator('input[name="i_agree"]')
        this.buttonRegister =               page.getByRole('button', { name: 'REGISTER' })
    }

    async goTo() {
        await this.page.goto(this.url)
    }

    async registerUser(userObject) {
        await this.inputUsername.fill(userObject.username)
        await this.inputEmail.fill(userObject.email)
        await this.inputPassword.fill(userObject.password)
        await this.inputConfirmPassword.fill(userObject.password)
        await this.inputFirstName.fill(userObject.firstName)
        await this.inputLastName.fill(userObject.lastName)
        await this.inputPhoneNumber.fill(userObject.phoneNumber)
        await this.selectCountry.selectOption(userObject.country)
        await this.inputCity.fill(userObject.city)
        await this.inputAddress.fill(userObject.address)
        await this.inputState.fill(userObject.state)
        await this.inputPostalCode.fill(userObject.postalCode)
        await this.checkAllowOffersPromotion.check(userObject.allowOffersPromotion)
        await this.checkIAgree.check(userObject.iAgree)
        await this.buttonRegister.click()
    }

    async validateRegistration() {
        await expect(this.page.locator('h1')).toContainText('Your account has been created!')
    }

}

module.exports = { RegisterPage };
