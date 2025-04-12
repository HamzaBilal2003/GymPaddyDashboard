import React, { useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import HeaderWrapper from '../../components/HeaderWrapper';
import Horizontal from '../../../../components/alignments/Horizontal';
import { TransactionFilter, UserTransactionData, WalletStats } from '../../../../constants/Data';
import StatsCard from '../../../../components/StatsCard';
import FilterTab from '../../../../components/FilterTab';
import ItemAlign from '../../../../components/alignments/ItemAlign';
import Dropdown from '../../../../components/Dropdown';
import { bulkFilter, dates } from '../../../../constants/FiltersData';
import Vertical from '../../../../components/alignments/Vertical';
import SearchFilter from '../../../../components/SearchFilter';
import TableCan from '../../../../components/TableCan';
import UserTransactionRow from './components/UserTransactionRow';

const UserTransaction: React.FC = () => {
  const location = useLocation();
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState('all');
  const [transactionStatus, setTransactionStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { name: 'all', value: 'all' },
    { name: 'topup', value: 'topup' },
    { name: 'withdrawal', value: 'withdrawal' },
  ];

  // 👉 filter logic applied here
  const filteredData = useMemo(() => {
    return UserTransactionData.filter((item) => {
      const matchesTab = activeTab === 'all' || item.type === activeTab;
      const matchesStatus = transactionStatus === 'all' || item.status === transactionStatus;
      const matchesSearch = searchQuery === '' || item.id.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesStatus && matchesSearch;
    });
  }, [activeTab, transactionStatus, searchQuery]);

  return (
    <HeaderWrapper
      location={location}
      user={username}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      <Horizontal>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {WalletStats.map((item, index) => (
            <StatsCard {...item} key={index} />
          ))}
        </div>

        <FilterTab
          tabs={tabs}
          handleValue={(val) => setActiveTab(val)}
          activeTab={activeTab}
        />

        <Vertical>
          <ItemAlign>
            <Dropdown
              options={dates}
              onChange={(e) => console.log('Date:', e)}
              placeholder="Dates"
              position="left-0"
            />
            <Dropdown
              options={TransactionFilter}
              onChange={(val) => setTransactionStatus(val)}
              placeholder="Status"
              position="left-0"
            />
            <Dropdown
              options={bulkFilter}
              onChange={(e) => console.log('Bulk:', e)}
              placeholder="Bulk Actions"
              position="left-0"
            />
          </ItemAlign>
          <SearchFilter
            handleFunction={(val) => setSearchQuery(val)}
          />
        </Vertical>

        <TableCan
          TrName={UserTransactionRow}
          dataTr={filteredData}
          headerTr={['transaction id', 'amount', 'status', 'date', 'actions']}
        />
      </Horizontal>
    </HeaderWrapper>
  );
};

export default UserTransaction;
