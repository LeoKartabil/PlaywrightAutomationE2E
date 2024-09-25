import { expect } from '@playwright/test';

class ProductPage {
    constructor(page) {
        this.page = page;
        this.urlCustomComputer =        'https://demo.nopcommerce.com/build-your-own-computer'
        this.selectProcessor =          page.locator('[id="product_attribute_1"]')
        this.selectRam =                page.locator('[id="product_attribute_2"]')
        this.radioHdd =                 page.locator('[id="product_attribute_3_7"]')
        this.radioOs =                  page.locator('[id="product_attribute_4_9"]')
        this.checkOfficeSoftware =      page.locator('[id="product_attribute_5_10"]') //Already checked
        this.checkAcrobatSoftware =     page.locator('[id="product_attribute_5_11"]')
        this.checkCommanderSoftware =   page.locator('[id="product_attribute_5_12"]')
        this.inputQuantity =            page.locator('[id="product_enteredQuantity_1"]')
        this.alertProductAdded =        page.locator('[class="content"]')
        this.buttonCloseAlert =         page.locator('[class="close"]')
        this.labelCartQuantity =        page.locator('[class="cart-qty"]')
        this.buttonCart =               page.locator('[id="topcartlink"]')
        this.buttonAddToCart =          page.locator('[id="add-to-cart-button-1"]');
        this.labelQuantityInCart =      page.locator('[name="itemquantity11228"]')
        this.labelProductSubtotal =     page.locator('[class="product-subtotal"]')
    }

    async goToCustomComputer(){
        await this.page.goto(this.urlCustomComputer);
    }

    async addCustomComputerToCart() {
        //await this.selectProcessor.selectOption({label: '2.5 GHz Intel Pentium Dual-Core E2200'})
        await this.selectRam.selectOption({label: '8GB [+$60.00]'})
        await this.radioHdd.click()
        await this.radioOs.click()
        expect(this.checkOfficeSoftware).toBeChecked()
        await this.checkAcrobatSoftware.check()
        await this.checkCommanderSoftware.check()
        await this.inputQuantity.fill('2')
        await this.buttonAddToCart.click();
    }

    async validateCartIcon() {
        this.alertProductAdded.scrollIntoViewIfNeeded()
        expect(this.alertProductAdded).toHaveText('The product has been added to your shopping cart')
        await this.buttonCloseAlert.click()
        expect(this.labelCartQuantity).toMatch(/^\(?2\)?$/)
    }

    async openCart() {
        await this.buttonCart.click()
    }

    async validateProductInCart() {
        expect(this.page.url()).toBe('https://demo.nopcommerce.com/cart')
        expect(await this.labelQuantityInCart.getAttribute('value')).toBe("2")
        expect(await this.labelProductSubtotal).toHaveText('$3,000.00')

    }
}

module.exports = { ProductPage };