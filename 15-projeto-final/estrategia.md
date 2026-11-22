# Estratégia de teste, projeto final (uma página)

- **Escopo:** login, vitrine, carrinho e checkout da loja de treino; API de reservas (Restful Booker) e de animais (Petstore).
- **Fora do escopo:** pagamento de verdade (a loja não tem); navegadores além do Chrome; carga acima de 5 usuários.
- **Riscos (chance x estrago):** 1 checkout não conclui (alto); 2 login aceita usuário errado (alto); 3 total errado no resumo (médio).
- **Níveis e tipos:** sistema e aceite na tela; integração na API; funcional, usabilidade, acessibilidade, desempenho leve.
- **Técnicas:** partição, valor limite, tabela de decisão, exploratório com missão.
- **Ambientes:** loja de treino no Chrome; bases de treino das APIs; celular no modo dispositivo e um aparelho real.
- **Entrada:** ambiente no ar; usuários da página funcionando.
- **Saída:** casos de risco alto rodados; nenhum bug crítico aberto sem decisão; relatório com recomendação.
- **Quadrantes:** Q1 testes do Playwright e API; Q2 casos e exemplos; Q3 exploratório e usabilidade; Q4 desempenho e acessibilidade.
