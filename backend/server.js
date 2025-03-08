const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

const hotelRoutes = require('./routers/hotelRoutes');
const bookingRoutes = require('./routers/bookingRoutes');
const authRoutes = require('./routers/authRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000/register' }));
app.use(cookieParser());
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/bookings', bookingRoutes);


// Test route
app.get('/test', (req, res) => {
    res.send('Test route is working!');
  });

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
