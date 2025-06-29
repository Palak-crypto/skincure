import { College, StudentProfile, Recommendation } from '../types/college';
import { colleges } from '../data/colleges';

export const generateRecommendations = (profile: StudentProfile): Recommendation[] => {
  const recommendations: Recommendation[] = [];

  colleges.forEach(college => {
    const matchingPrograms = college.programs.filter(
      program => program.degree === profile.preferredDegree
    );

    if (matchingPrograms.length === 0) return;

    matchingPrograms.forEach(program => {
      const matchScore = calculateMatchScore(college, program, profile);
      const admissionChance = calculateAdmissionChance(college, profile);
      const reasons = generateReasons(college, program, profile);

      if (matchScore > 30) {
        recommendations.push({
          college,
          program,
          matchScore,
          admissionChance,
          reasons
        });
      }
    });
  });

  return recommendations
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 10);
};

const calculateMatchScore = (college: College, program: Program, profile: StudentProfile): number => {
  let score = 0;

  // Location preference (30 points)
  if (profile.preferredLocations.includes(college.location.state) || 
      profile.preferredLocations.includes(college.location.region)) {
    score += 30;
  }

  // Budget compatibility (25 points)
  const fees = profile.preferredDegree === 'undergraduate' 
    ? college.fees.undergraduate 
    : college.fees.postgraduate;
  
  if (fees <= profile.budget) {
    score += 25;
  } else if (fees <= profile.budget * 1.2) {
    score += 15;
  }

  // Academic performance (25 points)
  const academicScore = (profile.marks.class10 + profile.marks.class12) / 2;
  if (academicScore >= 90) score += 25;
  else if (academicScore >= 80) score += 20;
  else if (academicScore >= 70) score += 15;
  else score += 10;

  // College ranking (20 points)
  if (college.ranking.nirf <= 10) score += 20;
  else if (college.ranking.nirf <= 25) score += 15;
  else if (college.ranking.nirf <= 50) score += 10;
  else score += 5;

  return Math.min(score, 100);
};

const calculateAdmissionChance = (college: College, profile: StudentProfile): 'high' | 'medium' | 'low' => {
  if (!profile.rank && !profile.percentile) return 'medium';

  const cutoff = college.cutoffs[profile.examType];
  if (!cutoff) return 'medium';

  const relevantCutoff = cutoff[profile.category];
  
  if (profile.rank) {
    if (profile.rank <= relevantCutoff * 0.8) return 'high';
    if (profile.rank <= relevantCutoff * 1.2) return 'medium';
    return 'low';
  }

  if (profile.percentile) {
    if (profile.percentile >= relevantCutoff * 1.02) return 'high';
    if (profile.percentile >= relevantCutoff * 0.98) return 'medium';
    return 'low';
  }

  return 'medium';
};

const generateReasons = (college: College, program: Program, profile: StudentProfile): string[] => {
  const reasons: string[] = [];

  if (profile.preferredLocations.includes(college.location.state)) {
    reasons.push(`Located in your preferred state: ${college.location.state}`);
  }

  if (college.ranking.nirf <= 10) {
    reasons.push(`Top 10 NIRF ranking (#${college.ranking.nirf})`);
  }

  const fees = profile.preferredDegree === 'undergraduate' 
    ? college.fees.undergraduate 
    : college.fees.postgraduate;
  
  if (fees <= profile.budget) {
    reasons.push('Fits within your budget');
  }

  if (college.placements.placementRate >= 90) {
    reasons.push(`Excellent placement record (${college.placements.placementRate}%)`);
  }

  if (college.placements.averagePackage >= 1000000) {
    reasons.push(`High average package (₹${(college.placements.averagePackage / 100000).toFixed(1)} LPA)`);
  }

  return reasons;
};