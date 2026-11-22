# Negativos no Petstore

| Pedido | Esperado | Por quê |
|---|---|---|
| GET /pet/987654321098 | 404 "Pet not found" | animal que não existe |
| GET /pet/abc | 404 | o id não é número |
| GET /pet/findByStatus?status=xyz | 200 com lista vazia | status fora da lista; virou pergunta: não deveria ser 400? |
