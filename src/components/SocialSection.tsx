import React, { useState } from 'react';
import { Users, Award, TrendingUp, MessageCircle, Heart, Share } from 'lucide-react';

interface Friend {
  id: string;
  name: string;
  avatar: string;
  points: number;
  level: number;
  weeklyTarget: number;
  currentWeekly: number;
}

interface Activity {
  id: string;
  user: string;
  avatar: string;
  action: string;
  co2Saved: number;
  points: number;
  timestamp: string;
  likes: number;
  comments: number;
}

const SocialSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'feed' | 'leaderboard'>('feed');

  const friends: Friend[] = [
    { id: '1', name: 'Anna Weber', avatar: '👩‍🦰', points: 2850, level: 8, weeklyTarget: 200, currentWeekly: 145 },
    { id: '2', name: 'Max Müller', avatar: '👨‍💼', points: 2420, level: 7, weeklyTarget: 180, currentWeekly: 210 },
    { id: '3', name: 'Lisa Schmidt', avatar: '👩‍🎓', points: 2180, level: 6, weeklyTarget: 150, currentWeekly: 89 },
    { id: '4', name: 'Tom Fischer', avatar: '👨‍🔬', points: 1950, level: 6, weeklyTarget: 160, currentWeekly: 134 },
    { id: '5', name: 'Sarah Klein', avatar: '👩‍💻', points: 1750, level: 5, weeklyTarget: 140, currentWeekly: 167 }
  ];

  const activities: Activity[] = [
    {
      id: '1',
      user: 'Anna Weber',
      avatar: '👩‍🦰',
      action: 'ist diese Woche mit dem Fahrrad zur Arbeit gefahren',
      co2Saved: 12.5,
      points: 125,
      timestamp: 'vor 2 Stunden',
      likes: 8,
      comments: 3
    },
    {
      id: '2',
      user: 'Max Müller',
      avatar: '👨‍💼',
      action: 'hat die "Zero Waste Woche" Challenge abgeschlossen',
      co2Saved: 8.2,
      points: 600,
      timestamp: 'vor 4 Stunden',
      likes: 15,
      comments: 7
    },
    {
      id: '3',
      user: 'Lisa Schmidt',
      avatar: '👩‍🎓',
      action: 'hat 3 Tage vegetarisch gegessen',
      co2Saved: 6.8,
      points: 85,
      timestamp: 'vor 6 Stunden',
      likes: 12,
      comments: 2
    },
    {
      id: '4',
      user: 'Tom Fischer',
      avatar: '👨‍🔬',
      action: 'hat auf Ökostrom umgestellt',
      co2Saved: 45.0,
      points: 450,
      timestamp: 'vor 1 Tag',
      likes: 23,
      comments: 9
    }
  ];

  const getLevelColor = (level: number) => {
    if (level >= 8) return 'from-purple-500 to-pink-500';
    if (level >= 6) return 'from-blue-500 to-cyan-500';
    if (level >= 4) return 'from-green-500 to-emerald-500';
    return 'from-gray-500 to-gray-600';
  };

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Social Hub</h2>
        <p className="text-gray-600">Verbinde dich mit anderen Eco-Warriors</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex bg-gray-100 rounded-2xl p-1">
        <button
          onClick={() => setActiveTab('feed')}
          className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center ${
            activeTab === 'feed'
              ? 'bg-white text-green-600 shadow-md scale-105'
              : 'text-gray-600 hover:text-green-600'
          }`}
        >
          <MessageCircle size={16} className="mr-1" />
          Activity Feed
        </button>
        <button
          onClick={() => setActiveTab('leaderboard')}
          className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center ${
            activeTab === 'leaderboard'
              ? 'bg-white text-green-600 shadow-md scale-105'
              : 'text-gray-600 hover:text-green-600'
          }`}
        >
          <Award size={16} className="mr-1" />
          Rangliste
        </button>
      </div>

      {activeTab === 'feed' && (
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{activity.avatar}</div>
                
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="font-semibold text-gray-800">{activity.user}</span>
                    <span className="text-gray-500 text-sm ml-2">{activity.timestamp}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-3">{activity.action}</p>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      -{activity.co2Saved} kg CO₂
                    </div>
                    <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                      +{activity.points} Punkte
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-gray-500 text-sm">
                    <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                      <Heart size={16} />
                      <span>{activity.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                      <MessageCircle size={16} />
                      <span>{activity.comments}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-green-500 transition-colors">
                      <Share size={16} />
                      <span>Teilen</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'leaderboard' && (
        <div className="space-y-4">
          {friends.map((friend, index) => (
            <div
              key={friend.id}
              className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center space-x-4">
                {/* Rank */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                  index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-amber-600' : 'bg-gray-300'
                }`}>
                  {index + 1}
                </div>
                
                {/* Avatar */}
                <div className="text-3xl">{friend.avatar}</div>
                
                {/* User Info */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{friend.name}</h3>
                    <div className="text-right">
                      <div className="font-bold text-green-600">{friend.points.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">Punkte</div>
                    </div>
                  </div>
                  
                  {/* Level Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className={`bg-gradient-to-r ${getLevelColor(friend.level)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      Level {friend.level}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <TrendingUp size={14} className="mr-1" />
                      {friend.currentWeekly}/{friend.weeklyTarget} diese Woche
                    </div>
                  </div>
                  
                  {/* Weekly Progress */}
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
                      style={{ width: `${getProgressPercentage(friend.currentWeekly, friend.weeklyTarget)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialSection;