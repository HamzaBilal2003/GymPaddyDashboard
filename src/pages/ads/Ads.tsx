import React, { useEffect, useState } from 'react';
import { adsStatistics, adsTableData, adsTableHeaders, marketTabs } from '../../constants/Data';
import Horizontal from '../../components/alignments/Horizontal';
import StatsCard from '../../components/StatsCard';
import FilterTab from '../../components/FilterTab';
import Vertical from '../../components/alignments/Vertical';
import ItemAlign from '../../components/alignments/ItemAlign';
import Dropdown from '../../components/Dropdown';
import { adsStatus, bulkFilter, dates } from '../../constants/FiltersData';
import SearchFilter from '../../components/SearchFilter';
import TableCan from '../../components/TableCan';
import AdsRow from './components/AdsRow';

const Ads: React.FC = () => {

  const [activeTab, setActiveTab] = useState('all');
  const [boostStatus, setBoostStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(adsTableData);

  useEffect(() => {
    let temp = [...adsTableData];

    // Filter by boost status
    if (boostStatus !== 'all') {
      temp = temp.filter((item) => item.adStatus === boostStatus);
    }
    console.log(temp,'Data from ads');

    // Filter by active tab (status)
    if (activeTab !== 'all') {
      temp = temp.filter((item) => item.type === activeTab);
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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {adsStatistics.map((item, index) => (
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
            options={adsStatus}
            onChange={(val) => setBoostStatus(val)}
            placeholder="Status"
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
        headerTr={adsTableHeaders}
        dataTr={filteredData}
        TrName={AdsRow}
      />
    </Horizontal>
  );
};

export default Ads;
