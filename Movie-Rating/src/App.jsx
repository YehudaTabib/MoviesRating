import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes , Route,  useNavigate} from 'react-router-dom';
import './styles/app.css'
import './commponents/Header'
import './commponents/AddMovie'
import Header from './commponents/Header';
import mooviesAraay from './moovies'
import AddMovie from './commponents/AddMovie';
import Delete from './commponents/Delete';

export default function App() {
  const [MooviesAraay, setMooviesAraay] = useState(mooviesAraay);
  const [MaxRating, setMaxRating] = useState(null)
  const [topThreeMovies, setTopThreeMovies] = useState([]);
  const [SearchDisplay, setSearchDisplay] = useState(false);
  const nav = useNavigate();

  
  useEffect(()=>{
    let max = 0;
    let findMax;  
    MooviesAraay.forEach((moovie)=>{
      if(moovie.rating > max){
      max = moovie.rating;
      findMax = moovie
    }
    setMaxRating(findMax)
    })},[])

    useEffect(() => {
      const sortedMovies = [...MooviesAraay].sort((a, b) => b.rating - a.rating);
      setTopThreeMovies(sortedMovies.slice(0, 3));
    }, [MooviesAraay]);
     
function ChangeDheDisplayedMovie(moovie){
  setMaxRating(moovie)
}
  
  function AverageCalculationAndRankingNumber (rating,moovie){
    const copyMooviesAraay = structuredClone(MooviesAraay);
    const index = copyMooviesAraay.findIndex(m => m.name === moovie.name);   
    console.log(index);
    
    if (index !== -1) {
      copyMooviesAraay[index].rating += rating;
      copyMooviesAraay[index].NumberOfRatings += 1;
  
      setMooviesAraay(copyMooviesAraay);
  
      const updatedMoovie = copyMooviesAraay[index];
      setMaxRating(updatedMoovie);
    }
    }

    function createMovie(name, imgUrl, descprition){
      if(name && imgUrl && descprition){
      const newMovie = {
        name: name,
        Description: descprition,
        img: imgUrl,
        alt: name,
        rating: 0,
        NumberOfRatings: 1
      }
      const copyMooviesAraay = structuredClone(MooviesAraay)
      copyMooviesAraay.push(newMovie);
      setMooviesAraay(copyMooviesAraay);
      alert('The movie was successfully added!')
    }else{
      alert('Unfortunately the movie was not added. Please check if you made an error in the process of adding it.')
      }
    }

  function ShowingMovieSearch(value){
    setSearchDisplay(value)
  }

  function DeleteMovie(movie){
    const copyMooviesAraay = structuredClone(MooviesAraay);
    const index = copyMooviesAraay.findIndex(movie => movie.name === movie);
    copyMooviesAraay.splice(index,1);
    setMooviesAraay(copyMooviesAraay)
  }

  return (
    
    <div id='main'>
      <div id='static'>
      
        <div id='title'>
          <h1>BEST MOOVIES</h1>
        </div>
      
        <div id='divButtonsNav'>

          <button className='buttonsNav' onClick={()=>{
            ShowingMovieSearch(false)
            nav('/')}}>Home</button>

          <button className='buttonsNav' onClick={()=>{
           nav('/') 
           ShowingMovieSearch(true)
            }}>Search</button>

          <button className='buttonsNav' onClick={()=>{nav('/AddMovie')}}>Create</button>
          <button className='buttonsNav' onClick={()=>{
            nav('/Delete')
          }}>Delete</button>

        </div>
      </div>

        
      <div id='staticMoovies'>  
        {topThreeMovies.map(moovie=>
        <div id='nav'>
          <button className='buttonsMooviesNav' onClick={()=>{ChangeDheDisplayedMovie(moovie)}}><img id='PicturesThreeBestMovies' src={moovie.img} alt={moovie.alt} /><div className='moovieName'>{moovie.name}</div></button>
          </div>
        )}
      </div>

      <Routes>
        <Route path='/' element={<div className='bottomPart'><Header MooviesAraay={MooviesAraay} MaxRating={MaxRating} AverageCalculationAndRankingNumber={AverageCalculationAndRankingNumber} ChangeDheDisplayedMovie={ChangeDheDisplayedMovie} SearchDisplay={SearchDisplay} /></div>}/>
        <Route path='/AddMovie' element={<div className='bottomPart'> <AddMovie createMovie={createMovie}/></div>}/>
        <Route path='Delete' element={<Delete MooviesAraay={MooviesAraay} DeleteMovie={DeleteMovie}/>}/>
      </Routes>

    </div>
  )
}


