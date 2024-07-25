import React from 'react';
import NoteCard from './NoteCard';
import { Note } from '../types';

interface NoteItemProps {
  note: Note;
  onDelete: (id: string) => void;
  onEdit: (note: Note) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onDelete, onEdit }) => {
  return <NoteCard note={note} onDelete={onDelete} onEdit={onEdit} />;
};

export default NoteItem;
