import React from 'react';
import type { TabProps } from '../../../constants/Data';

const Tab: React.FC<TabProps> = ({ active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 text-base font-medium cursor-pointer transition-colors ${
        active
          ? 'bg-red-500 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {children}
    </button>
  );
};

export default Tab;