
import { Job, User } from './types';

export const LOCATIONS = [
  'Banaadir (Mogadishu)',
  'Hargeisa',
  'Garowe',
  'Kismayo',
  'Baidoa',
  'Remote / Meel fog'
];

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'SomLink Tech',
    location: 'Banaadir (Mogadishu)',
    salary: '$1,500 - $2,500',
    type: 'Full-time',
    description: 'Developing next-gen mobile banking solutions for the Somali market.',
    requirements: ['React Native', 'Node.js', 'PostgreSQL'],
    postedAt: '2024-05-10',
    employerId: 'emp1',
    views: 120,
    applications: 15
  },
  {
    id: '2',
    title: 'Hospitality Manager',
    company: 'Peace Hotel',
    location: 'Banaadir (Mogadishu)',
    salary: '$800 - $1,200',
    type: 'Full-time',
    description: 'Lead our hospitality team in providing world-class service to international guests.',
    requirements: ['3+ years experience', 'Fluent Somali & English', 'Management skills'],
    postedAt: '2024-05-12',
    employerId: 'emp2',
    views: 450,
    applications: 42
  },
  {
    id: '3',
    title: 'English Teacher',
    company: 'Abrar Academy',
    location: 'Hargeisa',
    salary: '$400 - $600',
    type: 'Part-time',
    description: 'Passionate teacher wanted for primary school English curriculum.',
    requirements: ['Degree in Education', 'Excellent communication', 'Patience'],
    postedAt: '2024-05-13',
    employerId: 'emp3',
    views: 85,
    applications: 8
  }
];

export const MOCK_USER_SEEKER: User = {
  id: 'seeker1',
  name: 'Ahmed Cali',
  email: 'ahmed@example.so',
  role: 'SEEKER',
  skills: ['React', 'JavaScript', 'Customer Service'],
  bio: 'Experienced developer looking for opportunities in Mogadishu.'
};

export const MOCK_USER_EMPLOYER: User = {
  id: 'emp1',
  name: 'Cabdullaahi Maxamed',
  email: 'hr@somlink.so',
  role: 'EMPLOYER',
  companyName: 'SomLink Tech'
};
