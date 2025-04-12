import React from 'react';
import { X } from 'lucide-react';

interface SubscriptionModalProps {
  onClose: () => void;
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]">
    <div className="bg-white rounded-3xl w-full max-w-xl overflow-hidden">
      <div className="flex justify-between items-center p-6 border-b">
        <h2 className="text-2xl font-semibold">Subscription Status</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>

      <div className="p-8">
        <div className="text-center mb-12">
          <h3 className="text-5xl font-bold text-green-600">ACTIVE</h3>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
            <span className="text-xl text-black">Subscription Type</span>
            <span className="text-xl text-gray-500">VIP</span>
          </div>

          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
            <span className="text-xl text-black">Date</span>
            <span className="text-xl text-gray-500">01/01/25 - 02:22 AM</span>
          </div>

          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
            <span className="text-xl text-black">Expiry</span>
            <span className="text-xl text-gray-500">01/01/25 - 02:22 AM</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SubscriptionModal;