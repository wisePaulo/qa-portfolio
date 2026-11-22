# BUG-001: Checkout, botão "Finish" não conclui o pedido com o usuário error_user

- **Ambiente:** loja de treino (saucedemo.com), Chrome no computador.
- **Senha:** a pública da página de entrada (não escrita no bug).
- **Usuário:** error_user
- **Severidade:** crítica (o cliente não consegue comprar). **Prioridade sugerida:** P1. **Frequência:** 3 de 3.
- **Pré-condição:** logado com o error_user, carrinho vazio (menu, "Reset App State" e recarregar a página).
- **Passos:**
  1. Clicar em "Add to cart" da Sauce Labs Backpack.
  2. Clicar no carrinho e em "Checkout".
  3. Preencher nome Aluno, sobrenome World IT Mission, código postal 12345 e clicar em "Continue".
  4. Clicar em "Finish".
- **Resultado atual:** a página continua em "Checkout: Overview" e nenhuma mensagem aparece.
- **Resultado esperado:** abre "Checkout: Complete!" com "Thank you for your order!" (critério 1 da história do Checkout; é o que acontece com o standard_user).
- **Evidência:** print da tela depois do clique e o erro no Console.
