
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import JobCard from './components/JobCard';
import Dashboard from './components/Dashboard';
import { 
  Search, 
  SlidersHorizontal, 
  MapPin, 
  Briefcase, 
  Globe, 
  Info, 
  LayoutDashboard, 
  User as UserIcon 
} from 'lucide-react';
import { Job, User, Role } from './types';
import { MOCK_JOBS, MOCK_USER_SEEKER, MOCK_USER_EMPLOYER, LOCATIONS } from './constants';

const App: React.FC = () => {
  const [role, setRole] = useState<Role>('SEEKER');
  const [activeTab, setActiveTab] = useState('jobs');
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [jobs] = useState<Job[]>(MOCK_JOBS);
  const [currentUser, setCurrentUser] = useState<User | null>(MOCK_USER_SEEKER);

  useEffect(() => {
    if (role === 'SEEKER') {
      setCurrentUser(MOCK_USER_SEEKER);
    } else if (role === 'EMPLOYER') {
      setCurrentUser(MOCK_USER_EMPLOYER);
    } else {
      setCurrentUser(null);
    }
    setActiveTab('jobs');
  }, [role]);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = locationFilter === '' || job.location === locationFilter;
    return matchesSearch && matchesLocation;
  });

  const handleApply = (jobId: string) => {
    console.log(`Application submitted for: ${jobId}`);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return currentUser ? (
          <Dashboard user={currentUser} jobs={jobs.filter(j => j.employerId === currentUser.id)} />
        ) : (
          <div className="text-center py-20 text-gray-500">Fadlan gal sidii loo-shaqeeye (Please log in as an employer).</div>
        );
      
      case 'profile':
        return currentUser ? (
          <div className="max-w-3xl mx-auto py-12 px-4 animate-fade-in">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="h-32 bg-blue-600"></div>
              <div className="px-8 pb-8">
                <div className="relative -mt-16 mb-6">
                  <div className="w-32 h-32 bg-white rounded-full p-1 border-4 border-white shadow-md overflow-hidden">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${currentUser.id}`} 
                      className="w-full h-full object-cover" 
                      alt="avatar"
                    />
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900">{currentUser.name}</h1>
                <p className="text-gray-500 mb-4">{currentUser.role === 'SEEKER' ? 'Shaqo-raadiye' : 'Loo-shaqeeye'} (Account)</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Ku saabsan (About)</h3>
                    <p className="text-gray-600">{currentUser.bio || 'Ma jiro xog laga helay bio-gaaga.'}</p>
                  </div>
                  {currentUser.skills && (
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Xirfadaha (Skills)</h3>
                      <div className="flex flex-wrap gap-2">
                        {currentUser.skills.map(skill => (
                          <span key={skill} className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-100">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">Ma jiro isticmaale hadda galay.</div>
        );

      case 'jobs':
      default:
        return (
          <div className="space-y-8 animate-fade-in">
            {/* Hero Section */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Globe className="w-64 h-64 text-blue-600" />
               </div>
               <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                 Hel Shaqadaada Riyada <br className="hidden md:block" /> 
                 <span className="text-blue-600">ee Gudaha Soomaaliya</span>
               </h1>
               <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                 Waxaan isku xirnaa kumanaan dhalinyaro Soomaaliyeed ah iyo shirkadaha ugu waaweyn dalka. 
                 Simple, fast, and AI-powered matching.
               </p>

               <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-2 bg-white p-2 rounded-xl shadow-xl border border-gray-100 relative z-10">
                 <div className="flex-1 flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
                   <Search className="w-5 h-5 text-gray-400 mr-2" />
                   <input 
                    type="text" 
                    placeholder="Search titles, skills..." 
                    className="w-full focus:outline-none text-gray-700"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                   />
                 </div>
                 <div className="flex-1 flex items-center px-4 py-2">
                   <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                   <select 
                    className="w-full focus:outline-none text-gray-700 bg-transparent"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                   >
                     <option value="">Dhammaan Goobaha (All Locations)</option>
                     {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                   </select>
                 </div>
                 <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                   Raadi
                 </button>
               </div>
            </div>

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-600" />
                Shaqooyinka ugu dambeeyay ({filteredJobs.length})
              </h2>
              <div className="flex gap-2">
                <button className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50"><SlidersHorizontal className="w-5 h-5" /></button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map(job => (
                  <JobCard 
                    key={job.id} 
                    job={job} 
                    user={currentUser} 
                    onApply={handleApply}
                  />
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <div className="inline-flex items-center justify-center p-4 bg-gray-100 rounded-full mb-4">
                    <Info className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Shaqo looma helin</h3>
                  <p className="text-gray-500">Isku day inaad raadintaada bedesho (Try adjusting your filters).</p>
                </div>
              )}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      <Navbar 
        role={role} 
        setRole={setRole} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center z-50 shadow-lg">
        <button 
          onClick={() => setActiveTab('jobs')} 
          className={`flex flex-col items-center gap-1 ${activeTab === 'jobs' ? 'text-blue-600' : 'text-gray-400'}`}
        >
          <Search className="w-6 h-6" />
          <span className="text-[10px] font-bold">Raadi</span>
        </button>
        {role !== 'GUEST' && (
          <button 
            onClick={() => setActiveTab('dashboard')} 
            className={`flex flex-col items-center gap-1 ${activeTab === 'dashboard' ? 'text-blue-600' : 'text-gray-400'}`}
          >
            <LayoutDashboard className="w-6 h-6" />
            <span className="text-[10px] font-bold">Dashboard</span>
          </button>
        )}
        <button 
          onClick={() => setActiveTab('profile')} 
          className={`flex flex-col items-center gap-1 ${activeTab === 'profile' ? 'text-blue-600' : 'text-gray-400'}`}
        >
          <UserIcon className="w-6 h-6" />
          <span className="text-[10px] font-bold">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default App;
