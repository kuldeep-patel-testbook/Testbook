import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Appointments = ({ token }) => {
    const [appointments, setAppointments] = useState([]);
    const [patients, setPatients] = useState([]);
    const [form, setForm] = useState({ patientId: '', date: '', time: '', reason: '' });

    // Fetch patients
    const fetchPatients = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/patients', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setPatients(res.data.patients || res.data); // handle both formats
        } catch (err) {
            console.error('Failed to fetch patients:', err);
        }
    };

    const fetchAppointments = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/appointments', {
                headers: { Authorization: `Bearer ${token}` }
            })
            setAppointments(res.data);
        } catch (error) {
            console.error('Failed to fetch appointments:', error);
        }
        
    };

    useEffect(() => {
        fetchPatients();
        fetchAppointments();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/api/appointments', form, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setForm({ patientId: '', date: '', time: '', reason: '' });
            fetchAppointments();
        } catch (error) {
            console.error('Failed to create appointment:', error);
        }
    }


    return (
        <div className='login-container'>
            <h2>Schedule Appointments</h2>
            <form onSubmit={handleSubmit}>
                <select name="patientId" value={form.patientId} onChange={handleChange} required>
                    <option value="">Select Patient</option>
                    {
                        patients && patients.map((p) => (
                            <option key={p._id} value={p._id}>
                                {p.name}
                            </option>
                        ))
                    }
                </select>
                
                <input type='date' name='date' value={form.date} onChange={handleChange} required />
                <input type='time' name='time' value={form.time} onChange={handleChange} required />
                <input type='text' name='reason' placeholder='Reason' value={form.reason} onChange={handleChange} required />

                <button type='submit'>Book Appointment</button>
            </form>

            <h3>Upcoming Appointments</h3>

            <ul>
                {
                    appointments && appointments.map((a) => {
                        <li key={a._id}>
                            Patient: {a.patient?.name || a.patientId} <br />
                            Date: {a.date} at {a.time}
                            Reason: {a.reason}
                        </li>
                    })
                }

            </ul>
        </div>
    )
}

export default Appointments