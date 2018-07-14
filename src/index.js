
const fs = require('fs');
const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8686/');

ws.on('open', function open() {
    //ws.send('something');
    console.log('connected');
});
   
ws.on('message', function incoming(data) {
    fs.writeFileSync('test.wav', data);
    console.log('received message');
});
