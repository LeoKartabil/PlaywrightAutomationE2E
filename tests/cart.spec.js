const { test } = require('@playwright/test')
const { ProductPage } = require('../pages/products.page')

test('Adicionar produto ao carrinho e validar informações', { tag: ['@Cart', '@Regression' ] }, async ({page}) => {
    const productPage = new ProductPage(page)

    await productPage.goToCustomComputer()
    await productPage.addCustomComputerToCart()
    await productPage.validateCartIcon()
    await productPage.openCart()
    await productPage.validateProductInCart()
});