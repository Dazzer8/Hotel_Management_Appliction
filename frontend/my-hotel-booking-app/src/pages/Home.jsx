// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { Container, Row, Col } from 'react-bootstrap';
import HotelCard from '../components/HotelCard';

const Home = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await api.get('/hotels');
        setHotels(response.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {hotels.map((hotel) => (
          <Col key={hotel._id} md={4}>
            <HotelCard hotel={hotel} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
