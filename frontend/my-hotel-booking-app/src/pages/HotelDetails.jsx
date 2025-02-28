import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import api from '../api/api';
import BookingForm from '../components/BookingForm';

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await api.get(`/hotels/${id}`);
        setHotel(response.data);
      } catch (error) {
        console.error('Error fetching hotel details:', error);
      }
    };

    fetchHotelDetails();
  }, [id]);

  if (!hotel) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Image src={hotel.imageUrl} alt={hotel.name} fluid />
        </Col>
        <Col md={6}>
          <h2>{hotel.name}</h2>
          <p>{hotel.description}</p>
          <p>
            <strong>Location:</strong> {hotel.location}
          </p>
          <p>
            <strong>Price per night:</strong> ${hotel.pricePerNight}
          </p>
          <Button
            variant="primary"
            onClick={() => setShowBookingForm(!showBookingForm)}
          >
            {showBookingForm ? 'Hide Booking Form' : 'Book Now'}
          </Button>
          {showBookingForm && <BookingForm hotelId={hotel.id} />}
        </Col>
      </Row>
    </Container>
  );
};

export default HotelDetails;
