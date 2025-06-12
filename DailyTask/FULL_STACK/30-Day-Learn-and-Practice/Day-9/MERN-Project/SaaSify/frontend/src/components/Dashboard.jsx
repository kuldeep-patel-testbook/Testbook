import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [form, setForm] = useState({ name: '', price: '', renewalDate: '' });
  const [subscriptions, setSubscriptions] = useState([]);
  const token = localStorage.getItem('token');

  const fetchSubscription = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/subscription', {
        headers: { Authorization: token }
      });
      setSubscriptions(res.data);
    } catch (error) {
      alert('Subscription Fetch Data Failed', error.message);
    }
  };

  const addSubscription = async () => {
    try {
      await axios.post('http://localhost:5000/api/subscription', form, {
        headers: { Authorization: token }
      });
      setForm({ name: '', price: '', renewalDate: '' });
      fetchSubscription();
    } catch (error) {
      alert('Subscription Register Failed', error.message);
    }
  };

  const deleteSubscription = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/subscription/${id}`, {
        headers: { Authorization: token }
      });
    } catch (error) {
      alert('Subscription Delete Data Failed', error.message);
    }
    fetchSubscription();
  };

  useEffect(() => {
    fetchSubscription();
  }, []);


  return (
    <div className='p-6 max-2xl mx-auto'>
      <h2 className='text-2xl font-bold mb-4'>Dashboard</h2>
      <input className='p-2 border w-full mb-2' type="text" placeholder='Name' value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input className='p-2 border w-full mb-2' type="text" placeholder='Price' value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
      <input className='p-2 border w-full mb-2' type="date" value={form.renewalDate} onChange={e => setForm({ ...form, renewalDate: e.target.value })} />
      <button type='submit' className='bg-blue-500 text-white px-4 py-2 mb-4' onClick={addSubscription}>Add Subscription</button>

      <ul>
        {
          subscriptions.map(sub => (
            <li key={sub._id} className='border p-2 flex justify-between mb-2'>
              <div>
                <strong>{sub.name}</strong> - ${sub.price} - {sub.renewalDate.substring(0, 10)}
              </div>
              <button className='bg-red-500 text-white px-2' onClick={() => deleteSubscription(sub._id)}> Delete </button>
            </li>
          ))
        }

      </ul>
    </div>
  )
}

export default Dashboard