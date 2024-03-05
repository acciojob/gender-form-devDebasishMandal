
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
const [val,setVal]=useState(0);

function input(){
  let x= document.querySelector('input[name="gender"]:checked').value;
  setVal(x);
  
}

  return (
    <div>
      <h2>Select your gender:</h2>
         <input type="radio" id="r1" name="gender" value="male" onClick={input}/>
         <label for="r1">Male</label>
         <input type="radio" id="r2" name="gender" value="female" onClick={input}/>
         <label for="r2">Female</label>
         
        {
          val==="male"?(
          <div>
          <h2>Select your shirt size:</h2>
      
          <select name="size" id="size">
  <option >select size</option>
  <option value="Small">Small</option>
  <option value="Medium">Medium</option>
  <option value="Large">Large</option>
</select>
          </div>
          ):(<div>
          <h2>Select your dress size:</h2>
          <select name="size" id="size">
  <option >select size</option>
  <option value="2">2</option>
  <option value="4">4</option>
  <option value="6">6</option>
</select>
          </div>)
        }
    </div>
  )
}

export default App
