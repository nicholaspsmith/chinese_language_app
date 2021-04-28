import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from "./LoginForm";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json().then(data => {
      setCurrentTime(data.time);
    }))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <LoginForm />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>current time: {currentTime}</p>
        </a>
      </header>
    </div>
  );
}

export default App;
