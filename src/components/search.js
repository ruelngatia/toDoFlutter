import React from 'react'
import './search.css'

function Search(prop) {
  return (
    <div className='search'>
        <input type='text' placeholder='Search task' onInput={prop.typing}/>
        <button>Search</button>
    </div>
  )
}

export default Search