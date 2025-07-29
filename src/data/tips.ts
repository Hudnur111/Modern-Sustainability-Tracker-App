import { Tip } from '../types';

export const sustainabilityTips: Tip[] = [
  {
    id: '1',
    title: 'Nutze öffentliche Verkehrsmittel',
    description: 'Fahre mit Bus und Bahn statt mit dem Auto. Das reduziert deinen CO₂-Fußabdruck erheblich.',
    category: 'transport',
    difficulty: 'easy',
    potentialSaving: 120,
    icon: 'Bus'
  },
  {
    id: '2',
    title: 'Wechsle zu Ökostrom',
    description: 'Beziehe deinen Strom aus erneuerbaren Energiequellen wie Wind, Sonne oder Wasser.',
    category: 'energy',
    difficulty: 'easy',
    potentialSaving: 200,
    icon: 'Zap'
  },
  {
    id: '3',
    title: 'Reduziere Fleischkonsum',
    description: 'Versuche 2-3 vegetarische Tage pro Woche. Pflanzliche Ernährung ist klimafreundlicher.',
    category: 'food',
    difficulty: 'medium',
    potentialSaving: 80,
    icon: 'Apple'
  },
  {
    id: '4',
    title: 'Trenne Müll richtig',
    description: 'Sortiere deinen Müll gewissenhaft. Recycling spart Energie und Ressourcen.',
    category: 'waste',
    difficulty: 'easy',
    potentialSaving: 40,
    icon: 'Recycle'
  },
  {
    id: '5',
    title: 'Sammle Regenwasser',
    description: 'Nutze Regenwasser für Garten und Balkonpflanzen. Das spart Trinkwasser.',
    category: 'water',
    difficulty: 'medium',
    potentialSaving: 15,
    icon: 'Droplets'
  },
  {
    id: '6',
    title: 'Fahre Fahrrad',
    description: 'Kurze Strecken mit dem Rad zurücklegen. Gut für Umwelt und Gesundheit.',
    category: 'transport',
    difficulty: 'easy',
    potentialSaving: 60,
    icon: 'Bike'
  },
  {
    id: '7',
    title: 'LED-Lampen verwenden',
    description: 'Ersetze alte Glühbirnen durch energiesparende LED-Leuchmittel.',
    category: 'energy',
    difficulty: 'easy',
    potentialSaving: 25,
    icon: 'Lightbulb'
  },
  {
    id: '8',
    title: 'Regional einkaufen',
    description: 'Kaufe lokale und saisonale Produkte. Das reduziert Transportwege.',
    category: 'food',
    difficulty: 'medium',
    potentialSaving: 45,
    icon: 'ShoppingBasket'
  }
];