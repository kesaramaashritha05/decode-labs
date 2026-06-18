// server/controllers/tripController.js
let trips = [];

const createTrip = (req, res) => {
    const { destination, startDate, endDate, budget, passengers } = req.body;

    if (!destination || !startDate || !endDate || !budget || !passengers) {
        return res.status(400).json({ message: "Please provide all trip details" });
    }

    const newTrip = {
        id: trips.length + 1,
        destination,
        startDate,
        endDate,
        budget,
        passengers
    };

    trips.push(newTrip);
    res.status(201).json({ message: "Trip created successfully", trip: newTrip });
};

const getTrips = (req, res) => {
    res.status(200).json(trips);
};

const getTripById = (req, res) => {
    const trip = trips.find(t => t.id === parseInt(req.params.id));
    if (!trip) {
        return res.status(404).json({ message: "Trip not found" });
    }
    res.status(200).json(trip);
};

const updateTrip = (req, res) => {
    const { id } = req.params;
    const { destination, startDate, endDate, budget, passengers } = req.body;

    const tripIndex = trips.findIndex(t => t.id === parseInt(id));
    if (tripIndex === -1) {
        return res.status(404).json({ message: "Trip not found" });
    }

    trips[tripIndex] = {
        ...trips[tripIndex],
        destination: destination || trips[tripIndex].destination,
        startDate: startDate || trips[tripIndex].startDate,
        endDate: endDate || trips[tripIndex].endDate,
        budget: budget || trips[tripIndex].budget,
        passengers: passengers || trips[tripIndex].passengers
    };

    res.status(200).json({ message: "Trip updated successfully", trip: trips[tripIndex] });
};

const deleteTrip = (req, res) => {
    const { id } = req.params;
    const tripIndex = trips.findIndex(t => t.id === parseInt(id));

    if (tripIndex === -1) {
        return res.status(404).json({ message: "Trip not found" });
    }

    trips = trips.filter(t => t.id !== parseInt(id));
    res.status(200).json({ message: "Trip deleted successfully" });
};

module.exports = {
    createTrip,
    getTrips,
    getTripById,
    updateTrip,
    deleteTrip
};
