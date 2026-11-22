# BUG-004: Checkout, o campo "Last Name" não aceita o texto com o usuário problem_user

- **Ambiente:** loja de treino (saucedemo.com), Chrome no computador.
- **Senha:** a pública da página de entrada (não escrita no bug).
- **Usuário:** problem_user
- **Severidade:** alta (o cliente não consegue preencher os dados e não compra). **Prioridade sugerida:** P2. **Frequência:** 3 de 3.
- **Passos:**
  1. Entrar com o problem_user e colocar a mochila no carrinho.
  2. Clicar no carrinho e em "Checkout".
  3. Digitar World IT Mission no campo "Last Name".
- **Resultado atual:** o texto não fica no campo "Last Name" (ele muda o campo "First Name").
- **Resultado esperado:** o texto fica no campo "Last Name".
- **Evidência:** vídeo curto da digitação.
