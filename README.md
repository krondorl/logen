# 🔢 Logen

This full-stack app is a lottery generator using:

- 🟦 TypeScript
- ⚛️ React
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

## Test setup

- Node.js v24.0
- Windows 11
- Windows Terminal

## Docker

To run it from Docker use this command:

```
docker compose up -d
```

## Installation

You need [Node.js 24](https://nodejs.org/en/download) or newer installed on your computer.

```
npm run install-all
```

## Usage

```
npm start
```

## Shared Types

If you make a modification use the copy script for the shared types:

```
npm run copy-types-win
npm run copy-types-mac-linux
```

Use either the `win` or `mac-linux` version of the scripts.

## License

Read the [LICENSE file](LICENSE).

## History

I started the project on 9th May, 2025.
