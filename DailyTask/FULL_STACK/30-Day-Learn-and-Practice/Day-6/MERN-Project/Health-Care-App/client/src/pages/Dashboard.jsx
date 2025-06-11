import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = ({ token }) => {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({ name: '', age: '', disease: '', contact: '' });

  const fetchPatients = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/patients', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPatients(res.data.patients);
    } catch (error) {
      console.error("Error fetching patients:", error);
      alert("Failed to load patients");
    }
  };

  useEffect(() => {
    if (token) {
      fetchPatients();
    }
  }, [token]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/patients', form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setForm({ name: '', age: '', disease: '', contact: '' });
      fetchPatients(); // Refresh after adding
    } catch (error) {
      console.error("Error adding patient:", error);
      alert("Failed to add patient");
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Patient Name" value={form.name} onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} required />
        <input name="disease" placeholder="Disease" value={form.disease} onChange={handleChange} required />
        <input name="contact" placeholder="Contact" value={form.contact} onChange={handleChange} required />
        <button type="submit">Add Patient</button>
      </form>

      <h3>All Patients</h3>
      <ul>
        {patients.length > 0 ? (
          patients.map((p) => (
            <li key={p._id}>
              {p.name} – {p.disease} – Age: {p.age} – Patient: <Link to={`/patients/${p._id}/notes`}>Notes</Link>
            </li>
          ))
        ) : (
          <li>No patients found</li>
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
