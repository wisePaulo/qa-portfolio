# BUG-003: Vitrine, a ordenação por preço não muda a ordem com o usuário problem_user

- **Ambiente:** loja de treino (saucedemo.com), Chrome no computador.
- **Senha:** a pública da página de entrada (não escrita no bug).
- **Usuário:** problem_user
- **Severidade:** baixa (o cliente ainda acha o produto). **Prioridade sugerida:** P3. **Frequência:** 3 de 3.
- **Passos:**
  1. Entrar com o problem_user.
  2. Escolher "Price (low to high)" na caixa de ordenação.
- **Resultado atual:** a lista continua na mesma ordem.
- **Resultado esperado:** o item mais barato aparece primeiro, como com o standard_user.
- **Evidência:** print antes e depois da escolha.
