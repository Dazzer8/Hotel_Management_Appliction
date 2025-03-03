const express = require('express');
const hotelControllers = require('../controllers/hotelControllers');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('API is running...');
});

// Add a new hotel
router.post('/', async (req, res) => {
  try {
    const newHotel = new Hotel(req.body);
    const savedHotel = await newHotel.save();
    res.status(201).json(savedHotel);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add hotel' });
  }
});


// Update an existing hotel
router.put('/:id', async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update hotel' });
  }
});

// Delete a hotel
router.delete('/:id', async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete hotel' });
  }
});

// Get all hotels
router.get('/', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch hotels' });
  }
});

module.exports = router;
