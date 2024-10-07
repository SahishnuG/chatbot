import React, { useState } from 'react';
import chatbotImage from './chatbot-image2.png'; // Path to your chatbot illustration

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, fromUser: true }]);
      // Simulating a response from the chatbot
      setMessages((prev) => [
        ...prev,
        { text: 'Hello! What do you want to know about IEEE?', fromUser: false }
      ]);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl p-6 mx-auto">
      {/* Chatbot Image */}
      <div className="hidden md:block md:w-1/2 p-4">
        <img src={chatbotImage}  alt="Chatbot" className="w-full h-auto " />
      </div>

      {/* Chatbot Interface */}
      <div className="flex-1 flex flex-col bg-white rounded-lg shadow-lg overflow-hidden relative p-4 mt-6">
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`my-2 p-2 rounded-lg ${msg.fromUser ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-black self-start'}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSend} className="flex p-2 border-t">
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit" className="ml-2 p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200">
            Send
          </button>
        </form>
        {/* Optional: Add a footer with club information */}
        {/* <footer className="mt-4 text-center text-xs text-gray-500">
          &copy; 2024 IEEE VIT Pune. All rights reserved.
        </footer> */}
      </div>
    </div>
  );
};

export default Chatbot;
