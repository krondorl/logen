import { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import DrawSetTable from './components/DrawSetTable';
import type { DrawSet } from './types/index.ts';
import { STARTING_LIST } from './constants/starting-list';

function App() {
  const [disabled, setDisabled] = useState(false);
  const [draws, setDraws] = useState<DrawSet[]>(STARTING_LIST);
  const websocket = useRef<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const websocketUrl = 'ws://localhost:8080';

  const getDraw = () => {
    if (websocket.current || isConnected) {
      setDisabled(true);
      websocket.current?.send('getDraw');
      setTimeout(() => {
        setDisabled(false);
      }, 350);
    }
  };

  const connectWebSocket = useCallback(() => {
    if (websocket.current || isConnected || isConnecting) {
      // Don't try to connect if already connected,
      // connecting, or if a websocket instance exists
      return;
    }

    setIsConnecting(true);
    setConnectionError(null);

    websocket.current = new WebSocket(websocketUrl);

    websocket.current.onopen = () => {
      console.log('WebSocket connected');
      setIsConnected(true);
      setIsConnecting(false);
      setConnectionError(null);
    };

    websocket.current.onclose = () => {
      console.log('WebSocket disconnected');
      setIsConnected(false);
      setIsConnecting(false);
    };

    websocket.current.onerror = error => {
      console.error('WebSocket error:', error);
      setIsConnected(false);
      setIsConnecting(false);
      setConnectionError('Failed to connect to WebSocket.');
      // Optionally clean up the websocket reference on error
      websocket.current = null;
    };

    websocket.current.onmessage = event => {
      try {
        const parsedDrawSet: DrawSet = JSON.parse(event.data);
        setDraws(prev => [parsedDrawSet, ...prev]);
        console.log('Received draw set:', parsedDrawSet);
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };
  }, [websocketUrl, isConnected, isConnecting]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (
        websocket.current &&
        websocket.current.readyState === WebSocket.OPEN
      ) {
        websocket.current.close();
      }
      websocket.current = null;
    };
  }, []); // Run only on unmount

  return (
    <>
      <main className="container">
        <h1 className="h1">🔢 Logen - lottery generator</h1>
        <div>
          <div className="grid">
            <button
              className="secondary"
              type="button"
              onClick={connectWebSocket}
              disabled={isConnected}>
              🌐 Connect
            </button>
            <button type="button" onClick={getDraw} disabled={disabled}>
              🎲 Generate
            </button>
          </div>
          <div>
            {isConnecting && <p>🔵 Connecting...</p>}
            {isConnected && (
              <p style={{ color: 'green' }}>🟢 Connected to server!</p>
            )}
            {connectionError && (
              <p style={{ color: 'red' }}>🔴 Error: {connectionError}</p>
            )}
          </div>
        </div>
        <p>Click on the button to generate and add new lottery numbers</p>
        <DrawSetTable draws={draws} />
      </main>
    </>
  );
}

export default App;
