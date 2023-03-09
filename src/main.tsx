import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de site ',
          amount: 5599.99,
          type: 'deposit',
          category: 'Freelance',
          createdAt: new Date('2023-01-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 1100,
          type: 'withdraw',
          category: 'Despesas Fixas',
          createdAt: new Date('2023-01-15 15:00:00')
        },
        {
          id: 3,
          title: 'Tocar em casamento',
          amount: 300,
          type: 'deposit',
          category: 'Freelance',
          createdAt: new Date('2023-01-15 15:00:00')
        },
        {
          id: 4,
          title: 'Conta de energia',
          amount: 250,
          type: 'withdraw',
          category: 'Despesas Fixas',
          createdAt: new Date('2023-01-15 15:00:00')
        },
        {
          id: 5,
          title: 'Conta de agua',
          amount: 250,
          type: 'withdraw',
          category: 'Despesas Fixas',
          createdAt: new Date('2023-01-15 15:00:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

import { App } from './App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)