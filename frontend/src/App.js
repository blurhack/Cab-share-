import React from 'react';
import RideCreationForm from './components/RideCreationForm';
import RideList from './components/RideList';

function App() {
    return (
        <div>
            <h1>Cab Share System</h1>
            <RideCreationForm />
            <RideList />
        </div>
    );
}

export default App;
