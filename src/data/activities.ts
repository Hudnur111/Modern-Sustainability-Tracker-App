import { CO2Activity } from '../types';

export const co2Activities: CO2Activity[] = [
  // Transport
  { name: 'Auto fahren', unit: 'km', co2PerUnit: 0.12, category: 'transport' },
  { name: 'Öffentliche Verkehrsmittel', unit: 'km', co2PerUnit: 0.04, category: 'transport' },
  { name: 'Fahrrad fahren', unit: 'km', co2PerUnit: 0, category: 'transport' },
  { name: 'Zu Fuß gehen', unit: 'km', co2PerUnit: 0, category: 'transport' },
  { name: 'Flug (Kurzstrecke)', unit: 'km', co2PerUnit: 0.25, category: 'transport' },
  
  // Energy
  { name: 'Strom verbrauchen', unit: 'kWh', co2PerUnit: 0.4, category: 'energy' },
  { name: 'Heizen mit Gas', unit: 'kWh', co2PerUnit: 0.2, category: 'energy' },
  { name: 'Ökostrom nutzen', unit: 'kWh', co2PerUnit: 0.05, category: 'energy' },
  
  // Food
  { name: 'Rindfleisch essen', unit: 'kg', co2PerUnit: 13.3, category: 'food' },
  { name: 'Schweinefleisch essen', unit: 'kg', co2PerUnit: 4.6, category: 'food' },
  { name: 'Hähnchen essen', unit: 'kg', co2PerUnit: 3.7, category: 'food' },
  { name: 'Vegetarische Mahlzeit', unit: 'Portion', co2PerUnit: 0.5, category: 'food' },
  { name: 'Vegane Mahlzeit', unit: 'Portion', co2PerUnit: 0.3, category: 'food' },
  
  // Waste
  { name: 'Papier recyceln', unit: 'kg', co2PerUnit: -0.7, category: 'waste' },
  { name: 'Plastik recyceln', unit: 'kg', co2PerUnit: -1.2, category: 'waste' },
  { name: 'Glas recyceln', unit: 'kg', co2PerUnit: -0.3, category: 'waste' },
  
  // Water
  { name: 'Duschen (10 Min)', unit: 'mal', co2PerUnit: 0.7, category: 'water' },
  { name: 'Baden', unit: 'mal', co2PerUnit: 1.2, category: 'water' },
  { name: 'Regenwasser sammeln', unit: 'Liter', co2PerUnit: -0.001, category: 'water' },
];