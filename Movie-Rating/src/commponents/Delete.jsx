import React, { useState } from 'react'
import '../styles/delete.css'

export default function Delete({DeleteMovie}) {
  const [Name, setName] = useState()



  return (
    <div id='MainDelete'>
      <h1 id='titleDelete'>Delete a movie:</h1>
      <input onInput={(ev)=>{
        const value = ev.target.value;
        const firstLetter = value.charAt(0).toUpperCase();
        const TheRestOfTheLetters = value.slice(1).toLowerCase();
        setName(firstLetter + TheRestOfTheLetters);  
      }} id='inputDelete' type="text" placeholder='Movie Name'/>
      <button id='butDelete' onClick={()=>{
        DeleteMovie(Name)
      }}>Delete</button>
    </div>
  )
}
