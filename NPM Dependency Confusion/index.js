const net = require('net');

const client = new net.Socket();
client.connect(14528, '0.tcp.in.ngrok.io', () => {
  console.log('Connected to server.');
});

client.on('data', (data) => {
  console.log('Received:', data.toString());
});

client.on('close', () => {
  console.log('Connection closed.');
});
