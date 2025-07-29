import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import CO2Calculator from './components/CO2Calculator';
import TipsSection from './components/TipsSection';
import ChallengesSection from './components/ChallengesSection';
import SocialSection from './components/SocialSection';
import ProfileSection from './components/ProfileSection';
import { Leaf } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('calculator');

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'calculator':
        return <CO2Calculator />;
      case 'tips':
        return <TipsSection />;
      case 'challenges':
        return <ChallengesSection />;
      case 'social':
        return <SocialSection />;
      case 'profile':
        return <ProfileSection />;
      default:
        return <CO2Calculator />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-green-100 sticky top-0 z-40">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
              <Leaf className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              EcoTracker
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto pb-20">
        <div className="animate-fadeIn">
          {renderActiveSection()}
        </div>
      </main>

      {/* Navigation */}
      <NavigationBar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;