import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');

  
  
  return (
    <div className="App">
      <div className="getName">
        <input />
        <button onSubmit={() => setName(name)}>Submit</button>
        <p>Hello {name}</p>
      </div>
    </div>
  );
}

export default App;
