import React, { useState } from 'react';
import { Trophy, Users, Calendar, CheckCircle, Circle, Flame } from 'lucide-react';
import { challenges } from '../data/challenges';

const ChallengesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', name: 'Alle' },
    { id: 'active', name: 'Aktiv' },
    { id: 'completed', name: 'Abgeschlossen' }
  ];

  const filteredChallenges = challenges.filter(challenge => {
    if (activeFilter === 'active') return !challenge.completed && challenge.progress > 0;
    if (activeFilter === 'completed') return challenge.completed;
    return true;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      transport: 'from-blue-500 to-blue-600',
      energy: 'from-yellow-500 to-yellow-600',
      food: 'from-green-500 to-green-600',
      waste: 'from-purple-500 to-purple-600',
      water: 'from-cyan-500 to-cyan-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const joinChallenge = (challengeId: string) => {
    // Handle joining challenge
    console.log('Joining challenge:', challengeId);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Eco-Challenges</h2>
        <p className="text-gray-600">Nimm an Herausforderungen teil und sammle Punkte</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex bg-gray-100 rounded-2xl p-1">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeFilter === filter.id
                ? 'bg-white text-green-600 shadow-md scale-105'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            {filter.name}
          </button>
        ))}
      </div>

      {/* Challenges List */}
      <div className="space-y-4">
        {filteredChallenges.map((challenge) => (
          <div
            key={challenge.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]"
          >
            <div className={`h-2 bg-gradient-to-r ${getCategoryColor(challenge.category)}`} />
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {challenge.completed ? (
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                    ) : (
                      <Circle className="text-gray-400 mr-2" size={20} />
                    )}
                    <h3 className="font-bold text-gray-800">{challenge.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{challenge.description}</p>
                </div>
                
                <div className="text-right ml-4">
                  <div className="flex items-center text-yellow-500 mb-1">
                    <Trophy size={16} className="mr-1" />
                    <span className="font-bold">{challenge.points}</span>
                  </div>
                  <div className="text-xs text-gray-500">Punkte</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Fortschritt</span>
                  <span>{challenge.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${getCategoryColor(challenge.category)} transition-all duration-500 ease-out`}
                    style={{ width: `${challenge.progress}%` }}
                  />
                </div>
              </div>

              {/* Challenge Info */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>{challenge.duration} Tage</span>
                </div>
                <div className="flex items-center">
                  <Users size={14} className="mr-1" />
                  <span>{challenge.participants.toLocaleString()} Teilnehmer</span>
                </div>
              </div>

              {/* Action Button */}
              {!challenge.completed ? (
                <button
                  onClick={() => joinChallenge(challenge.id)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    challenge.progress > 0
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transform hover:scale-105'
                  }`}
                >
                  {challenge.progress > 0 ? 'Fortsetzen' : 'Challenge starten'}
                </button>
              ) : (
                <div className="w-full py-3 bg-green-100 text-green-700 rounded-xl font-semibold text-center">
                  <div className="flex items-center justify-center">
                    <CheckCircle size={18} className="mr-2" />
                    Abgeschlossen!
                  </div>
                </div>
              )}
            </div>

            {/* Hot Challenge Indicator */}
            {challenge.participants > 1000 && !challenge.completed && (
              <div className="absolute top-4 right-4">
                <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center animate-pulse">
                  <Flame size={12} className="mr-1" />
                  Hot
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredChallenges.length === 0 && (
        <div className="text-center py-12">
          <Trophy size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500">Keine Challenges für den ausgewählten Filter gefunden.</p>
        </div>
      )}
    </div>
  );
};

export default ChallengesSection;