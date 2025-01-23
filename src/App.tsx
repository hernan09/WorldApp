import React, { useState } from 'react';
import { Clock, Leaf, Mountain, Fish, Skull } from 'lucide-react';
import TimelineEra from './components/TimelineEra';
import { eras } from './data/eras';

function App() {
  const [selectedEra, setSelectedEra] = useState(eras[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <header className="py-8 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Journey Through Earth's History</h1>
        <p className="text-slate-300">Exploring 4.5 Billion Years of Evolution power by Hernan Gomez</p>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {eras.map((era) => (
            <button
              key={era.id}
              onClick={() => setSelectedEra(era)}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedEra.id === era.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
              }`}
            >
              {era.name}
            </button>
          ))}
        </div>

        <TimelineEra era={selectedEra} />
      </div>
    </div>
  );
}

export default App;