import React, {useState} from 'react';
import './App.css';

function Item({item}) {
  return (
    <div className="item">
      {item.text}
    </div>
  )
}

const data = [
  {
  name: "Aiden Oliver",
  skills: "JavaScript, HTML, CSS",
  langs: "English, Portuguese, French",
  projects: "book-app, recipe-app, chatroom"
  }
];

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
        <div>
          {data.map((data, index) => (
            <div key={index}>
              <h3>{data.name}</h3>
              <h3>{data.skills}</h3>
              <h3>{data.langs}</h3>
              <h3>{data.projects}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
