const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    destination: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    travelers: { type: Number, required: true },
    budget: { type: Number, required: true },
    status: { type: String, enum: ['Planned', 'Completed', 'Cancelled'], default: 'Planned' }
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema);
