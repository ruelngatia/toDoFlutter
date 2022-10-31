import React from 'react'
import './items.css'
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";


function priorityColor( value){
  console.log(value);
  switch(value){
    case 'High':
      return {
        'backgroundColor':'red',
        'fontWeight':'600',
        'fontSize':'13px'
      }
    case 'Medium':
      return {
        'backgroundColor':'yellow',
        'fontWeight':'600',
        'fontSize':'13px'
      }
    default:
      return {
        'backgroundColor':'green',
        'fontWeight':'600',
        'fontSize':'13px'
      }
  }
  
}

function Items(prop) {
  return (
    <div className='item'>
        <div className='left'>
            <input type='checkbox'/>
            <span>{prop.taskName}</span>
        </div>
        <div className='right'>
           <span className='Priority' style={priorityColor(prop.priority)}>{prop.priority}</span> 
           <FaTrash className='del' size={12} onClick={()=> {prop.check(prop)}}/>
           <FaPen className='edt' onClick={() => {prop.edit(prop)}} osize={12}/>
        </div>
    </div>
  )
}


export default Items