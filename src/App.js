import './App.css';
import { useState } from 'react';
import ToDoList from './ToDoList';

function App() {

  const [inputList, setInputist] = useState("");
  const [items, setItems] = useState([]);
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputist("");
  }

  const itemEvent = (event) => {
    setInputist(event.target.value);
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id; 
      })
    })
  }

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder='Add a Item' value={inputList} onChange={itemEvent} />
          <button onClick={listOfItems}> + </button>

          <ol>
            <li>{inputList}</li>
            {items.map((itemval, index) => {
              return <ToDoList key={index} id={index} onSelect={deleteItems}
                text={itemval}
              />
            })}


          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
