import React, { useState, useEffect } from 'react'
import { useRates } from '../hooks/useRates'
import { CurrencySelector } from '../components/CurrencySelector'

const CURRENCIES = ['USD', 'EUR', 'BRL', 'JPY']
const STORAGE_KEY = 'conversionHistory'

export default function Converter() {
  const [base, setBase] = useState('USD')
  const [target, setTarget] = useState('BRL')
  const [amount, setAmount] = useState('1')
  const [history, setHistory] = useState([])

  const {
    data: rates,
    isLoading: ratesLoading,
    isError: ratesError,
    error: ratesErrorMsg,
  } = useRates(base)

  // 1. Carrega histórico do localStorage ao iniciar
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) setHistory(JSON.parse(stored))
  }, [])

  // 2. Atualiza histórico sempre que as taxas chegarem e o valor for válido
  useEffect(() => {
    if (!rates || ratesLoading) return

    const valor = Number(amount)
    if (isNaN(valor) || valor <= 0 || !rates[target]) return

    const converted = (rates[target] * valor).toFixed(2)
    const record = {
      timestamp: new Date().toISOString(),
      from: base,
      to: target,
      amount: valor,
      result: converted,
    }

    setHistory(prevHistory => {
      const updated = [record, ...prevHistory].slice(0, 5)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }, [rates, ratesLoading, base, target, amount])

  const formatDate = iso =>
    new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short',
    }).format(new Date(iso))

  const valor = Number(amount)
  const rate = rates?.[target]
  const result =
    !ratesLoading && rate && valor > 0 ? (rate * valor).toFixed(2) : null

  return (
    <div className="mx-auto max-w-md sm:max-w-lg px-4 py-6 bg-bg text-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-primary mb-6">
        Conversor de Moedas
      </h2>

      <CurrencySelector
        label="De"
        options={CURRENCIES}
        value={base}
        onChange={setBase}
        disabled={ratesLoading}
        className="border border-gray-700 rounded-md bg-bg-alt focus:ring-2 focus:ring-primary transition mb-4"
      />

      <CurrencySelector
        label="Para"
        options={CURRENCIES}
        value={target}
        onChange={setTarget}
        disabled={ratesLoading}
        className="border border-gray-700 rounded-md bg-bg-alt focus:ring-2 focus:ring-primary transition mb-4"
      />

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-300">
          Valor
        </label>
        <input
          type="number"
          min="0"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="w-full p-2 bg-bg-alt border border-gray-700 rounded-md focus:ring-2 focus:ring-primary transition"
        />
      </div>

      {rate && !ratesLoading && (
        <p className="mt-2 text-sm text-gray-400">
          1 {base} = <span className="font-medium">{rate.toFixed(4)}</span> {target}
        </p>
      )}

      {result && (
        <p className="mt-2 text-lg font-semibold">
          {valor} {base} = <span className="text-primary">{result}</span> {target}
        </p>
      )}

      {ratesLoading && (
        <p className="mt-4 text-gray-400">Buscando taxas…</p>
      )}

      {ratesError && (
        <p className="mt-4 text-red-500">
          Erro ao buscar taxas: {ratesErrorMsg.message}
        </p>
      )}

      {history.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-primary">Histórico</h3>
          <ul className="divide-y divide-gray-700 max-h-64 overflow-auto">
            {history.map((item, idx) => (
              <li
                key={idx}
                className="py-3 flex justify-between bg-bg-alt rounded-md px-4 mb-2"
              >
                <div>
                  <span className="block">
                    {item.amount} {item.from} → {item.result} {item.to}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatDate(item.timestamp)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}