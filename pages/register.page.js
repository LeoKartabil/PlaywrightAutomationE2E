import { expect } from '@playwright/test';

export default class RegisterPage {
    constructor(page) {
        this.page = page
        this.url =                      'https://demo.nopcommerce.com/register'
        this.radioGenderMale =          page.locator('[id="gender-male"]')
        this.radioGenderFemale =        page.locator('[id="gender-female"]')
        this.inputEmail =               page.locator('[id="Email"]')
        this.inputCompanyName =         page.locator('[id="Company"]')
        this.inputFirstName =           page.locator('[id="FirstName"]')
        this.inputLastName =            page.locator('[id="LastName"]')
        this.selectBirthDay =           page.locator('[name="DateOfBirthDay"]')
        this.selectBirthMonth =         page.locator('[name="DateOfBirthMonth"]')
        this.selectBirthYear =          page.locator('[name="DateOfBirthYear"]')
        this.radioNewsletter =          page.locator('[id="Newsletter"]')
        this.inputPassword =            page.locator('[id="Password"]')
        this.inputConfirmPassword =     page.locator('[id="ConfirmPassword"]')
        this.buttonRegister =           page.locator('[id="register-button"]')
        this.labelSuccess =             page.locator('[class="result"]')
        this.buttonContinue =           page.locator('[class="button-1 register-continue-button"]')
        this.buttonLogout =             page.getByRole('link', { name: 'Log out' })
        //this.buttonRegister =           page.getByRole('link', { name: 'Register' })
 
    }

    async goTo() {
        await this.page.goto(this.url)
    }

    async registerUser(user) {
        user.gender === 'male' ? await this.radioGenderMale.check() : await this.radioGenderFemale.check();
        user.gender === 'male' ? expect(this.radioGenderMale).toBeChecked() : expect(this.radioGenderFemale).toBeChecked();
        await this.inputFirstName.fill(user.firstName)
        await this.inputLastName.fill(user.lastName)
        await this.selectBirthDay.selectOption({label: user.birthDay})
        await this.selectBirthMonth.selectOption({label: user.birthMonth})
        await this.selectBirthYear.selectOption({label: user.birthYear})
        await this.inputEmail.fill(user.email)
        await this.inputCompanyName.fill(user.companyName)
        user.newsletter === true ? await this.radioNewsletter.check() : await this.radioNewsletter.uncheck();
        await this.inputPassword.fill(user.password)
        await this.inputConfirmPassword.fill(user.password)
        await this.buttonRegister.click()
    }

    async validateRegistration() {
        expect(this.labelSuccess).toHaveText('Your registration completed')
        expect(await this.buttonContinue.isVisible()).toBeTruthy()
        await this.buttonContinue.click()
        expect(this.page.url()).toBe('https://demo.nopcommerce.com/')
    }

    async saveLastUserRegistered(user) {
        const fs = require('fs');
        const userSaving = {
            email: user.email,
            password: user.password
        }
        fs.writeFileSync('data/lastUserRegistered.json', JSON.stringify(userSaving))
    }
}

module.exports = { RegisterPage };
