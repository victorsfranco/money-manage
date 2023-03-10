import { useTransactions } from "../../hooks/useTransactions";

import { Container, EmptyContainer } from "./styles";

export function TransactionsTable() {

  const { transactions } = useTransactions();

  if (transactions.length <= 0) {
    return (
      <EmptyContainer>
        <h3>Insira uma transação</h3>
        <p>Clique em <span>Nova trasação</span> para cadastrar sua primeira transação!</p>
      </EmptyContainer>
    )
  } else {
    return (
      <Container>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {
              transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>

                  <td className={transaction.type}>{new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}</td>

                  <td>{transaction.category}</td>
                  <td>{new Intl.DateTimeFormat('pt-br').format(
                    new Date(transaction.createdAt))}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </Container>
    );

  }


}
