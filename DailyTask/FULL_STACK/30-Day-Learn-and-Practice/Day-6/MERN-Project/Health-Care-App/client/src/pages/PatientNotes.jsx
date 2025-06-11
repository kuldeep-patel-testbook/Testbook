import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PatientNotes = ({ token }) => {
  const { patientId } = useParams();
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState('');

  const fetchNotes = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/notes/${patientId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNotes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/api/notes/${patientId}`, { content }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setContent('');
    fetchNotes(); // refresh notes list
  };

  useEffect(() => {
    fetchNotes();
  }, [patientId]);

  return (
    <div className="login-container">
      <h2>Doctor Notes</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Add a note..."
          required
        />
        <button type="submit">Add Note</button>
      </form>

      <h3>All Notes</h3>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            {note.content} – <small>{new Date(note.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientNotes;
