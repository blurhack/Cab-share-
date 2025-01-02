const BASE_URL = 'http://localhost:5000/api';

export const createRide = async (rideData) => {
    const response = await fetch(`${BASE_URL}/rides/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rideData),
    });
    return response.json();
};

export const getMatchingRides = async (queryParams) => {
    const query = new URLSearchParams(queryParams).toString();
    const response = await fetch(`${BASE_URL}/rides/match?${query}`);
    return response.json();
};
