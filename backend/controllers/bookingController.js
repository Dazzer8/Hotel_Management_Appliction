const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const newBooking = await Booking.create(req.body);
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};