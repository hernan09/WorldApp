import React from 'react';
import { Era } from '../types';

interface TimelineEraProps {
  era: Era;
}

const TimelineEra: React.FC<TimelineEraProps> = ({ era }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-xl p-6 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">{era.name}</h2>
          <div className="text-slate-300 mb-4">
            <p className="font-semibold">Time Period:</p>
            <p>{era.period}</p>
          </div>
          <div className="prose prose-invert">
            <p className="text-slate-300">{era.description}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside text-slate-300">
              {era.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="aspect-video rounded-lg overflow-hidden mb-4">
            <img
              src={era.image}
              alt={era.name}
              className="w-full h-full object-cover"
            />
          </div>
          {era.creatures && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Notable Life Forms:</h3>
              <div className="grid grid-cols-2 gap-4">
                {era.creatures.map((creature, index) => (
                  <div key={index} className="bg-slate-700 rounded-lg p-4">
                    <div className="aspect-video rounded-lg overflow-hidden mb-3">
                      <img
                        src={creature.image}
                        alt={creature.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold mb-1">{creature.name}</h4>
                    <p className="text-sm text-slate-300">{creature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TimelineEra;