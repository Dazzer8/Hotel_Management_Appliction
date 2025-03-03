// src/pages/AddHotel.jsx
import React from 'react';
import HotelForm from '../components/HotelForm';

const AddHotel = () => {
  const handleSuccess = () => {
    // Implement any additional logic after successfully adding a hotel
  };

  return (
    <div>
      <HotelForm onSuccess={handleSuccess} />
    </div>
  );
};

export default AddHotel;
