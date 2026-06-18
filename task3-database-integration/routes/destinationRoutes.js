// server/routes/destinationRoutes.js
const express = require('express');
const router = express.Router();
const { getDestinations } = require('../controllers/destinationController');

router.get('/destinations', getDestinations);

module.exports = router;
