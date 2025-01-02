import React, { useState } from 'react';
import { createRide } from '../api/apiService';

function RideCreationForm() {
    const [formData, setFormData] = useState({
        creator: '',
        pickup: '',
        dropoff: '',
        date: '',
        time: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await createRide(formData);
        alert(response.message);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="creator" placeholder="Your Name" onChange={handleChange} />
            <input name="pickup" placeholder="Pickup Location" onChange={handleChange} />
            <input name="dropoff" placeholder="Dropoff Location" onChange={handleChange} />
            <input name="date" type="date" onChange={handleChange} />
            <input name="time" type="time" onChange={handleChange} />
            <input name="phone" placeholder="Phone Number" onChange={handleChange} />
            <button type="submit">Create Ride</button>
        </form>
    );
}

export default RideCreationForm;
