import React, {useState, useEffect} from 'react';
import Filter from './Filter'
import Numbers from './Numbers'

import './App.css';
// item jsx component
function Item({item}) {
  return (
    <div className="item">
      {item.text}
    </div>
  )
}
// item form component
function ItemForm({addItem}) {
  // initialize value as empty string
  const [value, setValue] = useState("");
  // call addItem, pass in value and set value to empty string
  const handleSubmit = e => {
    e.preventDefault();
    addItem(value);
    setValue("");
  }
  // return form and input jsx
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
  const [data, setData] = useState([
    {
      name: "Aiden Oliver",
      skills: "JavaScript, HTML, CSS",
      langs: "English, Portuguese, French",
      projects: "book-app, recipe-app, chatroom"
    },
    {
      name: "Bruce Wayne",
      skills: "Python, Ruby On Rails, Node.js",
      langs: "English, Japanese, Russian",
    }
  ]);



  const addItem = text => {
    const newItems = [...items, {text}];
    setItems(newItems);
  }

  const [word, setWord] = useState("");
  const [persons] = useState([
    {
      name: "Aiden Oliver",
      number: "123-456-9300"
    },
    {
      name: "Bruce Wayne",
      number: "606-354-8671"
    },
    {
      name: "Peter Parker",
      number: "495-839-0192"
    }
  ]);

  const [filterDisplay, setFilterDisplay] = useState([]);

  const handleChange = e => {
    setWord(e);
    let oldList = persons.map(person => {
      return {name: person.name.toLowerCase(), number: person.number};
    });

    if (word !== "") {
      let newList = [];

      newList = oldList.filter(person => person.name.includes(word.toLowerCase()));

      setFilterDisplay(newList);
    } else {
      setFilterDisplay(persons);
    }
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
      <div>
        <Filter value={word} handleChange={e => handleChange(e.target.value)} />
        <Numbers persons={word.length < 1 ? persons : filterDisplay} />
      </div>
    </div>
  );
}

export default App;
