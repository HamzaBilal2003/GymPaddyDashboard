import React from 'react'
import Modal from '../../../components/Modal'
import ChatCan from './ChatCan';

interface props {
  ChatId?: number;
  isOpen: boolean;
  onClose: (button: boolean) => void;
}

const ChatModal: React.FC<props> = ({ isOpen, onClose, ChatId }) => {
  console.log(ChatId);
  return (
    <Modal title={`Chat with ${"Howdy"}`} isOpen={isOpen} onClose={() => onClose(false)}>
      <div className='md:col-span-8 max-h-[70vh] overflow-auto'>
        <ChatCan />
      </div>
    </Modal>
  )
}

export default ChatModal