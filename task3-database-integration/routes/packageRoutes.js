// server/routes/packageRoutes.js
const express = require('express');
const router = express.Router();
const { getPackages } = require('../controllers/packageController');

router.get('/packages', getPackages);

module.exports = router;
