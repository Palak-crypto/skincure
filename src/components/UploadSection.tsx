import React, { useCallback, useState } from 'react';
import { Upload, Camera, Image } from 'lucide-react';

interface UploadSectionProps {
  onFileSelect: (file: File) => void;
  isAnalyzing: boolean;
}

export const UploadSection: React.FC<UploadSectionProps> = ({ onFileSelect, isAnalyzing }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));
    
    if (imageFile) {
      handleFileSelect(imageFile);
    }
  }, []);

  const handleFileSelect = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      onFileSelect(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          AI Skin Analysis
        </h1>
        <p className="text-xl text-blue-700 max-w-lg mx-auto">
          Upload a clear selfie to get personalized skin analysis and recommendations from our advanced AI technology
        </p>
      </div>

      <div
        className={`relative border-2 border-dashed rounded-2xl p-8 transition-all duration-300 bg-white/70 backdrop-blur-sm ${
          isDragging
            ? 'border-blue-400 bg-blue-50 scale-102'
            : 'border-blue-300 hover:border-blue-400'
        } ${isAnalyzing ? 'pointer-events-none opacity-50' : ''}`}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
      >
        {preview ? (
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <img
                src={preview}
                alt="Preview"
                className="w-48 h-48 object-cover rounded-xl shadow-lg border-2 border-blue-200"
              />
              {!isAnalyzing && (
                <button
                  onClick={() => {
                    setPreview(null);
                    const input = document.getElementById('file-input') as HTMLInputElement;
                    if (input) input.value = '';
                  }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg"
                >
                  ×
                </button>
              )}
            </div>
            <p className="text-blue-700">
              {isAnalyzing ? 'Analyzing your skin...' : 'Ready for analysis'}
            </p>
          </div>
        ) : (
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Upload Your Selfie
              </h3>
              <p className="text-blue-700 mb-6">
                Drag and drop your image here, or click to browse
              </p>
            </div>

            <label
              htmlFor="file-input"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 cursor-pointer transform hover:scale-105 shadow-lg"
            >
              <Camera className="w-5 h-5 mr-2" />
              Choose Photo
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleInputChange}
              className="hidden"
              disabled={isAnalyzing}
            />
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-blue-200">
          <div className="flex items-center justify-center space-x-6 text-sm text-blue-600">
            <div className="flex items-center">
              <Image className="w-4 h-4 mr-1" />
              JPG, PNG
            </div>
            <div>Max 10MB</div>
            <div>Best results: Good lighting</div>
          </div>
        </div>
      </div>
    </div>
  );
};