// server/routes/tripRoutes.js
const express = require('express');
const router = express.Router();
const {
    createTrip,
    getTrips,
    getTripById,
    updateTrip,
    deleteTrip
} = require('../controllers/tripController');

router.post('/trip', createTrip);
router.get('/trips', getTrips);
router.get('/trip/:id', getTripById);
router.put('/trip/:id', updateTrip);
router.delete('/trip/:id', deleteTrip);

module.exports = router;
