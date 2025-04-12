import React, { useState } from 'react';
import Modal from '../../../components/Modal';
import Tab from './Tab';
import NotificationForm from './NotificationForm';
import NotificationHistory from './NotificationHistory';
import { type NotificationFormData, type Notification, mockNotifications } from '../../../constants/Data';

const NotificationModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'send' | 'history'>('send');
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  const handleSubmit = (values: NotificationFormData) => {
    const newNotification: Notification = {
      id: Date.now().toString(),
      ...values,
      timestamp: new Date().toLocaleString(),
    };
    console.log('New Notification:', values);
    setNotifications([newNotification, ...notifications]);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-4 space-y-6">
        <div className="flex rounded-lg overflow-hidden w-fit">
          <Tab
            active={activeTab === 'send'}
            onClick={() => setActiveTab('send')}
          >
            Send
          </Tab>
          <Tab
            active={activeTab === 'history'}
            onClick={() => setActiveTab('history')}
          >
            History
          </Tab>
        </div>

        {activeTab === 'send' ? (
          <NotificationForm onSubmit={handleSubmit} />
        ) : (
          <NotificationHistory notifications={notifications} />
        )}
      </div>
    </Modal>
  );
};

export default NotificationModal;