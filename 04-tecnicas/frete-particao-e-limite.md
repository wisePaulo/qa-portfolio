# Partição de equivalência e valor limite: o campo quantidade do carrinho

Regra de exemplo (inventada para o exercício): a quantidade vai de 1 a 10.

| Grupo | Valores | Esperado |
|---|---|---|
| Inválido abaixo | 0, -1 | mensagem de quantidade inválida |
| Válido | 1, 5, 10 | aceita |
| Inválido acima | 11 | mensagem de quantidade inválida |
| Inválido tipo | vazio, letra "a", espaço | mensagem de quantidade inválida |

Valores limite: 0, 1, 10 e 11.
