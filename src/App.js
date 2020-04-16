import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function Item({item, index}) {
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
    <div className="App">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          
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
        {items.map((item, index) => (
          <Item 
            key={index}
            index={index}
            item={item}
          />
        ))}
        <ItemForm addItem={addItem} />
      </div>
    </div>
  );
}

export default App;
