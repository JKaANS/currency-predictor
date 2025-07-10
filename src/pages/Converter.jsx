
import { useState } from 'react'
import { CurrencySelector } from '../components/CurrencySelector'

export default function Converter() {
  const [base, setBase] = useState('USD')
  const currencies = ['USD','EUR','BRL','JPY']

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Conversor de Moedas</h2>
      <CurrencySelector
        label="Moeda Base"
        options={currencies}
        onChange={setBase}
      />
      <p className="mt-2">Moeda selecionada: {base}</p>
    </div>
  )
}