import { expect } from '@playwright/test';

class LoginPage {
    constructor(page) {
        this.page = page
        this.url =              'https://demo.nopcommerce.com/login'
        this.buttonLogin =      page.locator('[class="button-1 login-button"]')
    }

    async goTo() {
        await this.page.goto(this.url)
    }

    async login(user) {
        await this.page.fill('[id="Email"]', user.email)
        await this.page.fill('[id="Password"]', user.password)
        await this.page.click('[class="button-1 login-button"]')
    }

    async validateLogin() {
        expect(this.page.url()).toBe('https://demo.nopcommerce.com/')
    }

    async logout() {
        await this.buttonLogout.click()
    }
}

module.exports = { LoginPage };