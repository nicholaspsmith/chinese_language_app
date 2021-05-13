import {useState, useEffect} from 'react';
import './App.css';
import LoginForm from "./LoginForm";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/time').then(res => res.json().then(data => {
        setCurrentTime(data.time);
      }))
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{currentTime}</p>
      </header>
      <LoginForm />
    </div>
  );
}

export default App;
