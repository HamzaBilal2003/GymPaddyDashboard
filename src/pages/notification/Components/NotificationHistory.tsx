import React from 'react';
import type { Notification } from '../../../constants/Data';

const NotificationHistory: React.FC<{ notifications: Notification[] }> = ({ notifications }) => {
  return (
    <div className="divide-y max-h-[60vh] overflow-y-auto">
      {notifications.map((notification) => (
        <div key={notification.id} className="p-6 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{notification.title}</h3>
            <span className="text-sm text-gray-500">{notification.timestamp}</span>
          </div>
          <p className="text-gray-600">{notification.message}</p>
          <div className="flex gap-4 pt-2">
            <button className="text-green-600 hover:underline cursor-pointer">Resend</button>
            <button className="text-red-600 hover:underline cursor-pointer">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationHistory;