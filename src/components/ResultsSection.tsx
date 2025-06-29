import React from 'react';
import { SkinAnalysis } from '../types/skin';
import { 
  Heart, 
  AlertCircle, 
  Droplets, 
  Sun, 
  Sparkles,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

interface ResultsSectionProps {
  analysis: SkinAnalysis;
  onReset: () => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ analysis, onReset }) => {
  const getSkinTypeIcon = (type: string) => {
    switch (type) {
      case 'oily': return Droplets;
      case 'dry': return Sun;
      case 'sensitive': return Shield;
      case 'combination': return Zap;
      default: return Heart;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'mild': return 'text-blue-700 bg-blue-50';
      case 'moderate': return 'text-sky-700 bg-sky-50';
      case 'severe': return 'text-indigo-700 bg-indigo-50';
      default: return 'text-blue-600 bg-blue-50';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-blue-600';
    if (score >= 70) return 'text-sky-600';
    return 'text-indigo-600';
  };

  const SkinTypeIcon = getSkinTypeIcon(analysis.skinType.type);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Your Skin Analysis Results
        </h2>
        <p className="text-blue-700">
          Comprehensive analysis based on advanced AI technology
        </p>
      </div>

      {/* Overall Score */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center border border-blue-200">
        <div className="w-24 h-24 mx-auto mb-4 relative">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#dbeafe"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#blueGradient)"
              strokeWidth="8"
              strokeDasharray={`${analysis.overallScore * 2.83} 283`}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-2xl font-bold ${getScoreColor(analysis.overallScore)}`}>
              {analysis.overallScore}
            </span>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-blue-900 mb-2">
          Overall Skin Health Score
        </h3>
        <p className="text-blue-700">
          Your skin is in {analysis.overallScore >= 85 ? 'excellent' : analysis.overallScore >= 70 ? 'good' : 'fair'} condition
        </p>
      </div>

      {/* Skin Type */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
            <SkinTypeIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-900 capitalize">
              {analysis.skinType.type} Skin
            </h3>
            <p className="text-sm text-blue-600">
              {Math.round(analysis.skinType.confidence * 100)}% confidence
            </p>
          </div>
        </div>
        <p className="text-blue-800 leading-relaxed">
          {analysis.skinType.description}
        </p>
      </div>

      {/* Skin Concerns */}
      {analysis.concerns.length > 0 && (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200">
          <div className="flex items-center mb-6">
            <AlertCircle className="w-6 h-6 text-blue-500 mr-3" />
            <h3 className="text-xl font-semibold text-blue-900">
              Detected Concerns
            </h3>
          </div>
          <div className="grid gap-4">
            {analysis.concerns.map((concern, index) => (
              <div key={index} className="p-4 rounded-xl border border-blue-100 bg-blue-50/50">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-blue-900 capitalize">
                    {concern.type.replace('_', ' ')}
                  </h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(concern.severity)}`}>
                    {concern.severity}
                  </span>
                </div>
                <p className="text-blue-700 text-sm">{concern.description}</p>
                <div className="mt-2 text-xs text-blue-600">
                  Confidence: {Math.round(concern.confidence * 100)}%
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200">
        <div className="flex items-center mb-6">
          <Sparkles className="w-6 h-6 text-blue-500 mr-3" />
          <h3 className="text-xl font-semibold text-blue-900">
            Personalized Recommendations
          </h3>
        </div>
        <div className="grid gap-6">
          {analysis.recommendations.map((rec, index) => (
            <div key={index} className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-100">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-blue-900 capitalize">
                  {rec.title}
                </h4>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  rec.priority === 'high' 
                    ? 'bg-indigo-100 text-indigo-700'
                    : rec.priority === 'medium'
                    ? 'bg-sky-100 text-sky-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {rec.priority} priority
                </span>
              </div>
              <p className="text-blue-800 mb-4">{rec.description}</p>
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-medium text-blue-700">Key Ingredients: </span>
                  <span className="text-sm text-blue-800">{rec.ingredients.join(', ')}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-blue-700">Usage: </span>
                  <span className="text-sm text-blue-800">{rec.usage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="text-center">
        <button
          onClick={onReset}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          Analyze Another Photo
        </button>
      </div>
    </div>
  );
};