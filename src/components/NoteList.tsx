import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import NoteCard from './NoteCard';
import AddNoteModal from './AddNoteModal';
import { listNotes, deleteNote } from '../services/noteService';
import { Note } from '../types';

interface NoteListProps {
  searchQuery: string;
}

const NoteList: React.FC<NoteListProps> = ({ searchQuery }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | undefined>(undefined);

  const fetchNotes = async () => {
    try {
      const fetchedNotes = await listNotes();
      setNotes(fetchedNotes);
      setFilteredNotes(fetchedNotes);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteNote(id);
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const handleEdit = (note: Note) => {
    setSelectedNote(note);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedNote(undefined);
    setModalOpen(false);
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredNotes(notes);
    } else {
      setFilteredNotes(notes.filter(note => 
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    }
  }, [searchQuery, notes]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredNotes.map((note) => (
          <NoteCard key={note._id} note={note} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </Masonry>
      <AddNoteModal open={isModalOpen} onClose={handleCloseModal} note={selectedNote} />
    </>
  );
};

export default NoteList;
