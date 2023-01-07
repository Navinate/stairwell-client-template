//import websocket for recieving data
var socket = io();

// "recieve data" is just a name of the subscription
// to recieve data from the backend
socket.on("recieve visual data", (color, b, c) => {
  //put whatever code should run whenever new data is pushed to your visual
});
