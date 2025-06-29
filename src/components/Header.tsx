import React from 'react';
import { GraduationCap, Search, BookOpen } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-blue-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900">CollegeFinder</h1>
              <p className="text-sm text-blue-600">Smart College Recommendations</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="flex items-center space-x-2 text-blue-700 hover:text-blue-800 transition-colors">
              <Search className="w-4 h-4" />
              <span>Find Colleges</span>
            </a>
            <a href="#about" className="flex items-center space-x-2 text-blue-700 hover:text-blue-800 transition-colors">
              <BookOpen className="w-4 h-4" />
              <span>About</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};