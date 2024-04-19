import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addtolist, removefromlist, updateCheckbox, handleAllCompleted, handleClearCompleted } from './actions';
import { useState } from 'react';


function App() {
  const [value, setValue]= useState("");
  
  const mystate= useSelector(e=>e.changeTheList);
  const dispatch= useDispatch();
  return (
    <>
    <label>Add item to list</label>
    <input onChange={e=>setValue(e.target.value)}/>
    
    <button onClick={()=>dispatch(addtolist({
      value:value,
      checked:false,
      colorCode:undefined,
      id:Math.random()*100
    }))}>Add to list</button>
    <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start", height:"500px", width:"50vw", background:"grey"}}>
      {
        mystate.map(e=>
          <div>

            <input type='checkbox' checked={e.checked} onChange={()=>dispatch(updateCheckbox(e.id))}/>
            <span>{e.value}</span>
            <select name="colors" id="colors">
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="yellow">yellow</option>
              <option value="green">green</option>
            </select>
            <button onClick={()=>dispatch(removefromlist(e.id))}> Remove</button>
          </div>
        )
      }
    </div>
   <div style={{display:"flex", flexDirection:"row"}}>
    <div style={{display:"flex", flexDirection:"column", alignContent:"center"}}>
      <h3>Actions</h3>
      <button onClick={()=>dispatch(handleAllCompleted())}>Mark all completed</button>
      <button>Cleaer completed</button>
    </div>
    <div style={{display:"flex", flexDirection:"column", alignContent:"center"}}>
      <h3>Remainig todos</h3>
      <div></div>
    </div>
    <div>
      <h3>Filter by status</h3>
    </div>
   </div>
    </>
  );
}

export default App;
