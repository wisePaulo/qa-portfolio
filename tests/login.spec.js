// CT-LOGIN-001 e CT-LOGIN-003 automatizados (casos em 05-casos/casos-de-teste.md).
const { test, expect } = require('@playwright/test');
const { entrar } = require('./helpers');

test('login com o standard_user abre a vitrine', async ({ page }) => {
  await entrar(page, 'standard_user');
  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});

test('login com o locked_out_user mostra a mensagem de bloqueio', async ({ page }) => {
  await entrar(page, 'locked_out_user');
  await expect(page.locator('[data-test="error"]')).toContainText('Sorry, this user has been locked out.');
  await expect(page).not.toHaveURL(/inventory\.html/);
});
