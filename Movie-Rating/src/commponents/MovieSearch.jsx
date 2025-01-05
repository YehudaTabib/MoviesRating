import React, { useState } from 'react'
import '../styles/movieSearch.css'

export default function MovieSearch({MooviesAraay,ChangeDheDisplayedMovie}) {
  
  const [MovieSearch, setMovieSearch] = useState();
  const [MovieFind, setMovieFind] = useState([]);

  function FindingTheDesiredMovie(NameMovie){
    setMovieFind([])
    let length = NameMovie.length;
    let slice;
    let copyMovieFind = []
    const copyMooviesAraay = structuredClone(MooviesAraay)
    copyMooviesAraay.map((moovie)=>{
      slice = moovie.name.slice(0,length);
      if(slice === NameMovie){
        copyMovieFind.push(moovie);
      }})
      setMovieFind(copyMovieFind);
    if(copyMovieFind.length === 0){
      alert('Sorry, the requested movie was not found. try again')
    if(copyMovieFind.length > 1);
      alert('We found more than one result for your search Please select a movie')
    }  
  }
  

  return (
    <div>
    <div id='searchDiv'>
      <h3>Type the movie you are looking for:</h3>
      <input id='inputSearch' type="text" placeholder='The name of the movie' onInput={(ev)=>{
        const value = ev.target.value;
        const firstLetter = value.charAt(0).toUpperCase();
        const TheRestOfTheLetters = value.slice(1).toLowerCase();
        setMovieSearch(firstLetter + TheRestOfTheLetters);
      }}/>
      <button id='buttonSearch' onClick={()=>{FindingTheDesiredMovie(MovieSearch)}}>Search</button>
    </div>
    <div>
      {MovieFind?.map(movie=>
        <div id='allMoovies'>
          <button className='AllMovieButtons' onClick={()=>{ChangeDheDisplayedMovie(movie)}}><img className='PicturesOfAllTheMovies' src={movie.img} alt={movie.alt} /><div className='nameMoovie'>{movie.name}</div></button>
        </div>
      )}
    </div>
    </div>
  )
}
