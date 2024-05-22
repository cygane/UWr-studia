import { useState } from 'react'
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import './index.css'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className="calosc">
        <Header/>
        <Table/>
      </div>
    </QueryClientProvider>
  )
}

export default App
