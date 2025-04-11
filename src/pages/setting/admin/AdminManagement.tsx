import React, { useState } from 'react'
import Horizontal from '../../../components/alignments/Horizontal'
import StatsCard from '../../../components/StatsCard'
import { adminStatistics, adminUserTableData, adminUserTableHeaders } from '../../../constants/Data'
import Vertical from '../../../components/alignments/Vertical'
import ItemAlign from '../../../components/alignments/ItemAlign'
import Button from '../../../components/Buttons/Button'
import Dropdown from '../../../components/Dropdown'
import { dates } from '../../../constants/FiltersData'
import SearchFilter from '../../../components/SearchFilter'
import TableCan from '../../../components/TableCan'
import AdminRow from './components/AdminRow'
import Modal from '../../../components/Modal'

const AdminManagement: React.FC = () => {
  const [searchText, setSearchText] = useState('')
//   const [selectedDate, setSelectedDate] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [admins, setAdmins] = useState(adminUserTableData)

  const filteredData = admins.filter((user) => {
    const matchSearch = user.fullName.toLowerCase().includes(searchText.toLowerCase())
    return matchSearch
  })

  const handleAddAdmin = (newAdmin: any) => {
    setAdmins([...admins, { ...newAdmin, id: admins.length + 1 }])
    setShowAddModal(false)
  }

  return (
    <Horizontal>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {adminStatistics.map((item, index) => (
          <StatsCard {...item} key={index} />
        ))}
      </div>

      <Vertical>
        <Dropdown
          options={dates}
          onChange={(val) => console.log(val)}
          placeholder="Dates"
          position="left-0"
        />

        <ItemAlign>
          <Button handleFunction={() => setShowAddModal(true)}>
            Add new
          </Button>

          <SearchFilter
            handleFunction={(val) => setSearchText(val)}
          />
        </ItemAlign>
      </Vertical>

      <TableCan
        dataTr={filteredData}
        headerTr={adminUserTableHeaders}
        TrName={AdminRow}
      />

      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Admin"
      >
        <div className="flex flex-col gap-4 p-4">
          <input type="text" placeholder="Full name" className="border p-2 border-gray-200 rounded" />
          <input type="email" placeholder="Email" className="border p-2 border-gray-200 rounded" />
          <select className="border p-2 border-gray-200 rounded">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input type="password" placeholder="Password" className="border p-2 border-gray-200 rounded" />
          <button
            onClick={() => handleAddAdmin({
              fullName: 'New Admin',
              profile_picture: '',
              role: 'Owner',
              status: 'active',
              date: new Date().toLocaleString(),
              email: 'newadmin@example.com',
              gender: 'Male',
              password: '********'
            })}
            className="bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Save
          </button>
        </div>
      </Modal>
    </Horizontal>
  )
}

export default AdminManagement
