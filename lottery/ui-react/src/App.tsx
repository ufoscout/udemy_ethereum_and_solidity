import React from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from "./web3";
import { Lottery__factory } from './generated/abi';

const CONTRACT_ADDRESS = "0x3a70aec91db562eaa73a71055ccaeb90494ca3cb";

function App() {
  web3.listAccounts().then(console.log);
  const lottery = Lottery__factory.connect(CONTRACT_ADDRESS, web3);
  lottery.getPlayers().then(players => console.log(`Found ${players.length} players`));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
