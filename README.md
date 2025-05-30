# 🔢 Logen

This full-stack app is a lottery generator using:

- 🟦 TypeScript
- ⚛️ React
- ⚡ Vite
- 🎨 Pico CSS
- 🟢 Node.js
- 🔗 WebSocket
- 🐳 Docker
- ⚙️ Nginx

## ⚠️ Disclaimer

This is a demo application and is not intended for production use.

Features may change or be incomplete. Use at your own discretion.

## Features

- 🌐 Client-server architecture
- 📄 Shared types with copy scripts
- 👤 One player per server
- 🎲 Generate button can generate 5 sets of drawn numbers
- ⏱️ Debounce time for Generate button

## Screenshot

![Logen app screen](docs/logen-screenshot.png 'Logen app screen')

## Test setup

- 🟢 Node.js v24.0
- ⚙️ Windows 11
- 💻 Windows Terminal

## Run from Docker

Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) or [Rancher Desktop](https://rancherdesktop.io/).

1. Use this command: `docker compose up`
1. Open browser at: `http://localhost:3050/`

## Run from Node.js

You need [Node.js 24](https://nodejs.org/en/download) or newer installed on your computer.

1. Run: `npm run install-all`
1. Execute: `npm start`
1. Open browser at: `http://localhost:5173/`

## Shared Types

If you make a modification use the copy script for the shared types:

```
npm run copy-types-win
npm run copy-types-mac-linux
```

Use either the `win` or `mac-linux` version of the scripts.

## Data

The server generates data for each request. The data is similar to this object:

```
  {
    date: '5/13/2025, 2:31:22 PM',
    draws: [
      [1, 4, 5, 6, 10],
      [3, 9, 25, 56, 90],
      [1, 11, 22, 33, 78],
      [2, 55, 66, 87, 90],
      [4, 44, 55, 66, 88],
    ],
  },
```

## License

Read the [LICENSE file](LICENSE).

## Links

- [Wikipedia WebSocket](https://en.wikipedia.org/wiki/WebSocket)
- [MDN Websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
- [Node.js WebSocket client](https://nodejs.org/en/learn/getting-started/websocket)
- [ws - WebSocket server](https://github.com/websockets/ws)

## History

I started the project on 9th May, 2025.
