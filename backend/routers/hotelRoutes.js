const express = require('express');
const hotelControllers = require('../controllers/hotelControllers');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('API is running...');
});
module.exports = router;
