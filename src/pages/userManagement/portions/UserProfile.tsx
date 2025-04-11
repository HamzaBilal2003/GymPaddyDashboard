import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Horizontal from '../../../components/alignments/Horizontal';
import UserProfileCan from '../components/UserProfileCan';
import UserFormModal from '../components/AddUserModal';
import ItemAlign from '../../../components/alignments/ItemAlign';
import Dropdown from '../../../components/Dropdown';
import { bulkFilter, UserActiveStatus } from '../../../constants/FiltersData';
import TableCan from '../../../components/TableCan';
import UserActivityRow from '../rows/UserActivityRow';
import HeaderWrapper from '../components/HeaderWrapper';

const UserProfile: React.FC = () => {
  const location = useLocation();
  const [activeTab, setactiveTab] = useState('activity')
  const [isEditModal, setisEditModal] = useState(false);
  const { username } = useParams();
  const userData = {
    fullName: 'Qamardeen Maleek',
    username: 'Maleekfrenzy',
    email: 'qamardeenoladimeji@gmail.com',
    phoneNumber: '07033484845',
    gender: 'M',
    age: 24,
    password: 'mypassword',
    profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
    verified: false,
    lastLogin: '01/01/25 - 06:22 AM',
    dateRegistered: '01/01/25 - 06:22 AM',
  }
  const handleEdit = () => {
    setisEditModal(true);
  }
  const handleFilter = (values: any) => {
    console.log(values);
  }
  return (
    <HeaderWrapper
    location={location}
      user={username}
      activeTab={activeTab}
      setActiveTab={setactiveTab}
    >
      <Horizontal>
        <UserProfileCan
          onEdit={handleEdit}
          userData={userData}
        />
        <h1 className='text-xl'>UserActivities</h1>
        <ItemAlign>
          <Dropdown
            options={UserActiveStatus}
            onChange={handleFilter}
            placeholder="Status"
            position="left-0"
          />
          <Dropdown
            options={bulkFilter}
            onChange={handleFilter}
            placeholder="Bulk Actions"
            position="left-0"
          />
        </ItemAlign>

        <TableCan
          dataTr={[{
            id: 1,
            activity: 'User Created a Post',
            created_at: Date.now()
          }]}
          headerTr={['activity', 'date']}
          TrName={UserActivityRow}
        />

        {/* {username} */}
        <UserFormModal
          isOpen={isEditModal}
          onClose={() => setisEditModal(false)}
          onSubmit={(values: any) => console.log("Edit User", values)}
          initialData={userData}
        />
      </Horizontal>
    </HeaderWrapper>
  )
}

export default UserProfile