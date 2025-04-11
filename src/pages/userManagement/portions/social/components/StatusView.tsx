import React from 'react';

interface StatusViewProps {
  status: {
    username: string;
    location: string;
    timeAgo: string;
    image: string;
    views: number;
  };
}

const StatusView: React.FC<StatusViewProps> = ({ status }) => {
  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt={status.username}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{status.username}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{status.location}</span>
              <span>•</span>
              <span>{status.timeAgo}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">{status.views.toLocaleString()}</div>
          <div className="text-sm text-gray-500">Views</div>
        </div>
      </div>

      <div className="relative aspect-square rounded-xl overflow-hidden">
        <img 
          src={status.image} 
          alt="Status"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default StatusView;