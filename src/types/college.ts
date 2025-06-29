export interface College {
  id: string;
  name: string;
  location: {
    city: string;
    state: string;
    region: string;
  };
  type: 'government' | 'private' | 'deemed';
  established: number;
  ranking: {
    nirf: number;
    overall: number;
  };
  programs: Program[];
  facilities: string[];
  placements: {
    averagePackage: number;
    highestPackage: number;
    placementRate: number;
    topRecruiters: string[];
  };
  fees: {
    undergraduate: number;
    postgraduate: number;
  };
  cutoffs: {
    [exam: string]: {
      general: number;
      obc: number;
      sc: number;
      st: number;
    };
  };
  image: string;
  website: string;
}

export interface Program {
  name: string;
  degree: 'undergraduate' | 'postgraduate';
  duration: string;
  specializations: string[];
  seats: number;
}

export interface StudentProfile {
  examType: 'jee-main' | 'jee-advanced' | 'neet' | 'cat' | 'gate' | 'other';
  rank?: number;
  percentile?: number;
  marks: {
    class10: number;
    class12: number;
  };
  category: 'general' | 'obc' | 'sc' | 'st';
  preferredDegree: 'undergraduate' | 'postgraduate';
  preferredLocations: string[];
  budget: number;
  preferredPrograms: string[];
}

export interface Recommendation {
  college: College;
  matchScore: number;
  reasons: string[];
  admissionChance: 'high' | 'medium' | 'low';
  program: Program;
}