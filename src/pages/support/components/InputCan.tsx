import { Send } from 'lucide-react';
import React, { useState } from 'react';

interface InputCanProps {
  onSendMessage: (message: string) => void;
}

const InputCan: React.FC<InputCanProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-gray-100 p-4 flex items-center rounded-md"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 bg-transparent outline-none placeholder:text-black"
      />
      <button 
        type="submit"
        className="ml-2 p-2 rounded-full hover:bg-gray-200 transition-colors"
      >
        <Send color='black' size={20} />
      </button>
    </form>
  );
};

export default InputCan;