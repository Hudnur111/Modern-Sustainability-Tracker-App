import React, { useState } from 'react';
import { Calculator, Plus, Minus } from 'lucide-react';
import { co2Activities } from '../data/activities';

const CO2Calculator: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState(co2Activities[0]);
  const [amount, setAmount] = useState(1);
  const [totalCO2, setTotalCO2] = useState(0);
  const [calculations, setCalculations] = useState<Array<{activity: string, amount: number, co2: number}>>([]);

  const handleCalculate = () => {
    const co2 = selectedActivity.co2PerUnit * amount;
    setTotalCO2(prev => prev + co2);
    setCalculations(prev => [...prev, {
      activity: selectedActivity.name,
      amount,
      co2
    }]);
    setAmount(1);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      transport: 'bg-blue-500',
      energy: 'bg-yellow-500',
      food: 'bg-green-500',
      waste: 'bg-purple-500',
      water: 'bg-cyan-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  const resetCalculator = () => {
    setTotalCO2(0);
    setCalculations([]);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">CO₂-Rechner</h2>
        <p className="text-gray-600">Berechne deinen täglichen CO₂-Fußabdruck</p>
      </div>

      {/* Total CO2 Display */}
      <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-center mb-2">
          <Calculator className="mr-2" size={24} />
          <span className="text-lg font-semibold">Gesamt CO₂</span>
        </div>
        <div className="text-4xl font-bold mb-1">
          {Math.abs(totalCO2).toFixed(2)}
          <span className="text-lg ml-1">kg</span>
        </div>
        <div className="text-sm opacity-90">
          {totalCO2 >= 0 ? 'CO₂ Ausstoß' : 'CO₂ Einsparung'}
        </div>
      </div>

      {/* Activity Selection */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Aktivität auswählen</h3>
        
        <select
          value={co2Activities.indexOf(selectedActivity)}
          onChange={(e) => setSelectedActivity(co2Activities[parseInt(e.target.value)])}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          {co2Activities.map((activity, index) => (
            <option key={index} value={index}>
              {activity.name} ({activity.unit})
            </option>
          ))}
        </select>

        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700">Menge:</span>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setAmount(Math.max(0.1, amount - 1))}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Minus size={16} />
            </button>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
              className="w-20 text-center p-2 border rounded-lg"
              min="0.1"
              step="0.1"
            />
            <button
              onClick={() => setAmount(amount + 1)}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        <div className="text-center">
          <div className="text-sm text-gray-600 mb-3">
            CO₂ pro {selectedActivity.unit}: {selectedActivity.co2PerUnit} kg
          </div>
          <button
            onClick={handleCalculate}
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors transform hover:scale-105 duration-200"
          >
            Hinzufügen
          </button>
        </div>
      </div>

      {/* Calculations History */}
      {calculations.length > 0 && (
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Berechnungen</h3>
            <button
              onClick={resetCalculator}
              className="text-red-500 hover:text-red-700 text-sm font-medium"
            >
              Zurücksetzen
            </button>
          </div>
          
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {calculations.map((calc, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-800">{calc.activity}</div>
                  <div className="text-sm text-gray-600">{calc.amount} Einheiten</div>
                </div>
                <div className={`text-right ${calc.co2 >= 0 ? 'text-red-600' : 'text-green-600'}`}>
                  <div className="font-bold">
                    {calc.co2 >= 0 ? '+' : ''}{calc.co2.toFixed(2)} kg
                  </div>
                  <div className="text-xs">CO₂</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CO2Calculator;