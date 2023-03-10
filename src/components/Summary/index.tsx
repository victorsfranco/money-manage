import CountUp from "react-countup";
import { useTransactions } from "../../hooks/useTransactions";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import { Container } from "./styles";

export function Summary() {

  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {

    if (transaction.type === 'deposit') acc.deposits += transaction.amount;
    else if (transaction.type === 'withdraw') acc.withdraws += transaction.amount;
    acc.total = acc.deposits - acc.withdraws;

    return acc
  },
    {
      deposits: 0,
      withdraws: 0,
      total: 0
    }
  )


  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          <CountUp
            start={0}
            end={summary.deposits}
            duration={0.9}
            decimals={2}
            decimal=','
            prefix="R$ "
            separator="."
          />
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          -
          <CountUp
            start={0}
            end={summary.withdraws}
            duration={0.9}
            decimals={2}
            decimal=','
            prefix="R$ "
            separator="."
          />
        </strong>
      </div>

      <div className={summary.total >= 0 ? 'positive-total' : 'negative-total'}>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          <CountUp
            start={0}
            end={summary.total}
            duration={0.9}
            decimals={2}
            decimal=','
            prefix='R$ '
            separator="."
          />
        </strong>
      </div>
    </Container>
  );
}
