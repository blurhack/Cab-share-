const express = require('express');
const Ride = require('../models/ride');
const router = express.Router();

const activeRides = new Map();

router.post('/create', (req, res) => {
    const { creator, pickup, dropoff, date, time, phone } = req.body;
    const rideId = Date.now().toString();
    const newRide = new Ride(creator, pickup, dropoff, date, time, phone);
    activeRides.set(rideId, newRide);
    res.status(201).json({ message: 'Ride created successfully', rideId });
});

router.get('/match', (req, res) => {
    const { pickup, dropoff, date, time } = req.query;
    const matches = [];
    const userDateTime = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm');

    activeRides.forEach((ride) => {
        if (ride.pickup === pickup && ride.dropoff === dropoff && ride.canJoin(userDateTime)) {
            matches.push(ride);
        }
    });

    res.json(matches);
});

module.exports = router;
