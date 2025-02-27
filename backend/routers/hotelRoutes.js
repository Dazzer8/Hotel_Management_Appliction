const express = require('express');
const { getHotels } = require('../controllers/hotelController');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('API is running...');
});
module.exports = router;
