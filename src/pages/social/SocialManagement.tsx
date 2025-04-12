import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import HeaderWrapper from '../userManagement/components/HeaderWrapper';
import {  LivePostData, socialManagementStats, StatusPostData, UserPostData } from '../../constants/Data';
import StatsCard from '../../components/StatsCard';
import FilterTab from '../../components/FilterTab';
import PostPortion from './Portions/PostPortion';
import StatusPortion from './Portions/StatusPortion';
import LivePortion from './Portions/LivePortion';
const RenderComponent = (activeTab: string, data?: any) => {
  switch (activeTab) {
    case 'all':
      return <PostPortion data={data} />;
    case 'status':
      return <StatusPortion data={data} />;
    case 'live':
      return <LivePortion data={data} />;
    default:
      return null;
  }
}

const SocialManagement: React.FC = () => {
  const location = useLocation();
  const [activeTab, setactiveTab] = useState('all');
  const { username } = useParams();
  const [activePortion, setActivePortion] = useState('all')
  const tabs = [
    {
      name: 'all', value: 'all'
    },
    {
      name: 'status', value: 'status'
    },
    {
      name: 'live', value: 'live'
    },
  ]
  const hanldeValues = (activeTab: string) => {
    switch (activeTab) {
      case 'all':
        return UserPostData;
      case 'status':
        return StatusPostData;
      case 'live':
        return LivePostData;
      default:
        return null;
    }
  }
  return (
    <HeaderWrapper
      location={location}
      user={username}
      activeTab={activeTab}
      setActiveTab={setactiveTab}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {socialManagementStats.map((item, index) => (
          <StatsCard {...item} key={index} />
        ))}
      </div>
      <h1 className='text-2xl font-medium'>Social Activity</h1>
      <FilterTab
        tabs={tabs}
        handleValue={setActivePortion}
        activeTab={tabs[0].name}
      />
      {RenderComponent(activePortion, hanldeValues(activePortion))}
    </HeaderWrapper>
  )
}

export default SocialManagement;