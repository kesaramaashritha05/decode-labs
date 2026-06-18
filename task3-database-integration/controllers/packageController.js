const Package = require('../models/Package');

const getPackages = async (req, res) => {
    try {
        const packages = await Package.find().populate('destinationId');
        res.status(200).json(packages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getPackages };
