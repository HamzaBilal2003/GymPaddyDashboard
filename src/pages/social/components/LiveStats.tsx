import React from 'react';

interface LiveStatsProps {
  stats: {
    audience: number;
    duration: string;
    amountEarned: string;
    charge: {
      amount: string;
      rate: string;
    };
    mostActiveGifter: {
      name: string;
      amount: string;
    };
    timeStarted: string;
    liveTimer: string;
  };
  onViewAudience: () => void;
}

const LiveStats: React.FC<LiveStatsProps> = ({ stats, onViewAudience }) => {
  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center gap-3 mb-6">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-semibold">Maleekfrenzy</h3>
          <p className="text-gray-500 text-sm">Lagos, Nigeria • 20 min ago</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 border">
          <p className="text-gray-500 text-sm">Audience</p>
          <div className="flex items-center justify-between mt-1">
            <div className="flex items-center gap-2">
              <p className="text-xl font-semibold">{stats.audience}</p>
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80" className="w-6 h-6 rounded-full border-2 border-white" alt="" />
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80" className="w-6 h-6 rounded-full border-2 border-white" alt="" />
              </div>
            </div>
            <button
              onClick={onViewAudience}
              className="text-red-500 text-sm font-medium hover:underline cursor-pointer"
            >
              View
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border">
          <p className="text-gray-500 text-sm">Duration</p>
          <p className="text-xl font-semibold mt-1">{stats.duration}</p>
        </div>

        <div className="bg-white rounded-xl p-4 border">
          <p className="text-gray-500 text-sm">Amount Earned</p>
          <p className="text-xl font-semibold mt-1">{stats.amountEarned}</p>
        </div>

        <div className="bg-white rounded-xl p-4 border">
          <p className="text-gray-500 text-sm">Charge</p>
          <p className="text-xl font-semibold mt-1">{stats.charge.amount}</p>
          <p className="text-sm text-gray-500">{stats.charge.rate}</p>
        </div>

        <div className="bg-white rounded-xl p-4 border">
          <p className="text-gray-500 text-sm">Most Active Gifter</p>
          <div className="flex items-center gap-2 mt-1">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80"
              alt={stats.mostActiveGifter.name}
              className="w-6 h-6 rounded-full"
            />
            <div>
              <p className="font-medium">{stats.mostActiveGifter.name}</p>
              <p className="text-sm text-gray-500">{stats.mostActiveGifter.amount}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border">
          <p className="text-gray-500 text-sm">Time Started</p>
          <p className="text-xl font-semibold mt-1">{stats.timeStarted}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 border">
        <p className="text-gray-500 text-sm">Live Timer</p>
        <p className="text-3xl font-semibold text-center mt-2">{stats.liveTimer}</p>
      </div>
    </div>
  );
};

export default LiveStats;