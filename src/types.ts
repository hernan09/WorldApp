export interface Creature {
  name: string;
  description: string;
  image: string;
}

export interface Era {
  id: string;
  name: string;
  period: string;
  description: string;
  keyFeatures: string[];
  image: string;
  creatures?: Creature[];
}