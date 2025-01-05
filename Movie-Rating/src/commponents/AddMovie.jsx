import React, { useState } from 'react'
import '../styles/addMovie.css'

export default function AddMovie({createMovie}) {


    const [Name, setName] = useState()
    const [ImgUrl, setImgUrl] = useState()
    const [Descprition, setDescprition] = useState();

  return (
    <div id='AddMoviesPage'>
        <div id='MovieDetails'>
      
      <h1 id='titleCreate'>Add A New Movie!</h1>
      
      <input className='inputsAddMovie' id='movie-name' type="text" placeholder='movie name' onInput={(ev)=>{
        const value = ev.target.value;
        const firstLetter = value.charAt(0).toUpperCase();
        const TheRestOfTheLetters = value.slice(1).toLowerCase();
        setName(firstLetter + TheRestOfTheLetters);        
          }}/>
      
      <input className='inputsAddMovie' id='movie-picture-url' type="text" placeholder='movie picture url' onInput={(ev)=>{
        const value = ev.target.value;
         setImgUrl(value)}}/>
      
      <input className='inputsAddMovie' id='descprition' type="text" placeholder='descprition' onInput={(ev)=>{
        const value = ev.target.value;
        if(value.length <= 200){ 
        setDescprition(value)}
        else{
            alert('Writing the movie description is limited to 200 characters')
        }}}/>
      </div>
      <div id='addition'> 
        <button id='butAddMovie' onClick={()=>{
            createMovie(Name, ImgUrl, Descprition);
        }}>Add Movie!</button>
      </div>
    </div>
  )
}
