import React, {useState} from 'react'
import './inputForm.css'
import { MdClose } from "react-icons/md";



export default function InputForm(prop) {

  var [value, setValue] = useState('')
  var [PriorityValue, setPriority] = useState('High')

  function addedChars(e){
    setValue(value = e.target.value)
    // console.log(value);
  }

  function getPriority(e){
    setPriority(PriorityValue = e.target.value)
    // console.log(PriorityValue);
  }

  return (
    <div className='inputForm' style={prop.display}>
        <MdClose className='close' size={24} onClick={()=>{prop.hideInput()}}/>
         <h2>{prop.nme}</h2>
         <div>
            {/* <label>Task</label> */}
            <div>Task</div>
            <input type={'text'} onInput={addedChars} />
         </div>
         <br/>
         <div>
            <div>Priority</div>
            <select name='priority' onChange={getPriority} >
                <option value={'High'}>High</option>
                <option value={'Medium'}>Medium</option>
                <option value={'Low'}>Low</option>
            </select>
         </div>
        <br/>
         <button onClick={() => prop.clickerFun(value,PriorityValue,prop)}>Add Task</button>
    </div>
  )

 

}
