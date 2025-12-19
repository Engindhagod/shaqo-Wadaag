
export type Role = 'SEEKER' | 'EMPLOYER' | 'GUEST';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  skills?: string[];
  bio?: string;
  companyName?: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  description: string;
  requirements: string[];
  postedAt: string;
  employerId: string;
  views: number;
  applications: number;
}

export interface Application {
  id: string;
  jobId: string;
  seekerId: string;
  seekerName: string;
  status: 'Pending' | 'Reviewing' | 'Interview' | 'Rejected';
  appliedAt: string;
}

export interface AIRecommendation {
  jobId: string;
  matchScore: number;
  reason: string;
}
