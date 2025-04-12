import React, { useMemo, useState } from 'react';
import Horizontal from '../../components/alignments/Horizontal';
import { SubscriptionTable, VerificationsStatics } from '../../constants/Data';
import StatsCard from '../../components/StatsCard';
import FilterTab from '../../components/FilterTab';
import ItemAlign from '../../components/alignments/ItemAlign';
import Dropdown from '../../components/Dropdown';
import { bulkFilter, dates } from '../../constants/FiltersData';
import TableCan from '../../components/TableCan';
import SubscriptionRow from './components/SubscriptionRow';

const getDaysDifference = (dateStr: string) => {
  const now = new Date();
  const given = new Date(dateStr);
  const diff = now.getTime() - given.getTime();
  return diff / (1000 * 60 * 60 * 24);
};

const Subcription: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedDate, setSelectedDate] = useState('today');

  const filterTabs = [
    { name: 'all', value: 'all' },
    { name: 'active', value: 'active' },
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
    return SubscriptionTable.filter(item => {
      const statusMatch = activeTab === 'all' || item.status === activeTab;

      const daysLimit = selectedDate === 'today' ? 1 : parseInt(selectedDate);
      const dateMatch = getDaysDifference(item.created_at) <= daysLimit;

      return statusMatch && dateMatch;
    });
  }, [activeTab, selectedDate]);
  console.log(filteredData);
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
        headerTr={["Name", "Plan", "Amount", "Status", "Date", "Action"]}
        dataTr={filteredData}
        TrName={SubscriptionRow}
      />
    </Horizontal>
  );
};

export default Subcription;
