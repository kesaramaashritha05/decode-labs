const Trip = require('../models/Trip');

const createTrip = async (req, res) => {
    const { userId, destination, startDate, endDate, travelers, budget } = req.body;

    try {
        if (!userId || !destination || !startDate || !endDate || !travelers || !budget) {
            return res.status(400).json({ message: "Please provide all trip details" });
        }

        const newTrip = await Trip.create({
            userId,
            destination,
            startDate,
            endDate,
            travelers,
            budget
        });

        res.status(201).json({ message: "Trip created successfully", trip: newTrip });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTrips = async (req, res) => {
    try {
        const trips = await Trip.find().populate('userId');
        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTripById = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id).populate('userId');
        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }
        res.status(200).json(trip);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTrip = async (req, res) => {
    try {
        const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }
        res.status(200).json({ message: "Trip updated successfully", trip });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTrip = async (req, res) => {
    try {
        const trip = await Trip.findByIdAndDelete(req.params.id);
        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }
        res.status(200).json({ message: "Trip deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createTrip,
    getTrips,
    getTripById,
    updateTrip,
    deleteTrip
};
