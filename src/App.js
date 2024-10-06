import React from 'react';
import Chatbot from './Chatbot_comp';
import './index.css'; // Import Tailwind CSS

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <Chatbot />
    </div>
  );
};

export default App;
