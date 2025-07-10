// src/components/CurrencySelector.jsx
import React from 'react'

export function CurrencySelector({ label, options, onChange }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-1 font-medium">{label}</label>
      <select
        className="border rounded p-2"
        onChange={e => onChange(e.target.value)}
      >
        {options.map(code => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
    </div>
  )
}