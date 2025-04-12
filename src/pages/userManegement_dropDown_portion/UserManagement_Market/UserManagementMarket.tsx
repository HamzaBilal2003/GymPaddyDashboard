import React, { useMemo, useState } from "react";
import { useramangement_Social_Statics, usersTable, userTableHeaders } from "../../../constants/Data";
import Horizontal from "../../../components/alignments/Horizontal";
import StatsCard from "../../../components/StatsCard";
import Vertical from "../../../components/alignments/Vertical";
import ItemAlign from "../../../components/alignments/ItemAlign";
import Dropdown from "../../../components/Dropdown";
import { bulkFilter, UserActiveStatus } from "../../../constants/FiltersData";
import Button from "../../../components/Buttons/Button";
import SearchFilter from "../../../components/SearchFilter";
import TableCan from "../../../components/TableCan";
import UserRow from "../../userManagement/components/UserRow";
import UserFormModal from "../../userManagement/components/AddUserModal";

const UserManagementMarket: React.FC = () => {
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
  const handleSubmit = (values: any) => {
    console.log("Form submitted with values:", values);
    setmodalOpen(false);
  }
  return (
    <Horizontal>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {
          useramangement_Social_Statics.map((item, index) => (
            <StatsCard {...item} key={index} />
          ))
        }
      </div>
        <h1 className="text-2xl font-medium">Market Users</h1>
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
          <Button handleFunction={() => setmodalOpen(true)}>Add New User</Button>
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

export default UserManagementMarket;
