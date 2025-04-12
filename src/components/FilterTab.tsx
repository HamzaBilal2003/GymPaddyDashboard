import React, { useState } from 'react';

interface Tab {
  name: string;
  value: string;
}

interface FilterProps {
  tabs: Tab[];
  handleValue: (value: string) => void;
  activeTab: string | undefined;
  tabPadding?: string;
}

const FilterTab: React.FC<FilterProps> = ({ tabs, handleValue, activeTab, tabPadding = '2' }) => {
  const [activeTabs, setactiveTabs] = useState(activeTab);

  const handleTabClick = (tab: Tab) => {
    handleValue(tab.value);
    setactiveTabs(tab.name);
  };
  

  return (
    <div className="flex items-center bg-gray-100 w-fit rounded-lg ">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`capitalize cursor-pointer py-${tabPadding} px-8 rounded-lg ${
            activeTabs === tab.name
              ? 'bg-[#FF0000] text-white'
              : 'bg-transparent text-black transition'
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default FilterTab;