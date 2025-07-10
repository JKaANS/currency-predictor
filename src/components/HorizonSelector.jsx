import { useState, useEffect } from 'react';

export function HorizonSelector({ onSelect }) {
  const horizons = [5, 15, 30, 90];
  const [active, setActive] = useState(horizons[0]);

  useEffect(() => { onSelect(active); }, [active, onSelect]);

  return (
    <div className="flex gap-2">
      {horizons.map(day => (
        <button
          key={day}
          className={`px-3 py-1 rounded ${active === day ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActive(day)}
        >
          +{day} dias
        </button>
      ))}
    </div>
  );
}