import React from 'react';
import { Recommendation } from '../types/college';
import { MapPin, Award, TrendingUp, Users, ExternalLink, DollarSign } from 'lucide-react';

interface RecommendationCardProps {
  recommendation: Recommendation;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => {
  const { college, program, matchScore, admissionChance, reasons } = recommendation;

  const getChanceColor = (chance: string) => {
    switch (chance) {
      case 'high': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-red-100 text-red-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'government': return 'bg-blue-100 text-blue-800';
      case 'private': return 'bg-purple-100 text-purple-800';
      case 'deemed': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-blue-900">{matchScore}% Match</span>
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getChanceColor(admissionChance)}`}>
            {admissionChance.charAt(0).toUpperCase() + admissionChance.slice(1)} Chance
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">{college.name}</h3>
            <div className="flex items-center space-x-4 text-sm text-blue-600">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {college.location.city}, {college.location.state}
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(college.type)}`}>
                {college.type.charAt(0).toUpperCase() + college.type.slice(1)}
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center text-blue-600 mb-1">
              <Award className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">NIRF #{college.ranking.nirf}</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-blue-900 mb-2">{program.name}</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-blue-600">Duration:</span>
              <span className="text-blue-800 ml-2">{program.duration}</span>
            </div>
            <div>
              <span className="text-blue-600">Seats:</span>
              <span className="text-blue-800 ml-2">{program.seats}</span>
            </div>
          </div>
          {program.specializations.length > 0 && (
            <div className="mt-2">
              <span className="text-blue-600 text-sm">Specializations:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {program.specializations.slice(0, 3).map((spec, index) => (
                  <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                    {spec}
                  </span>
                ))}
                {program.specializations.length > 3 && (
                  <span className="text-blue-600 text-xs">+{program.specializations.length - 3} more</span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-3 bg-sky-50 rounded-lg">
            <TrendingUp className="w-5 h-5 text-blue-500 mx-auto mb-1" />
            <div className="text-sm text-blue-600">Avg Package</div>
            <div className="font-semibold text-blue-900">
              ₹{(college.placements.averagePackage / 100000).toFixed(1)} LPA
            </div>
          </div>
          <div className="text-center p-3 bg-sky-50 rounded-lg">
            <Users className="w-5 h-5 text-blue-500 mx-auto mb-1" />
            <div className="text-sm text-blue-600">Placement Rate</div>
            <div className="font-semibold text-blue-900">{college.placements.placementRate}%</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center mb-2">
            <DollarSign className="w-4 h-4 text-blue-500 mr-2" />
            <span className="text-sm font-medium text-blue-700">Annual Fees</span>
          </div>
          <div className="text-lg font-bold text-blue-900">
            ₹{(program.degree === 'undergraduate' ? college.fees.undergraduate : college.fees.postgraduate).toLocaleString()}
          </div>
        </div>

        <div className="mb-4">
          <h5 className="text-sm font-medium text-blue-700 mb-2">Why this college matches you:</h5>
          <ul className="space-y-1">
            {reasons.slice(0, 3).map((reason, index) => (
              <li key={index} className="text-sm text-blue-800 flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                {reason}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-3">
          <a
            href={college.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Visit Website
          </a>
          <button className="flex-1 px-4 py-2 border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
            Save College
          </button>
        </div>
      </div>
    </div>
  );
};