const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const publicDirectory = __dirname + '/public';

app.use(express.static('public'));

// WebSocket server
wss.on('connection', function connection(ws) {
  console.log('Client connected');

  ws.on('message', function incoming(message) {
    console.log('Received: %s', message);
  });
});

// GET / route
app.get('/', (req, res) => {
  res.sendFile(publicDirectory + '/dashboard.html');
});


// POST /test
app.post('/updatePump', express.json(), (req, res) => {
    console.log("Received POST /updatePump " + req.body);
    // Broadcast the data to all clients
    wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(req.body));
    }
    });
    res.send();
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});
