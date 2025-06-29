import { SkinAnalysis, SkinType, SkinConcern, Recommendation } from '../types/skin';

export const analyzeSkin = async (imageFile: File): Promise<SkinAnalysis> => {
  // Simulate AI processing time
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Mock analysis based on random factors (in real app, this would be AI/ML)
  const skinTypes: SkinType[] = [
    {
      type: 'combination',
      confidence: 0.85,
      description: 'Your skin shows characteristics of combination type with an oily T-zone and normal to dry cheeks.'
    },
    {
      type: 'oily',
      confidence: 0.78,
      description: 'Your skin produces excess sebum, particularly in the T-zone area, indicating oily skin type.'
    },
    {
      type: 'dry',
      confidence: 0.82,
      description: 'Your skin shows signs of dehydration and lacks natural oils, indicating dry skin type.'
    },
    {
      type: 'sensitive',
      confidence: 0.76,
      description: 'Your skin shows signs of sensitivity with potential reactions to certain ingredients.'
    },
    {
      type: 'normal',
      confidence: 0.88,
      description: 'Your skin appears well-balanced with minimal concerns and good overall health.'
    }
  ];

  const allConcerns: SkinConcern[] = [
    {
      type: 'pores',
      severity: 'mild',
      confidence: 0.72,
      description: 'Slightly enlarged pores visible in the T-zone area'
    },
    {
      type: 'texture',
      severity: 'mild',
      confidence: 0.68,
      description: 'Minor texture irregularities detected'
    },
    {
      type: 'dark_spots',
      severity: 'moderate',
      confidence: 0.79,
      description: 'Some hyperpigmentation and dark spots detected'
    },
    {
      type: 'redness',
      severity: 'mild',
      confidence: 0.65,
      description: 'Mild redness in certain areas indicating potential sensitivity'
    }
  ];

  const randomSkinType = skinTypes[Math.floor(Math.random() * skinTypes.length)];
  const randomConcerns = allConcerns
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.floor(Math.random() * 3) + 1);

  const recommendations = generateRecommendations(randomSkinType, randomConcerns);
  const overallScore = Math.floor(75 + Math.random() * 20);

  return {
    skinType: randomSkinType,
    concerns: randomConcerns,
    overallScore,
    recommendations
  };
};

const generateRecommendations = (skinType: SkinType, concerns: SkinConcern[]): Recommendation[] => {
  const baseRecommendations: Recommendation[] = [
    {
      category: 'cleanser',
      title: 'Gentle Daily Cleanser',
      description: 'Use a mild, pH-balanced cleanser twice daily to remove impurities without stripping natural oils.',
      ingredients: ['Ceramides', 'Hyaluronic Acid', 'Niacinamide'],
      usage: 'Morning and evening, massage gently for 30 seconds then rinse with lukewarm water',
      priority: 'high'
    },
    {
      category: 'moisturizer',
      title: 'Hydrating Moisturizer',
      description: 'Apply a moisturizer suited to your skin type to maintain hydration and barrier function.',
      ingredients: ['Hyaluronic Acid', 'Ceramides', 'Glycerin'],
      usage: 'Apply twice daily after cleansing, while skin is still slightly damp',
      priority: 'high'
    },
    {
      category: 'sunscreen',
      title: 'Broad-Spectrum SPF 30+',
      description: 'Daily sun protection is essential for preventing premature aging and protecting skin health.',
      ingredients: ['Zinc Oxide', 'Titanium Dioxide'],
      usage: 'Apply 15 minutes before sun exposure, reapply every 2 hours',
      priority: 'high'
    }
  ];

  // Add specific recommendations based on skin type
  if (skinType.type === 'oily') {
    baseRecommendations.push({
      category: 'serum',
      title: 'Oil-Control Serum',
      description: 'A lightweight serum to help control excess oil production and minimize pores.',
      ingredients: ['Salicylic Acid', 'Niacinamide', 'Zinc'],
      usage: 'Apply once daily in the evening after cleansing',
      priority: 'medium'
    });
  } else if (skinType.type === 'dry') {
    baseRecommendations.push({
      category: 'serum',
      title: 'Hydrating Serum',
      description: 'An intensive hydrating serum to boost moisture levels and repair skin barrier.',
      ingredients: ['Hyaluronic Acid', 'Peptides', 'Vitamin E'],
      usage: 'Apply twice daily before moisturizer',
      priority: 'medium'
    });
  }

  // Add concern-specific recommendations
  concerns.forEach(concern => {
    if (concern.type === 'dark_spots') {
      baseRecommendations.push({
        category: 'treatment',
        title: 'Brightening Treatment',
        description: 'Target dark spots and hyperpigmentation with gentle yet effective ingredients.',
        ingredients: ['Vitamin C', 'Kojic Acid', 'Arbutin'],
        usage: 'Apply to affected areas once daily in the morning',
        priority: 'medium'
      });
    } else if (concern.type === 'acne') {
      baseRecommendations.push({
        category: 'treatment',
        title: 'Acne Treatment',
        description: 'Gentle treatment for acne-prone areas to reduce breakouts and prevent new ones.',
        ingredients: ['Salicylic Acid', 'Tea Tree Oil', 'Benzoyl Peroxide'],
        usage: 'Apply to affected areas once daily in the evening',
        priority: 'high'
      });
    }
  });

  return baseRecommendations;
};