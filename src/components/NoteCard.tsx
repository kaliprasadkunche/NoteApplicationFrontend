import React from 'react';
import { Card, CardContent, Typography, IconButton, CardActions } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import { Note } from '../types';

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
  onEdit: (note: Note) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete, onEdit }) => {
  return (
    <Card sx={{ borderRadius: '20px', margin: '2px' }} className="NoteCard" variant="outlined">
      <CardContent className="NoteCard-content">
        <Typography sx={{ marginBottom: '15px' }} variant="h5" component="div" className="NoteCard-title">
          {note.title}
        </Typography>
        <Typography variant="body2" className="NoteCard-body" style={{ whiteSpace: 'pre-line' }}>
          {note.content}
        </Typography>
        <Typography variant="caption" className="NoteCard-timestamp">
          {note.timestamp}
        </Typography>
      </CardContent>
      <CardActions className="NoteCard-actions">
        <IconButton onClick={() => onEdit(note)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(note._id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default NoteCard;
