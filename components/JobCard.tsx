
import React, { useState } from 'react';
import { MapPin, DollarSign, Calendar, Sparkles, ChevronRight, CheckCircle } from 'lucide-react';
import { Job, User } from '../types';
import { analyzeJobMatch } from '../services/geminiService';

interface JobCardProps {
  job: Job;
  user: User | null;
  onApply: (jobId: string) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, user, onApply }) => {
  const [matchResult, setMatchResult] = useState<{ score: number; reason: string } | null>(null);
  const [loadingAI, setLoadingAI] = useState(false);
  const [applied, setApplied] = useState(false);

  const handleAIMatch = async () => {
    if (!user) return;
    setLoadingAI(true);
    const result = await analyzeJobMatch(user, job);
    setMatchResult(result);
    setLoadingAI(false);
  };

  const handleApply = () => {
    onApply(job.id);
    setApplied(true);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
          <p className="text-blue-600 font-medium">{job.company}</p>
        </div>
        <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {job.type}
        </span>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex items-center text-gray-500 text-sm">
          <MapPin className="w-4 h-4 mr-2" />
          {job.location}
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <DollarSign className="w-4 h-4 mr-2" />
          {job.salary}
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          Posted on {new Date(job.postedAt).toLocaleDateString()}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{job.description}</p>
        <div className="flex flex-wrap gap-2">
          {job.requirements.map((req, i) => (
            <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              {req}
            </span>
          ))}
        </div>
      </div>

      {matchResult && (
        <div className="mb-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-indigo-700 text-sm font-bold flex items-center">
              <Sparkles className="w-4 h-4 mr-1" /> Match Rating
            </span>
            <span className="text-indigo-700 font-bold">{matchResult.score}%</span>
          </div>
          <div className="w-full bg-indigo-200 rounded-full h-1.5 mb-2">
            <div 
              className="bg-indigo-600 h-1.5 rounded-full" 
              style={{ width: `${matchResult.score}%` }}
            ></div>
          </div>
          <p className="text-indigo-600 text-xs italic">{matchResult.reason}</p>
        </div>
      )}

      <div className="flex gap-2">
        {user && user.role === 'SEEKER' && !applied && (
          <>
            <button 
              onClick={handleApply}
              className="flex-1 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Codso (Apply)
            </button>
            <button 
              onClick={handleAIMatch}
              disabled={loadingAI}
              className="px-4 py-2 border border-indigo-200 text-indigo-600 rounded-lg hover:bg-indigo-50 transition flex items-center justify-center"
            >
              {loadingAI ? (
                <div className="w-5 h-5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Sparkles className="w-5 h-5" />
              )}
            </button>
          </>
        )}
        {applied && (
          <div className="flex-1 bg-green-50 text-green-700 font-semibold py-2 rounded-lg flex items-center justify-center border border-green-200">
            <CheckCircle className="w-5 h-5 mr-2" /> Waa lagu guuleystay
          </div>
        )}
        {(!user || user.role === 'GUEST') && (
          <button className="flex-1 border border-gray-300 text-gray-600 font-semibold py-2 rounded-lg hover:bg-gray-50 transition">
            Sign in to Apply
          </button>
        )}
      </div>
    </div>
  );
};

export default JobCard;
