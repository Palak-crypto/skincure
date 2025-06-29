import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProfileForm } from './components/ProfileForm';
import { RecommendationsSection } from './components/RecommendationsSection';
import { StudentProfile, Recommendation } from './types/college';
import { generateRecommendations } from './utils/recommendations';

type AppState = 'home' | 'form' | 'results';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('home');
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  const handleGetStarted = () => {
    setCurrentState('form');
  };

  const handleProfileSubmit = (profile: StudentProfile) => {
    const recs = generateRecommendations(profile);
    setRecommendations(recs);
    setCurrentState('results');
  };

  const handleBack = () => {
    setCurrentState('form');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {currentState === 'home' && (
          <HeroSection onGetStarted={handleGetStarted} />
        )}
        
        {currentState === 'form' && (
          <ProfileForm onSubmit={handleProfileSubmit} />
        )}
        
        {currentState === 'results' && (
          <RecommendationsSection 
            recommendations={recommendations}
            onBack={handleBack}
          />
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-blue-200 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CF</span>
                </div>
                <span className="text-xl font-bold text-blue-900">CollegeFinder</span>
              </div>
              <p className="text-blue-700 mb-4 max-w-md">
                Helping students find their perfect college match through intelligent recommendations 
                based on academic performance, preferences, and career goals.
              </p>
              <div className="text-sm text-blue-600">
                © 2025 CollegeFinder. All rights reserved.
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-700">
                <li><a href="#" className="hover:text-blue-800 transition-colors">Find Colleges</a></li>
                <li><a href="#" className="hover:text-blue-800 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-800 transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-blue-800 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-blue-700">
                <li><a href="#" className="hover:text-blue-800 transition-colors">Exam Guide</a></li>
                <li><a href="#" className="hover:text-blue-800 transition-colors">College Rankings</a></li>
                <li><a href="#" className="hover:text-blue-800 transition-colors">Admission Tips</a></li>
                <li><a href="#" className="hover:text-blue-800 transition-colors">Career Guidance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-200 mt-8 pt-8 text-center">
            <p className="text-blue-600 text-sm">
              Recommendations are based on available data and should be used as guidance. 
              Always verify information directly with institutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;