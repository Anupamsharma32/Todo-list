import React, { useState } from 'react';
import ToDoList from './ToDoList';
const App = () => {
  const [inputList, setInputList] = useState("buy apple");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  }
  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]   // ... is called spread operator 
    })
    setInputList('');
  }
  const deleteItems = (id) => {
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
             return index!==id;
      })
    })
  }
  return (

    <>

      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder='Add a item' onChange={itemEvent} value={inputList} />
        <button onClick={listOfItem}> + </button>
        <ol>
          {items.map((itemval,index) => {
            return <ToDoList key={index} id ={index} onSelect={deleteItems} text={itemval}/>
          })}
        </ol>
      </div>


    </>

  );
}
export default App;