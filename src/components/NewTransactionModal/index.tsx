import Modal from 'react-modal';
import { ChangeEvent, FormEvent, useState, useContext } from 'react';
import { NewTransactionModalProps, TransactionProps } from '../../types/types';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, RadioButton, TransactionTypeContainer } from './styles';
import { useTransactions } from '../../hooks/useTransactions';

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {


  const [newTransaction, setNewTransaction] = useState<TransactionProps>({
    title: '',
    amount: 0,
    type: 'deposit',
    category: ''
  })

  const { createTransaction } = useTransactions()



  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTransaction({ ...newTransaction, title: e.target.value })
  }

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTransaction({ ...newTransaction, amount: Number(e.target.value) })
  }

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTransaction({ ...newTransaction, category: e.target.value })
  }

  const handleSaveTransaction = async (e: FormEvent) => {
    e.preventDefault();

    await createTransaction(newTransaction)

    setNewTransaction({
      title: '',
      amount: 0,
      type: 'deposit',
      category: ''
    })
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >

      <button type='button'>
        <img
          src={closeImg}
          onClick={onRequestClose}
          className='react-modal-close'
        />
      </button>

      <Container onSubmit={handleSaveTransaction}>
        <h2>Cadastrar transação</h2>

        <input type="text"
          placeholder='Título'
          onChange={handleTitleChange}
          value={newTransaction.title}
        />
        <input type="number"
          placeholder='Valor'
          onChange={handleAmountChange}
          value={newTransaction.amount} />

        <TransactionTypeContainer>
          <RadioButton
            type='button'
            isActive={newTransaction.type === 'deposit'}
            activeColor='#12A45410'
            onClick={() => setNewTransaction({ ...newTransaction, type: 'deposit' })}
          >
            <img
              src={incomeImg}
            />
            Entrada
          </RadioButton>
          <RadioButton type='button'
            isActive={newTransaction.type === 'withdraw'}
            activeColor='#E52E4D10'
            onClick={() => setNewTransaction({ ...newTransaction, type: 'withdraw' })}
          >
            <img
              src={outcomeImg}
            />
            Saída
          </RadioButton>
        </TransactionTypeContainer>

        <input type="text"
          placeholder='Categoria'
          onChange={handleCategoryChange}
          value={newTransaction.category} />

        <button type="submit" disabled={newTransaction.title === '' || newTransaction.category === ''}>Cadastrar</button>
      </Container>
    </Modal>
  );
}