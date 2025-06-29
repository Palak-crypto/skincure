export interface SkinAnalysis {
  skinType: SkinType;
  concerns: SkinConcern[];
  overallScore: number;
  recommendations: Recommendation[];
}

export interface SkinType {
  type: 'oily' | 'dry' | 'combination' | 'sensitive' | 'normal';
  confidence: number;
  description: string;
}

export interface SkinConcern {
  type: 'acne' | 'wrinkles' | 'dark_spots' | 'redness' | 'texture' | 'pores';
  severity: 'mild' | 'moderate' | 'severe';
  confidence: number;
  description: string;
}

export interface Recommendation {
  category: 'cleanser' | 'moisturizer' | 'serum' | 'sunscreen' | 'treatment';
  title: string;
  description: string;
  ingredients: string[];
  usage: string;
  priority: 'high' | 'medium' | 'low';
}