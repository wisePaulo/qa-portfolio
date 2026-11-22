// CT-CARRINHO-001 e CT-CARRINHO-002 automatizados.
const { test, expect } = require('@playwright/test');
const { entrar } = require('./helpers');

test('adicionar a mochila mostra 1 no ícone do carrinho', async ({ page }) => {
  await entrar(page, 'standard_user');
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
});

test('ordenar por preço do menor para o maior começa pelo item mais barato', async ({ page }) => {
  await entrar(page, 'standard_user');
  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
  const precos = await page.locator('[data-test="inventory-item-price"]').allInnerTexts();
  const numeros = precos.map((p) => Number(p.replace('$', '')));
  expect(numeros).toEqual([...numeros].sort((a, b) => a - b));
});
