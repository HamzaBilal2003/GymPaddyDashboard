import React from 'react';

interface Tab {
  id: string;
  label: string;
  image: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="w-full border-b border-gray-200 mb-8">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              px-6 pb-4 flex-[1] text-sm font-medium
              transition-colors duration-200 cursor-pointer
              flex items-center gap-2
              ${
                activeTab === tab.id
                  ? 'text-[#FF0000] border-b-4 border-[#FF0000]'
                  : 'text-gray-500 hover:text-gray-700'
              }
            `}
          >
            <img src={tab.image} alt={tab.label} className="w-6 h-6" loading='lazy'/>
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;