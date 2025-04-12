import React, { useState } from 'react';
import { AlertOctagonIcon, AlertTriangleIcon } from 'lucide-react';
import MoreDropdown from '../../../../../components/MoreDropdown';
import Modal from '../../../../../components/Modal';
import StatusView from './StatusView';

interface Props {
  displayData: {
    postType: string;
    postImage: string;
    views: number;
    likes: number;
    status: 'Running' | 'Ended';
    date: string;
    username?: string;
    location?: string;
    timeAgo?: string;
  };
}

const StatusPostRow: React.FC<Props> = ({ displayData }) => {
  const [showStatus, setShowStatus] = useState(false);

  return (
    <>
      <tr className="hover:bg-gray-100 transition cursor-pointer relative">
        <td className="p-4">
          <input type="checkbox" className="form-checkbox" />
        </td>
        <td className="p-4">{displayData.postType}</td>
        <td className="p-4">
          <img
            src={displayData.postImage}
            alt="Post"
            className="w-20 h-20 rounded-lg object-cover"
          />
        </td>
        <td className="p-4">{displayData.views}</td>
        <td className="p-4">{displayData.likes}</td>
        <td className="p-4">
          <span className={displayData.status === 'Running' ? 'text-green-600 font-semibold' : 'text-red-500 font-semibold'}>
            {displayData.status}
          </span>
        </td>
        <td className="p-4">{displayData.date}</td>
        <td className="p-4">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setShowStatus(true)}
              className="bg-red-500 text-white text-sm px-4 py-2 rounded-md hover:bg-red-600"
            >
              Details
            </button>
            <MoreDropdown
              menuClass="min-w-[140px] bg-white"
            >
              <div className="flex flex-col gap-1 px-1 text-sm text-black">
                <button className="py-2 px-2 hover:underline cursor-pointer py-4 text-left flex items-center gap-2">
                  <AlertOctagonIcon size={20} color='black' /> Hide Post
                </button>
                <button className="py-2 px-2 hover:underline cursor-pointer py-4 text-left flex items-center gap-2 text-red-600">
                  <AlertTriangleIcon size={20} color='red' /> Delete Post
                </button>
              </div>
            </MoreDropdown>
          </div>
        </td>
      </tr>

      <Modal
        isOpen={showStatus}
        onClose={() => setShowStatus(false)}
        title="Status"
      >
        <StatusView
          status={{
            username: displayData.username || 'Maleekfrenzy',
            location: displayData.location || 'Lagos, Nigeria',
            timeAgo: displayData.timeAgo || '20 min ago',
            image: displayData.postImage,
            views: displayData.views
          }}
        />
      </Modal>
    </>
  );
};

export default StatusPostRow;