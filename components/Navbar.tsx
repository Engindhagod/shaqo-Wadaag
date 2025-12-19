
import React from 'react';
import { Briefcase, User, LogOut, LayoutDashboard, Globe } from 'lucide-react';
import { Role } from '../types';

interface NavbarProps {
  role: Role;
  setRole: (role: Role) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ role, setRole, activeTab, setActiveTab }) => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('jobs')}>
            <div className="bg-blue-600 p-2 rounded-lg">
              <Briefcase className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Shaqo-Wadaag</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setActiveTab('jobs')}
              className={`text-sm font-medium ${activeTab === 'jobs' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Shaqooyin (Jobs)
            </button>
            {role !== 'GUEST' && (
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`text-sm font-medium ${activeTab === 'dashboard' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Dashboard
              </button>
            )}
            <button 
              onClick={() => setActiveTab('profile')}
              className={`text-sm font-medium ${activeTab === 'profile' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Profile
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex bg-gray-100 rounded-full p-1 text-xs">
              <button 
                onClick={() => setRole('SEEKER')}
                className={`px-3 py-1 rounded-full ${role === 'SEEKER' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500'}`}
              >
                Seeker
              </button>
              <button 
                onClick={() => setRole('EMPLOYER')}
                className={`px-3 py-1 rounded-full ${role === 'EMPLOYER' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500'}`}
              >
                Employer
              </button>
            </div>
            {role === 'GUEST' ? (
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                Login
              </button>
            ) : (
              <button onClick={() => setRole('GUEST')} className="text-gray-400 hover:text-red-500 transition">
                <LogOut className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
