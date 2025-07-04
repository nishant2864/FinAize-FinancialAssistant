
import React from 'react';
import { User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
        {/* Avatar */}
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          message.isBot 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-600 text-white'
        }`}>
          {message.isBot ? (
            <span className="text-xs font-bold">FB</span>
          ) : (
            <User className="h-4 w-4" />
          )}
        </div>
        
        {/* Message Bubble */}
        <div className={`rounded-lg px-4 py-2 ${
          message.isBot 
            ? 'bg-gray-100 text-gray-900' 
            : 'bg-blue-600 text-white'
        }`}>
          <p className="text-sm">{message.text}</p>
          <p className={`text-xs mt-1 ${
            message.isBot ? 'text-gray-500' : 'text-blue-100'
          }`}>
            {message.timestamp.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
