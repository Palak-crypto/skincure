import React, { useState } from 'react';
import { StudentProfile } from '../types/college';
import { User, BookOpen, MapPin, DollarSign, GraduationCap } from 'lucide-react';

interface ProfileFormProps {
  onSubmit: (profile: StudentProfile) => void;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ onSubmit }) => {
  const [profile, setProfile] = useState<StudentProfile>({
    examType: 'jee-main',
    marks: { class10: 85, class12: 85 },
    category: 'general',
    preferredDegree: 'undergraduate',
    preferredLocations: [],
    budget: 200000,
    preferredPrograms: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(profile);
  };

  const examOptions = [
    { value: 'jee-main', label: 'JEE Main' },
    { value: 'jee-advanced', label: 'JEE Advanced' },
    { value: 'neet', label: 'NEET' },
    { value: 'cat', label: 'CAT' },
    { value: 'gate', label: 'GATE' },
    { value: 'bitsat', label: 'BITSAT' },
    { value: 'viteee', label: 'VITEEE' },
    { value: 'other', label: 'Other' }
  ];

  const locationOptions = [
    'North', 'South', 'East', 'West', 'Central',
    'Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat',
    'Rajasthan', 'Uttar Pradesh', 'West Bengal', 'Telangana', 'Haryana'
  ];

  const programOptions = [
    'Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Chemical',
    'Medicine', 'Management', 'Commerce', 'Arts', 'Science'
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <User className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-blue-900 mb-2">Tell Us About Yourself</h2>
        <p className="text-blue-700">Help us find the perfect colleges for you</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Academic Information */}
        <div className="bg-blue-50/50 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
            <h3 className="text-lg font-semibold text-blue-900">Academic Information</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Exam Type
              </label>
              <select
                value={profile.examType}
                onChange={(e) => setProfile({...profile, examType: e.target.value as any})}
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                {examOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Category
              </label>
              <select
                value={profile.category}
                onChange={(e) => setProfile({...profile, category: e.target.value as any})}
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="general">General</option>
                <option value="obc">OBC</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Rank (if available)
              </label>
              <input
                type="number"
                value={profile.rank || ''}
                onChange={(e) => setProfile({...profile, rank: e.target.value ? parseInt(e.target.value) : undefined})}
                placeholder="Enter your rank"
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Percentile (if available)
              </label>
              <input
                type="number"
                step="0.01"
                max="100"
                value={profile.percentile || ''}
                onChange={(e) => setProfile({...profile, percentile: e.target.value ? parseFloat(e.target.value) : undefined})}
                placeholder="Enter your percentile"
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Class 10 Percentage
              </label>
              <input
                type="number"
                max="100"
                value={profile.marks.class10}
                onChange={(e) => setProfile({...profile, marks: {...profile.marks, class10: parseInt(e.target.value)}})}
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Class 12 Percentage
              </label>
              <input
                type="number"
                max="100"
                value={profile.marks.class12}
                onChange={(e) => setProfile({...profile, marks: {...profile.marks, class12: parseInt(e.target.value)}})}
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-sky-50/50 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <GraduationCap className="w-5 h-5 text-blue-500 mr-2" />
            <h3 className="text-lg font-semibold text-blue-900">Preferences</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Preferred Degree Level
              </label>
              <select
                value={profile.preferredDegree}
                onChange={(e) => setProfile({...profile, preferredDegree: e.target.value as any})}
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Budget (Annual Fees)
              </label>
              <select
                value={profile.budget}
                onChange={(e) => setProfile({...profile, budget: parseInt(e.target.value)})}
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value={100000}>Up to ₹1 Lakh</option>
                <option value={200000}>Up to ₹2 Lakhs</option>
                <option value={500000}>Up to ₹5 Lakhs</option>
                <option value={1000000}>Up to ₹10 Lakhs</option>
                <option value={2500000}>Up to ₹25 Lakhs</option>
                <option value={5000000}>Above ₹25 Lakhs</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-blue-700 mb-3">
              Preferred Locations (Select multiple)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {locationOptions.map(location => (
                <label key={location} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={profile.preferredLocations.includes(location)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setProfile({...profile, preferredLocations: [...profile.preferredLocations, location]});
                      } else {
                        setProfile({...profile, preferredLocations: profile.preferredLocations.filter(l => l !== location)});
                      }
                    }}
                    className="rounded border-blue-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-blue-800">{location}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-blue-700 mb-3">
              Preferred Programs (Select multiple)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {programOptions.map(program => (
                <label key={program} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={profile.preferredPrograms.includes(program)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setProfile({...profile, preferredPrograms: [...profile.preferredPrograms, program]});
                      } else {
                        setProfile({...profile, preferredPrograms: profile.preferredPrograms.filter(p => p !== program)});
                      }
                    }}
                    className="rounded border-blue-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-blue-800">{program}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Find My Perfect Colleges
          </button>
        </div>
      </form>
    </div>
  );
};