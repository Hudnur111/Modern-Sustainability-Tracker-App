import React from 'react';
import { Calculator, Lightbulb, Trophy, Users, User } from 'lucide-react';

interface NavigationBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'calculator', icon: Calculator, label: 'Rechner' },
    { id: 'tips', icon: Lightbulb, label: 'Tipps' },
    { id: 'challenges', icon: Trophy, label: 'Challenges' },
    { id: 'social', icon: Users, label: 'Social' },
    { id: 'profile', icon: User, label: 'Profil' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-gray-200 z-50">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'text-green-600 bg-green-50 scale-110' 
                    : 'text-gray-500 hover:text-green-500 hover:bg-green-50/50'
                }`}
              >
                <Icon size={20} className={`mb-1 transition-transform duration-300 ${
                  isActive ? 'scale-110' : ''
                }`} />
                <span className="text-xs font-medium">{item.label}</span>
                {isActive && (
                  <div className="absolute -bottom-1 w-8 h-1 bg-green-600 rounded-full animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;