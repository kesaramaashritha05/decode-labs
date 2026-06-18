// server/controllers/destinationController.js
const destinations = require('../data/destinations.json');

const getDestinations = (req, res) => {
    res.status(200).json(destinations);
};

module.exports = { getDestinations };
