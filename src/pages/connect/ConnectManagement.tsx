import React, { useState } from 'react'
import Horizontal from '../../components/alignments/Horizontal'
import StatsCard from '../../components/StatsCard'
import { ConnectStatistics, connectuserTableData, connectuserTableHeaders } from '../../constants/Data'
import FilterTab from '../../components/FilterTab'
import Vertical from '../../components/alignments/Vertical'
import ItemAlign from '../../components/alignments/ItemAlign'
import Dropdown from '../../components/Dropdown'
import { bulkFilter, connectVerifyStatus, dates } from '../../constants/FiltersData'
import SearchFilter from '../../components/SearchFilter'
import TableCan from '../../components/TableCan'
import ConnectTableRow from './components/ConnectTableRow'

const ConnectManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [selectedDate, setSelectedDate] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [bulkAction, setBulkAction] = useState('')
  const [searchText, setSearchText] = useState('')
  console.log(bulkAction,selectedDate)

  const filteredData = connectuserTableData.filter((user) => {
    const matchTab = activeTab === 'all' || (activeTab === 'subscriber' && user.subscription === true)
    const matchStatus = !statusFilter || statusFilter === 'all' || user.videoVerification === statusFilter
    const matchSearch = !searchText || user.fullName.toLowerCase().includes(searchText.toLowerCase())
    // Optionally add date-based filtering if needed
    return matchTab && matchStatus && matchSearch
  })

  return (
    <Horizontal>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {ConnectStatistics.map((item, index) => (
          <StatsCard {...item} key={index} />
        ))}
      </div>
      <h1 className='text-2xl font-medium'>Connect Management</h1>
      <FilterTab
        tabs={[
          { name: 'all', value: 'all' },
          { name: 'subscriber', value: 'subscriber' },
        ]}
        handleValue={(e) => setActiveTab(e)}
        activeTab={activeTab}
      />
      <Vertical>
        <ItemAlign>
          <Dropdown
            options={dates}
            onChange={(val) => setSelectedDate(val)}
            placeholder="Dates"
            position="left-0"
          />
          <Dropdown
            options={connectVerifyStatus}
            onChange={(val) => setStatusFilter(val)}
            placeholder="Status"
            position="left-0"
          />
          <Dropdown
            options={bulkFilter}
            onChange={(val) => setBulkAction(val)}
            placeholder="Bulk Actions"
            position="left-0"
          />
        </ItemAlign>
        <SearchFilter
          handleFunction={(val) => setSearchText(val)}
        />
      </Vertical>
      <TableCan
        TrName={ConnectTableRow}
        dataTr={filteredData}
        headerTr={connectuserTableHeaders}
      />
    </Horizontal>
  )
}

export default ConnectManagement
