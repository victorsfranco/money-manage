import Modal from 'react-modal';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Container, RadioButton, TransactionTypeContainer } from './styles';
import { api } from '../../services/api';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { NewTransactionModalProps, TransactionProps } from '../../types/types';

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {

  const [newTransaction, setNewTransaction] = useState<TransactionProps>({
    title: '',
    amount: 0,
    type: null,
    category: ''
  })

  const [transactionType, setTransactionType] = useState<null | 'deposit' | 'withdraw'>(null);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTransaction({ ...newTransaction, title: e.target.value })
  }

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTransaction({ ...newTransaction, amount: Number(e.target.value) })
  }

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTransaction({ ...newTransaction, category: e.target.value })
  }

  const handleSaveTransaction = (e: FormEvent) => {
    e.preventDefault();
    api.post('/transactions', newTransaction)
    setNewTransaction({
      title: '',
      amount: 0,
      type: null,
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
            isActive={transactionType === 'deposit'}
            activeColor='#12A45410'
            onClick={() => setTransactionType('deposit')}
          >
            <img
              src={incomeImg}
            />
            Entrada
          </RadioButton>
          <RadioButton type='button'
            isActive={transactionType === 'withdraw'}
            activeColor='#E52E4D10'
            onClick={() => setTransactionType('withdraw')}
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