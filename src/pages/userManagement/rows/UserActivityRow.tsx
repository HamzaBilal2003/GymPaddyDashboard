import React from 'react';
import {  formatCreatedAt } from '../../../constants/help';

interface BusinessRowProps {
  displayData: {
    id?:number;
    activity:string;
    created_at:string;
  };
}


const UserActivityRow: React.FC<BusinessRowProps> = ({ displayData }) => {

  return (
    <>
      <tr className="hover:bg-gray-100 transition cursor-pointer relative">
        <td className="p-2 py-4 px-4 w-10">
          <input type="checkbox" />
        </td>
        <td className="p-2 py-4">{displayData.activity}</td>
        <td className="p-2 py-4">{formatCreatedAt(displayData.created_at)}</td>
      </tr>
    </>
  );
};

export default UserActivityRow;