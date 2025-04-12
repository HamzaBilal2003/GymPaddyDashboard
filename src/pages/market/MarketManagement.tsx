import React, { useEffect, useState } from 'react';
import Horizontal from '../../components/alignments/Horizontal';
import {
  ListingTableData,
  ListingTableHeaders,
  marketStatics,
  marketTabs
} from '../../constants/Data';
import StatsCard from '../../components/StatsCard';
import Vertical from '../../components/alignments/Vertical';
import ItemAlign from '../../components/alignments/ItemAlign';
import Dropdown from '../../components/Dropdown';
import {
  boostedFilter,
  bulkFilter,
  dates
} from '../../constants/FiltersData';
import SearchFilter from '../../components/SearchFilter';
import TableCan from '../../components/TableCan';
import ListingRow from '../userManagement/portions/market/components/ListingRow';
import FilterTab from '../../components/FilterTab';

const MarketManagement: React.FC = () => {

  const [activeTab, setActiveTab] = useState('all');
  const [boostStatus, setBoostStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(ListingTableData);

  useEffect(() => {
    let temp = [...ListingTableData];

    // Filter by boost status
    if (boostStatus !== 'all') {
      temp = temp.filter((item) => item.boostedStatus === boostStatus);
    }

    // Filter by active tab (status)
    if (activeTab !== 'all') {
      temp = temp.filter((item) => item.status === activeTab);
    }

    // Search filter
    if (searchTerm.trim() !== '') {
      temp = temp.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(temp);
  }, [boostStatus, activeTab, searchTerm]);

  return (
    <Horizontal>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {marketStatics.map((item, index) => (
          <StatsCard {...item} key={index} />
        ))}
      </div>

      <FilterTab
        tabs={marketTabs}
        handleValue={(val) => setActiveTab(val)}
        activeTab={activeTab}
      />

      <Vertical>
        <ItemAlign>
          <Dropdown
            options={dates}
            onChange={(val) => console.log('Date:', val)}
            placeholder="Dates"
            position="left-0"
          />
          <Dropdown
            options={boostedFilter}
            onChange={(val) => setBoostStatus(val)}
            placeholder="Boost Status"
            position="left-0"
          />
          <Dropdown
            options={bulkFilter}
            onChange={(val) => console.log('Bulk:', val)}
            placeholder="Bulk Actions"
            position="left-0"
          />
        </ItemAlign>
        <SearchFilter
          handleFunction={(val) => setSearchTerm(val)}
        />
      </Vertical>

      <TableCan
        headerTr={ListingTableHeaders}
        dataTr={filteredData}
        TrName={ListingRow}
      />
    </Horizontal>
  );
};

export default MarketManagement;
