import React, { useState } from 'react';
import ListingDetails from './ListingDetails';
import StatisticsModal from './StatisticsModal';

interface Props {
  displayData: any;
}

const ListingRow: React.FC<Props> = ({ displayData }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showStats, setShowStats] = useState(false);

  const handleShowStats = () => {
    setShowDetails(false);
    setShowStats(true);
  };

  const handleBack = () => {
    setShowStats(false);
    setShowDetails(true);
  };

  return (
    <>
      <tr className="hover:bg-gray-100 transition cursor-pointer relative">
        <td className="p-4">
          <input type="checkbox" />
        </td>
        <td className="p-4">
          <img src={displayData.image} alt={displayData.name} className="w-12 h-12 rounded-md object-cover" />
        </td>
        <td className="p-4">{displayData.name}</td>
        <td className="p-4">{displayData.price}</td>
        <td className="p-4">{displayData.category}</td>
        <td className="p-4">
          <span className={`font-semibold ${displayData.boostedStatus === 'boosted' ? 'text-green-600' : 'text-red-500'}`}>
            {displayData.boostedStatus === 'boosted' ? 'Running' : 'Normal'}
          </span>
        </td>
        <td className="p-4">{displayData.date}</td>
        <td className="p-4">
          <button 
            onClick={() => setShowDetails(true)} 
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
          >
            Details
          </button>
        </td>
      </tr>

      {showDetails && (
        <ListingDetails
          data={displayData}
          onClose={() => setShowDetails(false)}
          onShowStats={handleShowStats}
        />
      )}

      {showStats && (
        <StatisticsModal
          data={displayData}
          onClose={() => setShowStats(false)}
          onBack={handleBack}
        />
      )}
    </>
  );
};

export default ListingRow;