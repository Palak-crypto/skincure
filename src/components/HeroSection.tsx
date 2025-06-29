import React from 'react';
import { TrendingUp, MapPin, Award, Users } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-6 leading-tight">
            Find Your Perfect College Match
          </h1>
          <p className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get personalized college recommendations based on your exam ranks, academic performance, 
            location preferences, and budget. Make informed decisions for your future.
          </p>
          
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-lg"
          >
            Get Started - Find My Colleges
          </button>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Rank-Based</h3>
              <p className="text-blue-700 text-sm">Recommendations based on your exam performance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Location-Smart</h3>
              <p className="text-blue-700 text-sm">Find colleges in your preferred locations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Quality Assured</h3>
              <p className="text-blue-700 text-sm">Top-ranked institutions with proven track records</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Personalized</h3>
              <p className="text-blue-700 text-sm">Tailored suggestions for your unique profile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};