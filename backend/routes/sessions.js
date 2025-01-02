const express = require('express');
const UserSession = require('../models/userSession');
const router = express.Router();

const userSessions = new Map();

router.post('/start', (req, res) => {
    const { userNumber } = req.body;
    if (!userSessions.has(userNumber)) {
        userSessions.set(userNumber, new UserSession());
    }
    res.json({ message: 'Session started', state: userSessions.get(userNumber).state });
});

module.exports = router;
