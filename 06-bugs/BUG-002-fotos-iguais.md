# BUG-002: Vitrine, todos os produtos mostram a mesma foto com o usuário problem_user

- **Ambiente:** loja de treino (saucedemo.com), Chrome no computador.
- **Senha:** a pública da página de entrada (não escrita no bug).
- **Usuário:** problem_user
- **Severidade:** média (o cliente não vê o produto que compra). **Prioridade sugerida:** P2. **Frequência:** 3 de 3.
- **Passos:**
  1. Entrar com o problem_user.
  2. Olhar a vitrine ("Products").
- **Resultado atual:** os seis produtos mostram a mesma foto.
- **Resultado esperado:** cada produto mostra a própria foto, como com o standard_user.
- **Evidência:** print lado a lado (problem_user e standard_user).
