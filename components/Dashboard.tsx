
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend
} from 'recharts';
import { Users, Eye, FileText, TrendingUp, Plus } from 'lucide-react';
import { Job, User, Application } from '../types';

const data = [
  { name: 'Mon', views: 400, applies: 24 },
  { name: 'Tue', views: 300, applies: 13 },
  { name: 'Wed', views: 200, applies: 98 },
  { name: 'Thu', views: 278, applies: 39 },
  { name: 'Fri', views: 189, applies: 48 },
  { name: 'Sat', views: 239, applies: 38 },
  { name: 'Sun', views: 349, applies: 43 },
];

interface DashboardProps {
  user: User;
  jobs: Job[];
}

const Dashboard: React.FC<DashboardProps> = ({ user, jobs }) => {
  const isEmployer = user.role === 'EMPLOYER';

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Halaad sanid, {user.name} 👋
          </h1>
          <p className="text-gray-500">Welcome to your dashboard</p>
        </div>
        {isEmployer && (
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
            <Plus className="w-4 h-4" /> Post New Job
          </button>
        )}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 rounded-lg"><Eye className="text-blue-600 w-5 h-5" /></div>
            <span className="text-green-500 text-xs font-bold">+12%</span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Job Views</h3>
          <p className="text-2xl font-bold text-gray-900">2,840</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 rounded-lg"><FileText className="text-purple-600 w-5 h-5" /></div>
            <span className="text-green-500 text-xs font-bold">+5%</span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Applications</h3>
          <p className="text-2xl font-bold text-gray-900">142</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-50 rounded-lg"><Users className="text-orange-600 w-5 h-5" /></div>
            <span className="text-red-500 text-xs font-bold">-2%</span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Shortlisted</h3>
          <p className="text-2xl font-bold text-gray-900">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-50 rounded-lg"><TrendingUp className="text-green-600 w-5 h-5" /></div>
            <span className="text-green-500 text-xs font-bold">Good</span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Success Rate</h3>
          <p className="text-2xl font-bold text-gray-900">8.4%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-6">Activity Overview (Aragtida Toddobaadka)</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  cursor={{ fill: '#f3f4f6' }}
                />
                <Bar dataKey="views" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-6">Application Trends (Codsiyada Cusub)</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Line type="monotone" dataKey="applies" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4, fill: '#8b5cf6' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-gray-900">Your Recent Listings (Shaqooyinkii u dambeeyay)</h3>
          <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
        </div>
        <div className="divide-y divide-gray-100">
          {jobs.map(job => (
            <div key={job.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div>
                <h4 className="font-semibold text-gray-900">{job.title}</h4>
                <p className="text-sm text-gray-500">{job.location} • {job.type}</p>
              </div>
              <div className="flex gap-8 text-right">
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase">Views</p>
                  <p className="font-bold text-gray-900">{job.views}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase">Apps</p>
                  <p className="font-bold text-gray-900">{job.applications}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600 p-2">
                  <Plus className="w-5 h-5 rotate-45" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
