import React, { useState } from 'react'
import Horizontal from '../../components/alignments/Horizontal'
import FilterTab from '../../components/FilterTab'
import { analyticsTab, dates } from '../../constants/FiltersData'
import Dropdown from '../../components/Dropdown'
import AllPortion from './Portion/AllPortion'
import { AdsAnalytics, allAnalytic, RevenueAnalytics, Useranalytics } from '../../constants/Data'
import UserPortion from './Portion/UserPortion'
import RevenuePortion from './Portion/RevenuePortion'
import AdsPortions from './Portion/AdsPortions'


const RenderComponent = (activeTab: string, data?: any) => {
  switch (activeTab) {
    case 'all':
      return <AllPortion data={data} />;
    case 'UsersPortion':
      return <UserPortion data={data} />;
    case 'RevenuePortion':
      return <RevenuePortion data={data} />;
    case 'AdsPortion':
      return <AdsPortions data={data} />;
    default:
      return null;
  }
}

const Analytics: React.FC = () => {
  const [activeTab, setactiveTab] = useState('all');
  const handleDateFilter = (value: string) => {
    console.log(value)
  }
  const hanldeValues = (activeTab: string) => {
    switch (activeTab) {
      case 'all':
        return allAnalytic;
      case 'UsersPortion':
        return Useranalytics;
      case 'RevenuePortion':
        return RevenueAnalytics;
      case 'AdsPortion':
        return AdsAnalytics;
      default:
        return null;
    }
  }
  return (
    <Horizontal>
      <FilterTab
        tabs={analyticsTab}
        handleValue={setactiveTab}
        activeTab={activeTab}
      />
      <Dropdown
        options={dates}
        onChange={handleDateFilter}
        placeholder="Bulk Actions"
        position="left-0"
      />
      {RenderComponent(activeTab, hanldeValues(activeTab))}
    </Horizontal>
  )
}

export default Analytics