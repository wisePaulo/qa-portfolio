# Projeto final de QA: a loja de treino do login ao checkout

Projeto modelo da Trilha de QA da **World IT Mission**. Testei a loja de treino e duas APIs de treino em quatro camadas: tela, API, banco e automação.

> Este é o projeto **modelo** que a trilha usa para mostrar como um portfólio de QA júnior pode ficar.
> Use como referência, não como cópia: o seu projeto conta a **sua** história de teste.

## Em números
- 12 casos de teste, 4 bugs (o mais grave: o Finish não conclui o pedido com o error_user)
- 10 pedidos na coleção do Postman, com ambiente
- 6 testes automáticos no Playwright, rodando no CI a cada envio

## O que foi testado
Login, vitrine, carrinho e checkout da loja de treino; API de reservas (Restful Booker) e de animais (Petstore); celular; plano de carga.

## Links
[estratégia](15-projeto-final/estrategia.md) | [casos](05-casos/casos-de-teste.md) | [bugs](06-bugs/) | [relatório](08-gestao/relatorio-entrega-1.md) | [coleção](10-api/) | [CI](.github/workflows/playwright.yml) | [checklist](15-projeto-final/checklist.md)

## Como rodar
```bash
npm install
npx playwright install chromium
npx playwright test
```

## Situação do CI (vermelho explicado)
- **O que falta:** o teste `checkout com o error_user termina o pedido` falha no último envio.
- **Por quê:** ainda estou investigando. Pode ser o BUG-001 (o Finish não conclui com o error_user) ou o próprio teste.
- **O que eu faria a seguir:** rodar de novo com o trace ligado, comparar com os passos do BUG-001 e, se for o bug, ligar o teste ao BUG-001 no relatório.

## O que aprendi
Escrever o esperado antes me fez achar 2 dos 4 bugs.

## Regras deste repositório
Nenhum dado real, nenhuma senha pessoal, nenhum token. Só os sites de treino públicos e os usuários que a própria página mostra.

---

# Final QA project: the practice store from login to checkout

Model project of the **World IT Mission** QA track. I tested the practice store and two practice APIs in four layers: UI, API, database and automation.

## In numbers
- 12 test cases, 4 bugs (the most severe: Finish does not complete the order with error_user)
- 10 requests in the Postman collection, with an environment
- 6 automated Playwright tests, running in CI on every push

## What was tested
Login, product list, cart and checkout of the practice store; booking API (Restful Booker) and pet API (Petstore); mobile; load plan.

## How to run
```bash
npm install
npx playwright install chromium
npx playwright test
```

## CI status (red, explained)
- **What is missing:** the test `checkout com o error_user termina o pedido` fails on the last push.
- **Why:** still under investigation. It may be BUG-001 (Finish does not complete with error_user) or the test itself.
- **Next step:** run it again with trace on, compare with the BUG-001 steps and, if it is the bug, link the test to BUG-001 in the report.

## What I learned
Writing the expected result first helped me find 2 of the 4 bugs.

## License
MIT. See [LICENSE](LICENSE).
