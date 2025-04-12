import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import HeaderWrapper from '../../components/HeaderWrapper';
import { UserGymProfile } from '../../components/gym/UserGymProfile';
import { mockAssessment, mockChallenges, mockUser } from '../../../../constants/Data';
import { FitnessGymAssessment } from '../../components/gym/FitnessGymAssessment';
import { ChallengeCard } from '../../components/gym/ChallengeCard';

const GymHub: React.FC = () => {
  const location = useLocation();
  const [activeTab, setactiveTab] = useState('activity')
  const { username } = useParams();
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'completed' | 'pending'>('all');

  const filteredChallenges = mockChallenges.filter(challenge =>
    statusFilter === 'all' ? true : challenge.status === statusFilter
  );
  return (
    <HeaderWrapper
      location={location}
      user={username}
      activeTab={activeTab}
      setActiveTab={setactiveTab}
    >
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto space-y-8">
          <UserGymProfile user={mockUser} />
          <FitnessGymAssessment questions={mockAssessment} />

          <div>
            <div className="flex items-center justify-between mb-6 ">
              <h2 className="text-2xl font-bold text-black">Challenges</h2>
              <div className="flex rounded-lg overflow-hidden bg-gray-100">
                {(['all', 'active', 'completed', 'pending'] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-4 py-2 capitalize ${statusFilter === status
                        ? 'bg-[#FF0000] text-white rounded-lg'
                        : 'bg-gray-100 text-black'
                      }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {filteredChallenges.map((challenge, index) => (
                <ChallengeCard key={index} {...challenge} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default GymHub