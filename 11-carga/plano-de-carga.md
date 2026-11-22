# Plano de carga (em texto, volume leve)

- **Sistema:** API de reservas de treino (Restful Booker).
- **Pergunta:** a leitura de uma reserva continua rápida com 5 usuários ao mesmo tempo?
- **Usuários:** de 1 a 5, por 1 minuto. Nada acima de 5: é um site de treino de todo mundo.
- **Medidas:** tempo de resposta (média e o pior), taxa de erro.
- **Critério:** o pior tempo abaixo de 2 segundos e nenhum erro.
- **Script:** `k6-leve.js` nesta pasta.
