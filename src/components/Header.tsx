import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="Header" style={{ display: 'flex', alignItems: 'center' }}>
      <h1 style={{ marginRight: '10px' }}>My Notes</h1>
      <img
        src="./icons8-google-keep-new-48.png" 
        alt="Custom Icon"
        style={{ width: '40px', height: '40px' }} 
      />
    </header>
  );
};

export default Header;
