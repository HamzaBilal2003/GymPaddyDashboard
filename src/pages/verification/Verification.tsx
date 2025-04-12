import React, { useMemo, useState } from 'react';
import Horizontal from '../../components/alignments/Horizontal';
import { VerificationsStatics, VerificationsTable } from '../../constants/Data';
import StatsCard from '../../components/StatsCard';
import FilterTab from '../../components/FilterTab';
import ItemAlign from '../../components/alignments/ItemAlign';
import Dropdown from '../../components/Dropdown';
import { bulkFilter, dates } from '../../constants/FiltersData';
import TableCan from '../../components/TableCan';
import VerificationRow from './components/VerificationRow';

const getDaysDifference = (dateStr: string) => {
  const now = new Date();
  const given = new Date(dateStr);
  const diff = now.getTime() - given.getTime();
  return diff / (1000 * 60 * 60 * 24);
};

const Verification: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedDate, setSelectedDate] = useState('today');

  const filterTabs = [
    { name: 'all', value: 'all' },
    { name: 'approved', value: 'approved' },
    { name: 'pending', value: 'pending' },
    { name: 'rejected', value: 'rejected' }
  ];

  const handleFilterTab = (value: string) => {
    setActiveTab(value);
  };

  const handleDateFilter = (value: string) => {
    setSelectedDate(value);
  };

  const handleBulkAction = (value: string) => {
    console.log("Bulk action:", value);
  };

  const filteredData = useMemo(() => {
    return VerificationsTable.filter(item => {
      const statusMatch = activeTab === 'all' || item.status === activeTab;

      const daysLimit = selectedDate === 'today' ? 1 : parseInt(selectedDate);
      const dateMatch = getDaysDifference(item.created_at) <= daysLimit;

      return statusMatch && dateMatch;
    });
  }, [activeTab, selectedDate]);

  return (
    <Horizontal>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {VerificationsStatics.map((item, index) => (
          <StatsCard {...item} key={index} />
        ))}
      </div>

      <FilterTab
        tabs={filterTabs}
        handleValue={handleFilterTab}
        activeTab={activeTab}
      />

      <ItemAlign>
        <Dropdown
          options={dates}
          onChange={handleDateFilter}
          placeholder="Date"
          position="left-0"
        />
        <Dropdown
          options={bulkFilter}
          onChange={handleBulkAction}
          placeholder="Bulk Actions"
          position="left-0"
        />
      </ItemAlign>

      <TableCan
        headerTr={["Name", "Business Name", "Category", "Status", "Date", "Action"]}
        dataTr={filteredData}
        TrName={VerificationRow}
      />
    </Horizontal>
  );
};

export default Verification;
