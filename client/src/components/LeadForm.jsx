import React, { useState } from 'react';
import axios from 'axios';

const LeadForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', businessType: '', message: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');
    try {
      const BASE_URL = 'https://growly-client.onrender.com';
      const res = await axios.post(`${BASE_URL}/api/form`, form);
      setSuccess(res.data.message);
      setForm({ name: '', email: '', phone: '', businessType: '', message: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Error submitting form');
    }
  };

  return (
    <section id="lead-form" className="py-20 px-4 bg-white dark:bg-gray-800" >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Book a Free Demo</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4">
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="p-3 rounded border" />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="p-3 rounded border" />
        <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required className="p-3 rounded border" />
        <select name="businessType" value={form.businessType} onChange={handleChange} required className="p-3 rounded border">
          <option value="">Select Business Type</option>
          <option value="Freelancer">Freelancer</option>
          <option value="Coach">Coach</option>
          <option value="Small Business Owner">Small Business Owner</option>
          <option value="Ecommerce Seller">Ecommerce Seller</option>
        </select>
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required className="p-3 rounded border" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg">Submit</button>
      </form>
      {success && <p className="text-green-600 text-center mt-4">{success}</p>}
      {error && <p className="text-red-600 text-center mt-4">{error}</p>}
    </section>
  );
};

export default LeadForm;
