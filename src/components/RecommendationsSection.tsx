import React from 'react';
import { Recommendation } from '../types/college';
import { RecommendationCard } from './RecommendationCard';
import { Target, Filter, ArrowLeft } from 'lucide-react';

interface RecommendationsSectionProps {
  recommendations: Recommendation[];
  onBack: () => void;
}

export const RecommendationsSection: React.FC<RecommendationsSectionProps> = ({ 
  recommendations, 
  onBack 
}) => {
  const highChance = recommendations.filter(r => r.admissionChance === 'high');
  const mediumChance = recommendations.filter(r => r.admissionChance === 'medium');
  const lowChance = recommendations.filter(r => r.admissionChance === 'low');

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Profile
        </button>
        
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Target className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Your College Recommendations</h2>
        <p className="text-blue-700 max-w-2xl mx-auto">
          Based on your profile, we've found {recommendations.length} colleges that match your preferences. 
          They're organized by your admission chances.
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
          <div className="text-2xl font-bold text-green-800 mb-2">{highChance.length}</div>
          <div className="text-green-700">High Admission Chance</div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
          <div className="text-2xl font-bold text-yellow-800 mb-2">{mediumChance.length}</div>
          <div className="text-yellow-700">Medium Admission Chance</div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <div className="text-2xl font-bold text-red-800 mb-2">{lowChance.length}</div>
          <div className="text-red-700">Reach Colleges</div>
        </div>
      </div>

      {/* High Chance Colleges */}
      {highChance.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
            High Admission Chance ({highChance.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highChance.map((recommendation, index) => (
              <RecommendationCard key={index} recommendation={recommendation} />
            ))}
          </div>
        </div>
      )}

      {/* Medium Chance Colleges */}
      {mediumChance.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-yellow-800 mb-6 flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
            Medium Admission Chance ({mediumChance.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediumChance.map((recommendation, index) => (
              <RecommendationCard key={index} recommendation={recommendation} />
            ))}
          </div>
        </div>
      )}

      {/* Reach Colleges */}
      {lowChance.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
            Reach Colleges ({lowChance.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lowChance.map((recommendation, index) => (
              <RecommendationCard key={index} recommendation={recommendation} />
            ))}
          </div>
        </div>
      )}

      {recommendations.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Filter className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">No Matches Found</h3>
          <p className="text-blue-700 mb-4">
            We couldn't find colleges matching your exact criteria. Try adjusting your preferences.
          </p>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Modify Search Criteria
          </button>
        </div>
      )}
    </div>
  );
};