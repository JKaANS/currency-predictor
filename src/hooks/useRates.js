// src/hooks/useRates.js
import { useQuery } from '@tanstack/react-query'

async function fetchRates(base) {
  const res = await fetch(`https://open.er-api.com/v6/latest/${base}`)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const data = await res.json()
  if (data.result !== 'success') {
    throw new Error(data['error-type'] || 'Falha na API')
  }
  return data.rates
}

export function useRates(base) {
  return useQuery({
    queryKey: ['rates', base],
    queryFn: () => fetchRates(base),
    enabled: Boolean(base),
    staleTime: 5 * 60_000,      // opcional
    cacheTime: 30 * 60_000,     // opcional
    refetchOnWindowFocus: false // opcional
  })
}