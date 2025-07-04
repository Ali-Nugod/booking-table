
import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({ name: "", date: "", time: "", guests: 1 });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation submitted!\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold mb-4">Book a Table</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-md mx-auto">
        <input name="name" placeholder="Your Name" className="border p-2 rounded" onChange={handleChange} required />
        <input type="date" name="date" className="border p-2 rounded" onChange={handleChange} required />
        <input type="time" name="time" className="border p-2 rounded" onChange={handleChange} required />
        <input type="number" name="guests" min="1" className="border p-2 rounded" onChange={handleChange} required />
        <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Reserve</button>
      </form>
    </section>
  );
}

export default BookingForm;
