# TravelMate Backend API

This is the backend API for the TravelMate application, built with Node.js and Express.js.

## Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Server

To start the server, run:
```bash
npm start
```

The server will be running at `http://localhost:5001`.

> [!NOTE]
> The default port is set to **5001** to avoid conflicts with common macOS background processes (like AirPlay Receiver) that often use port 5000.

## API Endpoints

### Authentication
- `POST /register`: Register a new user.
- `POST /login`: Login an existing user.

### Destinations & Packages
- `GET /destinations`: Get a list of travel destinations.
- `GET /packages`: Get a list of travel packages.

### Trips (CRUD)
- `POST /trip`: Create a new planned trip.
- `GET /trips`: Get all planned trips.
- `GET /trip/:id`: Get details for a specific trip.
- `PUT /trip/:id`: Update an existing trip.
- `DELETE /trip/:id`: Delete a trip.

## Technology Stack
- **Node.js**: Runtime environment.
- **Express.js**: Web framework.
- **CORS**: Cross-Origin Resource Sharing.
