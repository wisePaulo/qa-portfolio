# Pedidos da API de reservas (Restful Booker)

| Método | Endereço | Para quê | Status esperado |
|---|---|---|---|
| GET | /booking | lista as reservas | 200 |
| GET | /booking/1 | lê uma reserva | 200 |
| POST | /booking | cria uma reserva | 200 |
| POST | /auth | pega o token de treino | 200 |
| GET | /booking/999999 | reserva que não existe | 404 |
