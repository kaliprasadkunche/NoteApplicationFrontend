import React, { useState } from 'react';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import Header from './components/Header';
import './styles.css';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <Header />
      <NoteInput onSearch={handleSearch} />
      <NoteList searchQuery={searchQuery} />
    </div>
  );
};

export default App;
