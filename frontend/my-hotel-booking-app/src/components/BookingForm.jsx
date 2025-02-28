import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import api from '../api/api';

const BookingForm = ({ hotelId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(`/hotels/${hotelId}/book`, formData);
      alert('Booking successful!');
    } catch (error) {
      console.error('Error making booking:', error);
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="checkInDate">
        <Form.Label>Check-In Date</Form.Label>
        <Form.Control
          type="date"
          name="checkInDate"
          value={formData.checkInDate}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="checkOutDate">
        <Form.Label>Check-Out Date</Form.Label>
        <Form.Control
          type="date"
          name="checkOutDate"
          value={formData.checkOutDate}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="guests">
        <Form.Label>Guests</Form.Label>
        <Form.Control
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Book Now
      </Button>
    </Form>
  );
};

export default BookingForm;
