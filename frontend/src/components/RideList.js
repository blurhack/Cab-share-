import React, { useState, useEffect } from 'react';
import { getMatchingRides } from '../api/apiService';

function RideList() {
    const [rides, setRides] = useState([]);

    useEffect(() => {
        async function fetchRides() {
            const response = await getMatchingRides({ pickup: 'City', dropoff: 'MIT Campus', date: '2025-01-02', time: '10:00' });
            setRides(response);
        }
        fetchRides();
    }, []);

    return (
        <ul>
            {rides.map((ride, index) => (
                <li key={index}>
                    {ride.creator} | {ride.pickup} -> {ride.dropoff}
                </li>
            ))}
        </ul>
    );
}

export default RideList;
