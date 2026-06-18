const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination', required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Package', packageSchema);
