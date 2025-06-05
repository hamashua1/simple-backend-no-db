// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 9001;

app.use(cors()); // Allow all origins for simplicity in development
app.use(express.json());

// Main endpoint returning a simple message
app.get('/api/message', (req, res) => {
    res.json({
        greeting: "Hello from the backend!",
        version: "1.0",
        timestamp: new Date().toISOString()
    });
});

// Root endpoint for basic check
app.get('/', (req, res) => {
    res.send("Backend server is running. Access /api/message for data.");
});

app.listen(port, () => {
    console.log(`Simple Backend running on port: ${port}`);
});
