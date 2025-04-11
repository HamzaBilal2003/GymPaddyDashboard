import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Horizontal from '../../../components/alignments/Horizontal';
import ItemAlign from '../../../components/alignments/ItemAlign';
import Dropdown from '../../../components/Dropdown';
import { bulkFilter, UserActiveStatus } from '../../../constants/FiltersData';
import TableCan from '../../../components/TableCan';
import UserProfileCan from '../../userManagement/components/UserProfileCan';
import UserActivityRow from '../../userManagement/rows/UserActivityRow';
import Modal from '../../../components/Modal';

const AdminProfile: React.FC = () => {
    const [isEditModal, setisEditModal] = useState(false);
    const { username } = useParams();
    console.log(username)
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
            <Modal
                isOpen={isEditModal}
                onClose={() => setisEditModal(false)}
                title="Admin Profile"
            >
                <div className="flex flex-col gap-4 p-4">
                    <label className="flex flex-col items-center justify-center">
                        <img
                            src={userData.profilePicture}
                            alt="Avatar"
                            className="w-24 h-24 rounded-full object-cover"
                        />
                        <input
                            type="file"
                            className="hidden"
                            onChange={(e) => {
                                if (e.target.files?.[0]) {
                                    // handle new image preview if needed
                                }
                            }}
                        />
                    </label>
                    <input type="text" value={userData.fullName} className="border p-2 border-gray-200 rounded" />
                    <input type="email" value={userData.email} className="border p-2 border-gray-200 rounded" />
                    <select value={userData.gender} className="border p-2 border-gray-200 rounded">
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                    <input type="password" value={userData.password} className="border p-2 border-gray-200 rounded" />
                    <button className="bg-red-500 text-white py-2 rounded hover:bg-red-600">
                        Save
                    </button>
                </div>
            </Modal>

        </Horizontal>
    )
}

export default AdminProfile