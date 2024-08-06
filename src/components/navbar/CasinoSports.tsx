import React, { useState } from 'react';

const ToggleButton = () => {
  const [activeTab, setActiveTab] = useState('casino');

  const tabs = [
    { id: 'casino', label: 'Casino' },
    { id: 'sports', label: 'Sports' },
  ];

  return (
    <div className="hidden md:flex p-1 rounded-md bg-gray-800 h-11 ">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`flex-1 rounded-md text-sm ${
            activeTab === tab.id
              ? 'bg-secondary text-white'
              : 'text-gray-300 hover:text-white hover:bg-transparent bg-transparent'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ToggleButton;