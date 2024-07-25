import axios from 'axios';

const API_URL = 'https://noteapplication.onrender.com/api/notes';

export const saveNote = async (note: { title: string; content: string }) => {
  try {
    const response = await axios.post(API_URL, note);
    return response.data;
  } catch (error) {
    console.error('Error saving note:', error);
    throw error;
  }
};

export const listNotes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error listing notes:', error);
    throw error;
  }
};

export const deleteNote = async (id: string) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error;
  }
};
