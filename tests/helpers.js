// Ajudantes dos testes. A senha é a pública que a própria loja de treino mostra na página de entrada.
const SENHA_DA_PAGINA = 'secret_sauce';

async function entrar(page, usuario) {
  await page.goto('/');
  await page.locator('[data-test="username"]').fill(usuario);
  await page.locator('[data-test="password"]').fill(SENHA_DA_PAGINA);
  await page.locator('[data-test="login-button"]').click();
}

async function irAteOResumo(page) {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('Aluno');
  await page.locator('[data-test="lastName"]').fill('World IT Mission');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();
}

module.exports = { entrar, irAteOResumo };
