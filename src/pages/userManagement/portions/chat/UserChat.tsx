import React, { useMemo, useState } from "react";
import HeaderWrapper from "../../components/HeaderWrapper";
import { useLocation, useParams } from "react-router-dom";
import { supportTickets } from "../../../../constants/Data";
import Horizontal from "../../../../components/alignments/Horizontal";
import ItemAlign from "../../../../components/alignments/ItemAlign";
import Dropdown from "../../../../components/Dropdown";
import { dates, notificationStatus } from "../../../../constants/FiltersData";
import TableCan from "../../../../components/TableCan";
import SupportRow from "../../../support/components/SupportRow";
const getDaysDifference = (dateStr: string) => {
  const now = new Date();
  const givenDate = new Date(dateStr);
  const diff = now.getTime() - givenDate.getTime();
  return diff / (1000 * 60 * 60 * 24);
};
const Support: React.FC = () => {
  const location = useLocation();
  const [activeTab, setactiveTab] = useState('all');
  const { username } = useParams();
  const [selectedDate, setSelectedDate] = useState<string>('today')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')

  const handleDateFilter = (value: string) => {
    setSelectedDate(value)
  }

  const handleStatusFilter = (value: string) => {
    setSelectedStatus(value)
  }

  const filteredData = useMemo(() => {
    return supportTickets.filter((ticket) => {
      const tabMatch = activeTab === "all" || ticket.type == activeTab;
      const statusMatch = selectedStatus === "all" || ticket.status === selectedStatus;

      const daysLimit = selectedDate === "today" ? 1 : parseInt(selectedDate);
      const dateMatch = getDaysDifference(ticket.created_at) <= daysLimit;

      return tabMatch && statusMatch && dateMatch;
    });
  }, [activeTab, selectedDate, selectedStatus]);
  console.log(filteredData)
  console.log(supportTickets)


  return (
    <HeaderWrapper
      location={location}
      user={username}
      activeTab={activeTab}
      setActiveTab={setactiveTab}
    >
      <Horizontal>
        <h1 className="text-2xl font-medium">Chat list</h1>
        <ItemAlign>
          <Dropdown
            options={dates}
            onChange={handleDateFilter}
            placeholder="Dates"
            position="left-0"
          />
          <Dropdown
            options={notificationStatus}
            onChange={handleStatusFilter}
            placeholder="Status"
            position="left-0"
          />
        </ItemAlign>
        <TableCan
          headerTr={['name', 'message', 'status', 'Date', 'actions']}
          dataTr={filteredData}
          TrName={SupportRow}
        />

      </Horizontal>
    </HeaderWrapper>
  )
};

export default Support;
