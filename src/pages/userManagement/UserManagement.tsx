import React, { useMemo, useState } from "react";
import Horizontal from "../../components/alignments/Horizontal";
import { UserStatics, usersTable, userTableHeaders } from "../../constants/Data";
import StatsCard from "../../components/StatsCard";
import ItemAlign from "../../components/alignments/ItemAlign";
import Dropdown from "../../components/Dropdown";
import { bulkFilter, UserActiveStatus } from "../../constants/FiltersData";
import Vertical from "../../components/alignments/Vertical";
import SearchFilter from "../../components/SearchFilter";
import Button from "../../components/Buttons/Button";
import TableCan from "../../components/TableCan";
import UserRow from "./components/UserRow";
import UserFormModal from "./components/AddUserModal";

const UserManagement: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [modalOpen, setmodalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleBulkAction = (value: string) => {
    console.log("Bulk action:", value);
  };
  const handleOnlineStatus = (value: string) => {
    setStatusFilter(value);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredUsers = useMemo(() => {
    return usersTable.filter((user) => {
      const matchesStatus = statusFilter === "all" || user.status === statusFilter;
      const matchesSearch =
        user.fullName.toLowerCase().includes(searchQuery) ||
        user.username.toLowerCase().includes(searchQuery) ||
        user.email.toLowerCase().includes(searchQuery);
      return matchesStatus && matchesSearch;
    });
  }, [statusFilter, searchQuery]);
  const handleSubmit = (values :any) =>{
    console.log("Form submitted with values:", values);
    setmodalOpen(false);
  }
  return (
    <Horizontal>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {UserStatics.map((item, index) => (
          <StatsCard {...item} key={index} />
        ))}
      </div>

      <Vertical>
        <ItemAlign>
          <Dropdown
            options={UserActiveStatus}
            onChange={handleOnlineStatus}
            placeholder="Status"
            position="left-0"
          />
          <Dropdown
            options={bulkFilter}
            onChange={handleBulkAction}
            placeholder="Bulk Actions"
            position="left-0"
          />
        </ItemAlign>

        <ItemAlign>
          <Button handleFunction={()=> setmodalOpen(true)}>Add New User</Button>
          <SearchFilter handleFunction={handleSearch} />
        </ItemAlign>

      </Vertical>
      <TableCan
        headerTr={userTableHeaders}
        dataTr={filteredUsers}
        TrName={UserRow}
      />
      <UserFormModal onSubmit={handleSubmit} isOpen={modalOpen} onClose={() => setmodalOpen(false)} />
    </Horizontal>
  );
};

export default UserManagement;
