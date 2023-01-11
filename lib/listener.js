//import websocket for recieving data
var socket = io();

// "server to listener" is just a name of the subscription
// to recieve data from the backend
// color is a hexadecimal color
// a-e are numbers that range from 0 to 100
socket.on("server to listener", (color, a, b, c, d, e) => {
  //put whatever code should run whenever new data is pushed to your visual
});
