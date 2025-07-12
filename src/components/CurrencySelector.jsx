// src/components/CurrencySelector.jsx
import React from 'react'

export function CurrencySelector({ label, options, value, onChange }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-1 font-medium text-[#f1f5f9]">{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="border border-gray-600 rounded p-2 bg-[#0f172a] text-[#f1f5f9] focus:outline-none"
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

