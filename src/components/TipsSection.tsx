import React, { useState } from 'react';
import { Lightbulb, ChevronRight, Filter, Star } from 'lucide-react';
import { sustainabilityTips } from '../data/tips';
import { Tip } from '../types';

const TipsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [expandedTip, setExpandedTip] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'Alle', color: 'bg-gray-500' },
    { id: 'transport', name: 'Transport', color: 'bg-blue-500' },
    { id: 'energy', name: 'Energie', color: 'bg-yellow-500' },
    { id: 'food', name: 'Ernährung', color: 'bg-green-500' },
    { id: 'waste', name: 'Müll', color: 'bg-purple-500' },
    { id: 'water', name: 'Wasser', color: 'bg-cyan-500' }
  ];

  const difficulties = [
    { id: 'all', name: 'Alle' },
    { id: 'easy', name: 'Einfach' },
    { id: 'medium', name: 'Mittel' },
    { id: 'hard', name: 'Schwer' }
  ];

  const filteredTips = sustainabilityTips.filter(tip => {
    const categoryMatch = selectedCategory === 'all' || tip.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || tip.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Nachhaltigkeits-Tipps</h2>
        <p className="text-gray-600">Entdecke praktische Tipps für ein umweltfreundlicheres Leben</p>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <Filter size={16} className="mr-1" />
            Kategorie
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-green-500 text-white scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className={`w-2 h-2 rounded-full mr-2 ${category.color}`} />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Schwierigkeit</h3>
          <div className="flex flex-wrap gap-2">
            {difficulties.map(difficulty => (
              <button
                key={difficulty.id}
                onClick={() => setSelectedDifficulty(difficulty.id)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedDifficulty === difficulty.id
                    ? 'bg-green-500 text-white scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {difficulty.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tips List */}
      <div className="space-y-4">
        {filteredTips.map((tip) => {
          const isExpanded = expandedTip === tip.id;
          const categoryData = categories.find(c => c.id === tip.category);

          return (
            <div
              key={tip.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div
                className="p-4 cursor-pointer"
                onClick={() => setExpandedTip(isExpanded ? null : tip.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className={`w-3 h-3 rounded-full mr-2 ${categoryData?.color}`} />
                      <h3 className="font-semibold text-gray-800">{tip.title}</h3>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tip.difficulty)}`}>
                        {tip.difficulty === 'easy' ? 'Einfach' : tip.difficulty === 'medium' ? 'Mittel' : 'Schwer'}
                      </span>
                      <div className="flex items-center text-green-600">
                        <Star size={14} className="mr-1" />
                        <span className="text-sm font-medium">{tip.potentialSaving} kg/Monat</span>
                      </div>
                    </div>
                  </div>
                  
                  <ChevronRight
                    size={20}
                    className={`text-gray-400 transition-transform duration-300 ${
                      isExpanded ? 'rotate-90' : ''
                    }`}
                  />
                </div>
              </div>

              {isExpanded && (
                <div className="px-4 pb-4 animate-fadeIn">
                  <div className="border-t pt-4">
                    <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center text-green-700">
                        <Lightbulb size={16} className="mr-2" />
                        <span className="text-sm font-medium">
                          Potentielle CO₂-Einsparung: {tip.potentialSaving} kg pro Monat
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredTips.length === 0 && (
        <div className="text-center py-12">
          <Lightbulb size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500">Keine Tipps für die ausgewählten Filter gefunden.</p>
        </div>
      )}
    </div>
  );
};

export default TipsSection;