import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import AddNoteModal from './AddNoteModal';

interface NoteInputProps {
  onSearch: (searchQuery: string) => void;
}

const NoteInput: React.FC<NoteInputProps> = ({ onSearch }) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="NoteInput" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <Button
        className='NoteInput1'
        variant="contained"
        sx={{
          backgroundColor: '#edb92b',
          '&:hover': {
            backgroundColor: '#edb92b',
          },
        }}
        onClick={handleOpen}
        style={{ marginRight: '10px' }}
      >
        Add Note
      </Button>
      <TextField
        label="Search Notes Here"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{
          margin: '0 1px',
          width: '400px',
          borderRadius: '4px',
          '& .MuiInputBase-root': {
            height: '45px',
          },
          '& .MuiInputLabel-root': {
            top: '-5px',
          }
        }}
      />

      <AddNoteModal open={open} onClose={handleClose} />
    </div>
  );
};

export default NoteInput;
