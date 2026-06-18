// server/app.js
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const destinationRoutes = require('./routes/destinationRoutes');
const packageRoutes = require('./routes/packageRoutes');
const tripRoutes = require('./routes/tripRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', authRoutes);
app.use('/', destinationRoutes);
app.use('/', packageRoutes);
app.use('/', tripRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
