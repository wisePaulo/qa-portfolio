// CT-CHECKOUT-001 e CT-CHECKOUT-005 automatizados. Dados de teste inventados (Aluno World IT Mission, CEP 12345).
const { test, expect } = require('@playwright/test');
const { entrar, irAteOResumo } = require('./helpers');

test('checkout com o standard_user termina com o agradecimento', async ({ page }) => {
  await entrar(page, 'standard_user');
  await irAteOResumo(page);
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
});

// Este é o teste vermelho do último envio (ver "Situação do CI" no README e o BUG-001).
test('checkout com o error_user termina o pedido', async ({ page }) => {
  await entrar(page, 'error_user');
  await irAteOResumo(page);
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!', { timeout: 5000 });
});
