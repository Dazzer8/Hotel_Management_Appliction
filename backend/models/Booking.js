const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
    checkIn: Date,
    checkOut: Date,
    guests: Number
});

module.exports = mongoose.model('Booking', BookingSchema);
