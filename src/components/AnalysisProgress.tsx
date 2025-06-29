import React from 'react';
import { Brain, Scan, CheckCircle } from 'lucide-react';

interface AnalysisProgressProps {
  progress: number;
}

export const AnalysisProgress: React.FC<AnalysisProgressProps> = ({ progress }) => {
  const steps = [
    { icon: Scan, label: 'Scanning image', threshold: 30 },
    { icon: Brain, label: 'AI analysis', threshold: 70 },
    { icon: CheckCircle, label: 'Generating results', threshold: 100 }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse shadow-lg">
          <Brain className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-blue-900 mb-2">
          Analyzing Your Skin
        </h2>
        <p className="text-blue-700">
          Our AI is carefully examining your skin to provide personalized insights
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200">
        <div className="mb-6">
          <div className="flex justify-between text-sm text-blue-700 mb-2">
            <span>Analysis Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-blue-100 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => {
            const isActive = progress >= step.threshold;
            const isInProgress = progress < step.threshold && progress >= (steps[index - 1]?.threshold || 0);
            
            return (
              <div
                key={index}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-blue-50 text-blue-800'
                    : isInProgress
                    ? 'bg-sky-50 text-sky-800'
                    : 'text-blue-400'
                }`}
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  isActive
                    ? 'bg-blue-100'
                    : isInProgress
                    ? 'bg-sky-100 animate-pulse'
                    : 'bg-blue-50'
                }`}>
                  <step.icon className="w-4 h-4" />
                </div>
                <span className="font-medium">{step.label}</span>
                {isActive && (
                  <CheckCircle className="w-5 h-5 text-blue-600 ml-auto" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};