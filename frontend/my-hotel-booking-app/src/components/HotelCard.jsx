import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={hotel.imageUrl} alt={hotel.name} />
      <Card.Body>
        <Card.Title>{hotel.name}</Card.Title>
        <Card.Text>{hotel.description}</Card.Text>
        <Button as={Link} to={`/hotel/${hotel.id}`} variant="primary">
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default HotelCard;
