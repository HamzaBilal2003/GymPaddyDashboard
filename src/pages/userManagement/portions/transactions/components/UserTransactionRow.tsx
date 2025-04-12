import React, { useState } from 'react';
import TransactionDetails from './TransactionDetails';
import Button from '../../../../../components/Buttons/Button';

interface TransactionRowProps {
  displayData: {
    id: string;
    amount: string;
    status: 'successfull' | 'failed' | 'pending';
    type: 'topup' | 'withdrawal';
    date: string;
    description?: string;
    accountDetails?: {
      accountName: string;
      accountNumber: string;
      bankName: string;
    };
  };
}

const UserTransactionRow: React.FC<TransactionRowProps> = ({ displayData }) => {
  const [showDetails, setShowDetails] = useState(false);

  const getStatusIcon = () => {
    switch (displayData.status) {
      case 'successfull':
        return <span className="w-4 h-4 bg-green-600 block rounded-sm" />;
      case 'failed':
        return <span className="w-4 h-4 bg-red-600 block rounded-sm" />;
      case 'pending':
        return <span className="w-4 h-4 bg-yellow-400 block rounded-sm" />;
    }
  };

  return (
    <>
      <tr className="hover:bg-gray-100 transition cursor-pointer relative">
        <td className="p-4">
          <input type="checkbox" className="rounded border-gray-300" />
        </td>
        <td className="p-4">{displayData.id}</td>
        <td className="p-4 font-medium">
          <span className={displayData.type === 'withdrawal' ? 'text-red-600' : 'text-green-600'}>
            {displayData.type === 'withdrawal' ? '-' : '+'}
            {displayData.amount}
          </span>
        </td>
        <td className="p-4">{getStatusIcon()}</td>
        <td className="p-4 text-gray-600">{displayData.date}</td>
        <td className="p-4">
          <Button
            handleFunction={() => setShowDetails(true)}
          >
            Details
          </Button>
        </td>
      </tr>

      {showDetails && (
        <TransactionDetails
          transaction={displayData}
          onClose={() => setShowDetails(false)}
        />
      )}
    </>
  );
};

export default UserTransactionRow;