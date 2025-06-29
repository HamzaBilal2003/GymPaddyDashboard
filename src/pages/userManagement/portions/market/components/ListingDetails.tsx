import React from 'react';
import { X } from 'lucide-react';
interface ListingDetailsProps {
  data: any;
  onClose: () => void;
  onShowStats: () => void;
}

const ListingDetails: React.FC<ListingDetailsProps> = ({ data, onClose, onShowStats }) => {
  return (
    <div className="fixed inset-0 min-h-screen bg-black/50 z-[1000] overflow-auto">
      <div className="flex items-center justify-center w-full  py-8">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl">
          <div className="flex items-center justify-between p-4 pb-2 border-b border-gray-200">
            <h2 className="text-xl font-semibold">Listing Details</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-6">
            <img src={data.image} alt={data.name} className="w-full h-64 object-cover rounded-lg mb-6" />
            <div className="space-y-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between p-4 border-b border-gray-200">
                <span className="font-medium">Name</span>
                <span className="text-gray-600">{data.name}</span>
              </div>

              <div className="flex justify-between p-4 border-b border-gray-200">
                <span className="font-medium">Price</span>
                <span className="text-gray-600">{data.price}</span>
              </div>

              <div className="flex justify-between p-4 border-b border-gray-200">
                <span className="font-medium">Desc</span>
                <span className="text-gray-600">{data.description || 'No description available'}</span>
              </div>

              <div className="flex justify-between p-4 border-b border-gray-200">
                <span className="font-medium">Category</span>
                <span className="text-gray-600">{data.category}</span>
              </div>

              <div className="flex justify-between p-4 border-b border-gray-200">
                <span className="font-medium">Date Created</span>
                <span className="text-gray-600">{data.date}</span>
              </div>

              <div className="flex justify-between p-4 border-b border-gray-200">
                <span className="font-medium">Status</span>
                <span className={`font-semibold ${data.status === 'Active' ? 'text-green-600' : 'text-red-500'}`}>
                  {data.status || 'Active'}
                </span>
              </div>

              <div className="flex justify-between p-4 ">
                <span className="font-medium">Boost Status</span>
                <span className={`font-semibold ${data.boostedStatus === 'boosted' ? 'text-green-600' : 'text-red-500'}`}>
                  {data.boostedStatus === 'boosted' ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition">
                Edit
              </button>
              <button className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition">
                Boost
              </button>
              <button
                onClick={onShowStats}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition"
              >
                Statistics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;