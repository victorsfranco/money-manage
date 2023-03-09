import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import Modal from 'react-modal';

// Components:
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';

import { TransactionProps } from './types/types';
import { TransactionsContext } from './transactionsContext';


Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsTransactionModalOpen(true)

  }

  function handleCloseNewTransactionModal() {
    setIsTransactionModalOpen(false)
  }



  return (
    <TransactionsContext.Provider value={['asdsad']}>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsContext.Provider>
  )
}

