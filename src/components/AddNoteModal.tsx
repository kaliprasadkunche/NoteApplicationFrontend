import React, { useState, useEffect } from 'react';
import { Modal, Button, TextField, Box } from '@mui/material';
import { saveNote } from '../services/noteService';
import { Note } from '../types';

interface AddNoteModalProps {
  open: boolean;
  onClose: () => void;
  note?: Note; // Change here to accept undefined
}

const AddNoteModal: React.FC<AddNoteModalProps> = ({ open, onClose, note }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [note]);

  const handleSave = async () => {
    try {
      const newNote = { ...note, title, content };
      await saveNote(newNote);
      onClose();
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="AddNoteModal">
        <h2>{note ? 'Edit Note' : 'Add Note'}</h2>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ marginBottom: '15px' }}
        />
        <TextField
          label="Content"
          multiline
          rows={4}
          fullWidth
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="AddNoteModal-actions">
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default AddNoteModal;
