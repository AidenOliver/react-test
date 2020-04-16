import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function Item({item}) {
  return (
    <div className="item">
      {item.text}
    </div>
  )
}

function ItemForm({addItem}) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addItem(value);
    setValue("");
  }
  
  return (
    <div className="item-form">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button onSubmit={handleSubmit}>Submit</button>
          
        </form>
    </div>
  );
}

function App() {
  const [items, setItems] = useState([]);

  const addItem = text => {
    const newItems = [...items, {text}];
    setItems(newItems);
  }

  return (
    <div className="App">
      <div className="item-list">
        {items.map((item) => (
          <Item 
            item={item}
          />
        ))}
        <ItemForm addItem={addItem} />
      </div>
    </div>
  );
}

export default App;
