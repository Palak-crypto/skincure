import { College } from '../types/college';

export const colleges: College[] = [
  {
    id: '1',
    name: 'Indian Institute of Technology Delhi',
    location: {
      city: 'New Delhi',
      state: 'Delhi',
      region: 'North'
    },
    type: 'government',
    established: 1961,
    ranking: {
      nirf: 2,
      overall: 1
    },
    programs: [
      {
        name: 'Computer Science Engineering',
        degree: 'undergraduate',
        duration: '4 years',
        specializations: ['AI/ML', 'Cybersecurity', 'Data Science'],
        seats: 120
      },
      {
        name: 'M.Tech Computer Science',
        degree: 'postgraduate',
        duration: '2 years',
        specializations: ['AI', 'Systems', 'Theory'],
        seats: 80
      }
    ],
    facilities: ['Research Labs', 'Library', 'Hostels', 'Sports Complex', 'Medical Center'],
    placements: {
      averagePackage: 1800000,
      highestPackage: 8500000,
      placementRate: 95,
      topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Goldman Sachs']
    },
    fees: {
      undergraduate: 200000,
      postgraduate: 150000
    },
    cutoffs: {
      'jee-advanced': {
        general: 500,
        obc: 800,
        sc: 1200,
        st: 1500
      }
    },
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
    website: 'https://iitd.ac.in'
  },
  {
    id: '2',
    name: 'Indian Institute of Science Bangalore',
    location: {
      city: 'Bangalore',
      state: 'Karnataka',
      region: 'South'
    },
    type: 'government',
    established: 1909,
    ranking: {
      nirf: 1,
      overall: 1
    },
    programs: [
      {
        name: 'Bachelor of Science (Research)',
        degree: 'undergraduate',
        duration: '4 years',
        specializations: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
        seats: 120
      },
      {
        name: 'M.Tech',
        degree: 'postgraduate',
        duration: '2 years',
        specializations: ['Various Engineering Disciplines'],
        seats: 200
      }
    ],
    facilities: ['World-class Research Labs', 'Central Library', 'Hostels', 'Gymnasium'],
    placements: {
      averagePackage: 2200000,
      highestPackage: 9500000,
      placementRate: 98,
      topRecruiters: ['Google', 'Microsoft', 'Intel', 'IBM']
    },
    fees: {
      undergraduate: 180000,
      postgraduate: 120000
    },
    cutoffs: {
      'jee-advanced': {
        general: 300,
        obc: 600,
        sc: 900,
        st: 1200
      }
    },
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    website: 'https://iisc.ac.in'
  },
  {
    id: '3',
    name: 'All India Institute of Medical Sciences Delhi',
    location: {
      city: 'New Delhi',
      state: 'Delhi',
      region: 'North'
    },
    type: 'government',
    established: 1956,
    ranking: {
      nirf: 1,
      overall: 1
    },
    programs: [
      {
        name: 'MBBS',
        degree: 'undergraduate',
        duration: '5.5 years',
        specializations: ['General Medicine'],
        seats: 125
      },
      {
        name: 'MD/MS',
        degree: 'postgraduate',
        duration: '3 years',
        specializations: ['Various Medical Specialties'],
        seats: 200
      }
    ],
    facilities: ['Hospital', 'Research Centers', 'Library', 'Hostels', 'Sports Complex'],
    placements: {
      averagePackage: 1500000,
      highestPackage: 5000000,
      placementRate: 100,
      topRecruiters: ['Government Hospitals', 'Private Healthcare', 'Research Institutes']
    },
    fees: {
      undergraduate: 50000,
      postgraduate: 75000
    },
    cutoffs: {
      'neet': {
        general: 50,
        obc: 150,
        sc: 300,
        st: 500
      }
    },
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
    website: 'https://aiims.edu'
  },
  {
    id: '4',
    name: 'Indian Institute of Management Ahmedabad',
    location: {
      city: 'Ahmedabad',
      state: 'Gujarat',
      region: 'West'
    },
    type: 'government',
    established: 1961,
    ranking: {
      nirf: 1,
      overall: 1
    },
    programs: [
      {
        name: 'Post Graduate Programme in Management',
        degree: 'postgraduate',
        duration: '2 years',
        specializations: ['Finance', 'Marketing', 'Operations', 'Strategy'],
        seats: 395
      }
    ],
    facilities: ['Case Study Rooms', 'Library', 'Hostels', 'Sports Complex', 'Auditorium'],
    placements: {
      averagePackage: 3400000,
      highestPackage: 7000000,
      placementRate: 100,
      topRecruiters: ['McKinsey', 'BCG', 'Bain', 'Goldman Sachs']
    },
    fees: {
      undergraduate: 0,
      postgraduate: 2500000
    },
    cutoffs: {
      'cat': {
        general: 99.5,
        obc: 98.5,
        sc: 95,
        st: 90
      }
    },
    image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
    website: 'https://iima.ac.in'
  },
  {
    id: '5',
    name: 'Birla Institute of Technology and Science Pilani',
    location: {
      city: 'Pilani',
      state: 'Rajasthan',
      region: 'North'
    },
    type: 'deemed',
    established: 1964,
    ranking: {
      nirf: 25,
      overall: 30
    },
    programs: [
      {
        name: 'B.E./B.Tech',
        degree: 'undergraduate',
        duration: '4 years',
        specializations: ['Computer Science', 'Electronics', 'Mechanical', 'Chemical'],
        seats: 800
      },
      {
        name: 'M.E./M.Tech',
        degree: 'postgraduate',
        duration: '2 years',
        specializations: ['Various Engineering Disciplines'],
        seats: 300
      }
    ],
    facilities: ['Labs', 'Library', 'Hostels', 'Sports Complex', 'Cultural Centers'],
    placements: {
      averagePackage: 1600000,
      highestPackage: 6000000,
      placementRate: 90,
      topRecruiters: ['Microsoft', 'Amazon', 'Google', 'Flipkart']
    },
    fees: {
      undergraduate: 450000,
      postgraduate: 350000
    },
    cutoffs: {
      'bitsat': {
        general: 350,
        obc: 330,
        sc: 300,
        st: 280
      }
    },
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    website: 'https://bits-pilani.ac.in'
  },
  {
    id: '6',
    name: 'Vellore Institute of Technology',
    location: {
      city: 'Vellore',
      state: 'Tamil Nadu',
      region: 'South'
    },
    type: 'private',
    established: 1984,
    ranking: {
      nirf: 15,
      overall: 20
    },
    programs: [
      {
        name: 'B.Tech',
        degree: 'undergraduate',
        duration: '4 years',
        specializations: ['CSE', 'ECE', 'Mechanical', 'Civil', 'Biotechnology'],
        seats: 2000
      },
      {
        name: 'M.Tech',
        degree: 'postgraduate',
        duration: '2 years',
        specializations: ['Various Engineering Disciplines'],
        seats: 500
      }
    ],
    facilities: ['Modern Labs', 'Digital Library', 'Hostels', 'Sports Complex', 'Medical Center'],
    placements: {
      averagePackage: 900000,
      highestPackage: 4100000,
      placementRate: 85,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Cognizant']
    },
    fees: {
      undergraduate: 200000,
      postgraduate: 150000
    },
    cutoffs: {
      'viteee': {
        general: 15000,
        obc: 18000,
        sc: 25000,
        st: 30000
      }
    },
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    website: 'https://vit.ac.in'
  }
];