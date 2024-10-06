import React, { useState } from 'react';

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
        { text: 'Hello! what do wnat to know about IEEE?', fromUser: false }
      ]);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md p-4 mx-auto bg-white rounded-lg shadow-lg">
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 p-2 rounded-lg ${
              msg.fromUser ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-black self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="flex mt-4">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit" className="ml-2 p-2 text-white bg-blue-500 rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
