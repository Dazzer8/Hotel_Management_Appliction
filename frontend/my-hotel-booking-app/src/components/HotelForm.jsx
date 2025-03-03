// src/components/HotelForm.jsx
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import api from '../api/api';

const HotelForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: '',
    pricePerNight: '',
    amenities: '',
    imageUrl: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const hotelData = {
      ...formData,
      pricePerNight: parseFloat(formData.pricePerNight),
      amenities: formData.amenities.split(',').map((amenity) => amenity.trim()),
    };

    try {
      const response = await api.post('/hotels', hotelData);
      if (response.data) {
        setSuccess('Hotel added successfully!');
        setFormData({
          name: '',
          location: '',
          description: '',
          pricePerNight: '',
          amenities: '',
          imageUrl: '',
        });
        if (onSuccess) onSuccess();
      }
    } catch (err) {
      setError('Failed to add hotel. Please try again.');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="mb-4">Add New Hotel</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Hotel Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="location" className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="description" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="pricePerNight" className="mb-3">
              <Form.Label>Price Per Night</Form.Label>
              <Form.Control
                type="number"
                name="pricePerNight"
                value={formData.pricePerNight}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="amenities" className="mb-3">
              <Form.Label>Amenities (comma-separated)</Form.Label>
              <Form.Control
                type="text"
                name="amenities"
                value={formData.amenities}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="imageUrl" className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Hotel
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default HotelForm;
