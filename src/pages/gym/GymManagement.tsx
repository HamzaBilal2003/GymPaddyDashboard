import React, { useMemo, useState } from 'react';
import Horizontal from '../../components/alignments/Horizontal';
import { GymStats, gymUserTableData, gymUserTableHeaders } from '../../constants/Data';
import StatsCard from '../../components/StatsCard';
import ItemAlign from '../../components/alignments/ItemAlign';
import Dropdown from '../../components/Dropdown';
import { bulkFilter, dates } from '../../constants/FiltersData';
import TableCan from '../../components/TableCan';
import GymRow from './components/GymRow';

const getDaysDifference = (dateStr: string) => {
  const now = new Date();
  const given = new Date(dateStr);
  const diff = now.getTime() - given.getTime();
  return diff / (1000 * 60 * 60 * 24);
};

const GymManagement: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('today');


  const handleDateFilter = (value: string) => {
    setSelectedDate(value);
  };

  const handleBulkAction = (value: string) => {
    console.log("Bulk action:", value);
  };

  // const filteredData = useMemo(() => {
  //   return gymUserTableData.filter(item => {
  //     const daysLimit = selectedDate === 'today' ? 1 : parseInt(selectedDate);
  //     // const dateMatch = getDaysDifference(item.created_at) <= daysLimit;
  //     return  dateMatch;
  //   });
  // }, [ selectedDate]);

  return (
    <Horizontal>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {GymStats.map((item, index) => (
          <StatsCard {...item} key={index} />
        ))}
      </div>

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
        headerTr={gymUserTableHeaders}
        dataTr={gymUserTableData}
        TrName={GymRow}
      />
    </Horizontal>
  );
};

export default GymManagement;
