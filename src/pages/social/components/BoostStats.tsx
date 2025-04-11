import React from 'react';

interface BoostStatsProps {
  stats: {
    amountSpent: string;
    duration: string;
    dateCreated: string;
    impressions: number;
    clicks: number;
  };
  username: string;
  location: string;
  timeAgo: string;
  onViewPost: () => void;
}

const BoostStats: React.FC<BoostStatsProps> = ({ stats, username, location, timeAgo, onViewPost }) => {
  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt={username}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-semibold">{username}</h3>
          <p className="text-gray-500 text-sm">
            {location} • {timeAgo}
          </p>
        </div>
        <button 
          onClick={onViewPost}
          className="ml-auto bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
        >
          View Post
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <StatsCard title="Amount Spent" value={stats.amountSpent} />
        <StatsCard title="Duration" value={stats.duration} />
        <StatsCard title="Date Created" value={stats.dateCreated} />
        <StatsCard title="Impressions" value={stats.impressions.toString()} />
        <StatsCard title="Clicks" value={stats.clicks.toString()} />
        <StatsCard title="Amount Spent" value={stats.amountSpent} />
      </div>
    </div>
  );
};

const StatsCard: React.FC<{ title: string; value: string }> = ({ title, value }) => (
  <div className="border rounded-xl p-4">
    <p className="text-gray-500 text-sm">{title}</p>
    <p className="text-xl font-semibold mt-1">{value}</p>
  </div>
);

export default BoostStats;