import React, { useState } from 'react'
import './ReceptionBooking.css';

const ReceptionBooking = () => {
    const [showForm, setShowForm] = useState(false);
    const [bookingList, setBookingList] = useState([]);
    const [appointmentId, setAppointmantId] = useState(0);
    const [appointmentForm, setAppointmentForm] = useState({
        patientName: '',
        doctorName: '',
        appointmentDate: "",
        appointmentTime: ""

    })

    const handleCloseForm = () => {
        setShowForm(false);
    }
    const openBookAppointmentForm = () => {
        setShowForm(true);
    }
    const handleBookFormChange = (e) => {
        e.preventDefault();
        //console.log(e.target.value);

        const {name, value} = e.target;
        //setAppointmentForm({...appointmentForm, [name] : value});

        setAppointmentForm(previousForm => ({
            ...previousForm,
            [name]:value
        }))
        

    }

    const handleBookAppointment = (e) => {
        e.preventDefault();
        console.log(appointmentForm);

        const {patientName, doctorName, appointmentDate, appointmentTime } = appointmentForm;
        if(!patientName || !doctorName || !appointmentDate || !appointmentTime) {
            alert('Fill the details');
        }
        bookAppointment();
    }

    const bookAppointment = (patientName, doctorName, appointmentDate, appointmentTime) => {
        setAppointmantId(prevId=>prevId+1);
        setBookingList(prevAppointment => [
            ...prevAppointment, {id: appointmentId, patientName, doctorName, appointmentDate, appointmentTime}
        ])
        setAppointmentForm({ patientName: '', doctorName: '', appointmentDate: '', appointmentTime: '' });
    }

    console.log("bookingList", bookingList);

    const doctors = [
        { id: 1, name: 'Dr. John Doe', designation: 'Cardiologist', experience: 5, rating: 4.5 },
        { id: 2, name: 'Dr. Jane Smith', designation: 'Neurologist', experience: 10, rating: 4.8 },
        { id: 3, name: 'Dr. Emma Brown', designation: 'Pediatrician', experience: 7, rating: 4.3 },
        { id: 4, name: 'Dr. Michael Johnson', designation: 'Dermatologist', experience: 8, rating: 4.6 },
        { id: 5, name: 'Dr. Sarah Wilson', designation: 'Gynecologist', experience: 12, rating: 4.7 },
        { id: 6, name: 'Dr. David Lee', designation: 'Orthopedic Surgeon', experience: 15, rating: 4.9 },
        { id: 7, name: 'Dr. Laura Martinez', designation: 'Ophthalmologist', experience: 6, rating: 4.4 },
        { id: 8, name: 'Dr. James Anderson', designation: 'General Practitioner', experience: 20, rating: 4.2 },
        { id: 9, name: 'Dr. Karen Taylor', designation: 'Psychiatrist', experience: 9, rating: 4.5 },
        { id: 10, name: 'Dr. Robert Thomas', designation: 'Endocrinologist', experience: 11, rating: 4.7 },
        { id: 11, name: 'Dr. Linda Jackson', designation: 'Oncologist', experience: 13, rating: 4.8 },
    ];

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1>Doctor Appointment Booking System</h1>
                </header>
                <main>
                    <div className="appointment-container">
                        <h2>Manage Appointments</h2>
                        <div className="appointment-actions">
                            <button onClick={openBookAppointmentForm}>Book Appointment</button>
                            <button>Cancel Appointment</button>
                            <button>View Appointment</button>
                            <button>Show All Appointments</button>
                        </div>
                    </div>
                    <div className="doctor-list-container">
                        <h2>Doctors List</h2>
                        <ul className="doctor-list">
                            {/* {doctors.map((doctor, index) => (
                                <li key={index} className="doctor-item">
                                    <span className="doctor-name">{doctor.name}</span>
                                    <span className="doctor-designation">{doctor.designation}</span>
                                </li>
                            ))} */}

                            {
                                doctors.map((doctor) => (
                                    <li key={doctor.id} className='doctor-item'>
                                        <span className='doctor-name'>{doctor.name}</span>
                                        <span className='doctor-designation'>{doctor.designation}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </main>
                {showForm && (
                    <div className="appointment-form-overlay">
                        <div className="appointment-form-container">
                            <h2>Book Appointment</h2>
                            <form onSubmit={handleBookAppointment}>
                                <div className="form-group">
                                    <label htmlFor="patientName">Patient Name:</label>
                                    <input type="text" id="patientName" name="patientName" onChange={handleBookFormChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="doctorName">Doctor Name:</label>
                                    <select name="doctorName" id="doctorName" onChange={handleBookFormChange}>
                                        {
                                            doctors.map((doctor) => (
                                                <option key={doctor.id} value={doctor.name}>
                                                    {doctor.name} - {doctor.designation}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="appointmentDate">Appointment Date:</label>
                                    <input type="date" id="appointmentDate" name="appointmentDate" onChange={handleBookFormChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="appointmentTime">Appointment Time:</label>
                                    <input type="time" id="appointmentTime" name="appointmentTime" onChange={handleBookFormChange} />
                                </div>
                                <div className="form-actions">
                                    <button type="button" onClick={handleCloseForm}>Close</button>
                                    <button>Book</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                
                <div className="doctor-list-container viewappointment">
                    <h2>View Appointment </h2>
                    <ul className="doctor-list">

                        {
                            bookingList.map((appointmentData, key) => (
                                <li key={key} className='doctor-item'>
                                    <span className='patient-name'>{appointmentData.patientName}</span>
                                    <span className='doctor-name'>{appointmentData.doctorName}</span>
                                    <span className='appointment-date'>{appointmentData.appointmentDate}</span>
                                    <span className='appointment-time'>{appointmentData.appointmentTime}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
               
            </div>
        </>
    )
}

export default ReceptionBooking