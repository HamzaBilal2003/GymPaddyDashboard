import React from 'react';

interface LiveViewProps {
  live: {
    username: string;
    location: string;
    timeAgo: string;
    image: string;
  };
  onViewStats: () => void;
}

const LiveView: React.FC<LiveViewProps> = ({ live, onViewStats }) => {
  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt={live.username}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{live.username}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{live.location}</span>
              <span>•</span>
              <span>{live.timeAgo}</span>
            </div>
          </div>
        </div>
        <button
          onClick={onViewStats}
          className="text-red-500 font-medium hover:underline"
        >
          View Stats
        </button>
      </div>

      <div className="relative aspect-square rounded-xl overflow-hidden">
        <img 
          src={live.image} 
          alt="Live Stream"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LiveView;