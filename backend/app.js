const express = require('express');
const cors = require('cors');
const sessionRoutes = require('./routes/sessions');
const rideRoutes = require('./routes/rides');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/sessions', sessionRoutes);
app.use('/api/rides', rideRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
