import { Challenge } from '../types';

export const challenges: Challenge[] = [
  {
    id: '1',
    title: 'Autofreie Woche',
    description: 'Verzichte eine ganze Woche auf das Auto und nutze alternative Verkehrsmittel.',
    points: 500,
    duration: 7,
    category: 'transport',
    completed: false,
    progress: 30,
    participants: 1247
  },
  {
    id: '2',
    title: 'Vegetarischer Monat',
    description: 'Ernähre dich einen ganzen Monat lang vegetarisch.',
    points: 800,
    duration: 30,
    category: 'food',
    completed: false,
    progress: 0,
    participants: 892
  },
  {
    id: '3',
    title: 'Zero Waste Woche',
    description: 'Vermeide eine Woche lang jeglichen Müll und recycele alles.',
    points: 600,
    duration: 7,
    category: 'waste',
    completed: true,
    progress: 100,
    participants: 654
  },
  {
    id: '4',
    title: 'Energiesparen',
    description: 'Reduziere deinen Stromverbrauch um 20% in zwei Wochen.',
    points: 400,
    duration: 14,
    category: 'energy',
    completed: false,
    progress: 65,
    participants: 1843
  },
  {
    id: '5',
    title: 'Wassersparen',
    description: 'Reduziere deinen Wasserverbrauch um 30% in einer Woche.',
    points: 300,
    duration: 7,
    category: 'water',
    completed: false,
    progress: 45,
    participants: 723
  }
];