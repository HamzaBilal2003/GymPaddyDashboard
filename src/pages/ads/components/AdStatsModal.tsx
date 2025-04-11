import React from 'react';
import { X } from 'lucide-react';

interface AdStatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    name: string;
    amountSpent: string;
    boostDuration: string;
    dateCreated: string;
    impressions: number;
    clicks: number;
  };
}

const AdStatsModal: React.FC<AdStatsModalProps> = ({
  isOpen,
  onClose,
  data
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 min-h-screen bg-black/50 z-[1000] overflow-auto">
      <div className="flex items-center justify-center w-full  py-8">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl">
          <div className="flex items-center justify-between p-4 pb-2 border-b border-gray-200">
            <h2 className="text-xl font-semibold">Stats</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-4">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-medium">{data.name}</h3>
                <p className="text-sm text-gray-500">Lagos, Nigeria • 20 min ago</p>
              </div>
              {/* <button className="ml-auto bg-red-500 text-white px-4 py-1 rounded-full text-sm">
                View Listing
              </button> */}
            </div>

            <div className="grid grid-cols-3 gap-4">
              <StatCard title="Amount Spent" value={data.amountSpent} />
              <StatCard title="Duration" value={data.boostDuration} />
              <StatCard title="Date Created" value={data.dateCreated} />
              <StatCard title="Impressions" value={data.impressions.toString()} />
              <StatCard title="Clicks" value={data.clicks.toString()} />
              <StatCard title="Amount Spent" value={data.amountSpent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ title: string; value: string }> = ({ title, value }) => (
  <div className="bg-gray-200 p-4 rounded-lg broder">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="font-semibold mt-1">{value}</p>
  </div>
);

export default AdStatsModal;