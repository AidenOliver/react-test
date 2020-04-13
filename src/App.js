import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const nameInput = useRef();
  
  function handleFormSubmit(event) {
    event.preventDefault();
    const body = {
      name: nameInput.current.value
    }
  }
  
  return (
    <div className="App">
      <div className="getName">
        <form onSubmit={handleFormSubmit}>
          <input ref={nameInput} type="text" />
          <input type="submit" onSubmit={handleFormSubmit}/>
        </form>
      </div>
    </div>
  );
}

export default App;
