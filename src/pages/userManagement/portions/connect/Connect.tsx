import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import HeaderWrapper from '../../components/HeaderWrapper';
import UserConnectProfile from './components/UserConnectProfile';
import FilterTab from '../../../../components/FilterTab';
import Matches from './portions/Matches';
import { LivePostData, matchesTableData, StatusPostData, supportTickets } from '../../../../constants/Data';
import ConnectMatch from './portions/ConnectMatch';

const userData = {
  fullName: "Qamardeen Malik",
  username: "Maleekfrenzy",
  email: "qamardeeoladimeji@gmail.com",
  phone: "07033484845",
  gender: "M",
  age: 24,
  interests: 4,
  dateRegistered: "01/01/25 - 06:22 AM",
  relationshipStatus: "Single",
  interestedIn: "Gym Buddy",
  distance: "20 - 35",
  subscriptionStatus: "Subscribed",
  images: [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  ],
  videos: [
    "https://example.com/video1.mp4",
    "https://example.com/video2.mp4",
    "https://example.com/video3.mp4"
  ]
};
const RenderComponent = (activeTab: string, data?: any) => {
  switch (activeTab) {
    case 'matches':
      return <Matches data={data} />;
    case 'chat':
      return <ConnectMatch data={data} />;
    default:
      return null;
  }
}
const Connect: React.FC = () => {
  const location = useLocation();
  const [activeTab, setactiveTab] = useState('activity')
  const { username } = useParams();
  const [activePortion, setActivePortion] = useState('matches')
  const tabs = [
    {
      name: 'matches', value: 'matches'
    },
    {
      name: 'chat', value: 'chat'
    },
  ]
  const hanldeValues = (activeTab: string) => {
    switch (activeTab) {
      case 'matches':
        return matchesTableData;
      case 'chat':
        return supportTickets;
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
      <UserConnectProfile user={userData} />
      <FilterTab
        tabs={tabs}
        handleValue={setActivePortion}
        activeTab={tabs[0].name}
      />
      {RenderComponent(activePortion,hanldeValues(activePortion))}
    </HeaderWrapper>
  )
}

export default Connect