-- Consultas de conferência (banco de treino das aulas). Provam o que ficou guardado depois do checkout.
-- 1. O pedido foi gravado para o cliente de teste?
SELECT id, cliente, total FROM pedidos WHERE cliente = 'Aluno World IT Mission';

-- 2. Quantos itens tem cada pedido?
SELECT pedido_id, COUNT(*) AS itens FROM itens_pedido GROUP BY pedido_id;

-- 3. Algum pedido ficou sem item? (não deveria)
SELECT p.id FROM pedidos p LEFT JOIN itens_pedido i ON i.pedido_id = p.id WHERE i.pedido_id IS NULL;
