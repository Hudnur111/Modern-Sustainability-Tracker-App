import React from 'react';
import { User, Award, Target, TrendingUp, Settings, Share2, Calendar } from 'lucide-react';

const ProfileSection: React.FC = () => {
  const user = {
    name: 'Du',
    avatar: '🌱',
    points: 3250,
    level: 9,
    co2Saved: 234.5,
    streakDays: 12,
    challengesCompleted: 8,
    rank: 127
  };

  const achievements = [
    { id: 1, name: 'Eco-Warrior', description: '1000 Punkte erreicht', icon: '🏆', unlocked: true },
    { id: 2, name: 'Streak Master', description: '7 Tage in Folge aktiv', icon: '🔥', unlocked: true },
    { id: 3, name: 'Challenge Champion', description: '5 Challenges abgeschlossen', icon: '⭐', unlocked: true },
    { id: 4, name: 'CO₂ Saver', description: '100kg CO₂ gespart', icon: '🌿', unlocked: true },
    { id: 5, name: 'Community Hero', description: '50 Freunde hinzugefügt', icon: '🤝', unlocked: false },
    { id: 6, name: 'Green Giant', description: '500kg CO₂ gespart', icon: '🌳', unlocked: false }
  ];

  const stats = [
    { label: 'CO₂ gespart', value: `${user.co2Saved} kg`, icon: TrendingUp, color: 'text-green-600' },
    { label: 'Tage-Streak', value: user.streakDays, icon: Calendar, color: 'text-orange-600' },
    { label: 'Challenges', value: user.challengesCompleted, icon: Target, color: 'text-purple-600' },
    { label: 'Globaler Rang', value: `#${user.rank}`, icon: Award, color: 'text-blue-600' }
  ];

  const getLevelProgress = () => {
    const currentLevelPoints = (user.level - 1) * 500;
    const nextLevelPoints = user.level * 500;
    const progress = ((user.points - currentLevelPoints) / (nextLevelPoints - currentLevelPoints)) * 100;
    return Math.min(progress, 100);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-5xl">{user.avatar}</div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <div className="flex items-center space-x-2 text-green-100">
              <span className="text-lg">Level {user.level}</span>
              <div className="bg-white/20 px-2 py-1 rounded-full text-sm">
                {user.points.toLocaleString()} Punkte
              </div>
            </div>
          </div>
          <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
            <Settings size={20} />
          </button>
        </div>

        {/* Level Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Level {user.level}</span>
            <span>Level {user.level + 1}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-500"
              style={{ width: `${getLevelProgress()}%` }}
            />
          </div>
          <div className="text-center text-sm text-green-100">
            {Math.round((500 - (user.points % 500)))} Punkte bis Level {user.level + 1}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <Icon size={20} className={stat.color} />
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <Award className="mr-2 text-yellow-500" size={20} />
          Erfolge
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                achievement.unlocked
                  ? 'border-green-200 bg-green-50 hover:border-green-300'
                  : 'border-gray-200 bg-gray-50 opacity-60'
              }`}
            >
              <div className="text-center">
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <h4 className={`font-semibold text-sm mb-1 ${
                  achievement.unlocked ? 'text-gray-800' : 'text-gray-500'
                }`}>
                  {achievement.name}
                </h4>
                <p className={`text-xs ${
                  achievement.unlocked ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  {achievement.description}
                </p>
              </div>
              {achievement.unlocked && (
                <div className="absolute top-2 right-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-green-500 text-white py-4 rounded-2xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center">
          <Share2 size={20} className="mr-2" />
          Fortschritt teilen
        </button>
        
        <button className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center">
          <User size={20} className="mr-2" />
          Freunde einladen
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;