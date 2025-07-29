export interface User {
  id: string;
  name: string;
  avatar: string;
  points: number;
  level: number;
  weeklyTarget: number;
  friends: string[];
}

export interface Activity {
  id: string;
  type: 'transport' | 'energy' | 'food' | 'waste' | 'water';
  name: string;
  co2Saved: number;
  points: number;
  date: Date;
  userId: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  duration: number; // days
  category: 'transport' | 'energy' | 'food' | 'waste' | 'water';
  completed: boolean;
  progress: number; // 0-100
  participants: number;
}

export interface Tip {
  id: string;
  title: string;
  description: string;
  category: 'transport' | 'energy' | 'food' | 'waste' | 'water';
  difficulty: 'easy' | 'medium' | 'hard';
  potentialSaving: number; // kg CO2 per month
  icon: string;
}

export interface CO2Activity {
  name: string;
  unit: string;
  co2PerUnit: number; // kg CO2
  category: 'transport' | 'energy' | 'food' | 'waste' | 'water';
}