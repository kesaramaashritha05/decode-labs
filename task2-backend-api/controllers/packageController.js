// server/controllers/packageController.js
const packages = require('../data/packages.json');

const getPackages = (req, res) => {
    res.status(200).json(packages);
};

module.exports = { getPackages };
