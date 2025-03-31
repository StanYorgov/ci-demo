import React from 'react';
import MessageDisplay from './components/MessageDisplay';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MessageDisplay />
      </header>
    </div>
  );
};

export default App;
