# Casos de teste (12)

Loja de treino, Chrome. A senha é a pública que a página de entrada mostra (não fica escrita aqui).

| ID | Título | Pré-condição | Passos | Resultado esperado | Automatizado |
|---|---|---|---|---|---|
| CT-LOGIN-001 | Login com o standard_user | Página de entrada aberta | Digitar standard_user, a senha da página e clicar em "Login" | Abre a vitrine com o título "Products" | sim |
| CT-LOGIN-002 | Login com o usuário vazio | Página de entrada aberta | Deixar o usuário vazio, digitar a senha da página e clicar em "Login" | Mensagem "Epic sadface: Username is required" | não |
| CT-LOGIN-003 | Login com o locked_out_user | Página de entrada aberta | Digitar locked_out_user, a senha da página e clicar em "Login" | Mensagem "Epic sadface: Sorry, this user has been locked out." | sim |
| CT-LOGIN-004 | Login com senha errada | Página de entrada aberta | Digitar standard_user, a senha inventada senha123 e clicar em "Login" | Mensagem "Epic sadface: Username and password do not match any user in this service" | não |
| CT-CARRINHO-001 | Adicionar a mochila | Logado com o standard_user | Clicar em "Add to cart" da Sauce Labs Backpack | O ícone do carrinho mostra 1 e o botão vira "Remove" | sim |
| CT-CARRINHO-002 | Remover a mochila do carrinho | Mochila no carrinho | Abrir o carrinho e clicar em "Remove" | O carrinho fica vazio e o ícone some | não |
| CT-CARRINHO-003 | Ordenar por preço, do menor para o maior | Logado com o standard_user | Escolher "Price (low to high)" | O primeiro item é o mais barato | sim |
| CT-CHECKOUT-001 | Checkout completo | Mochila no carrinho, standard_user | Checkout, nome Aluno, sobrenome World IT Mission, código postal 12345, "Continue", "Finish" | "Thank you for your order!" | sim |
| CT-CHECKOUT-002 | Checkout com o nome vazio | Mochila no carrinho | Checkout, deixar o nome vazio, preencher o resto, "Continue" | Mensagem "Error: First Name is required" | não |
| CT-CHECKOUT-003 | Checkout com o código postal vazio | Mochila no carrinho | Checkout, preencher nome e sobrenome, deixar o código postal vazio, "Continue" | Mensagem "Error: Postal Code is required" | não |
| CT-CHECKOUT-004 | Resumo mostra o total | Mochila no carrinho, dados preenchidos | Chegar ao "Checkout: Overview" | Aparecem o subtotal, a taxa e o total | não |
| CT-CHECKOUT-005 | Checkout completo com o error_user | Mochila no carrinho, error_user | Os mesmos passos do CT-CHECKOUT-001 | "Thank you for your order!" (hoje falha: ver BUG-001) | sim |
