import { generateDrawSet } from './generator.ts';
import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

console.log();
console.log('🌐 Logen server started...');
console.log('backend using WebSocket');
console.log();

wss.on('connection', function connection(ws: WebSocket) {
  console.log('A client has connected to server.');

  ws.on('error', console.error);

  ws.on('message', function message(data: WebSocket.RawData) {
    if (data instanceof Buffer) {
      const dataString = data.toString('utf-8');
      console.log('received: ', dataString);
      if (dataString === 'getDraw') {
        console.log('sending draw set data...');
        ws.send(JSON.stringify(generateDrawSet()));
      }
    }
  });
});
