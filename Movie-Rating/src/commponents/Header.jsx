import React, { useState } from 'react'
import '../styles/header.css'
import MovieSearch from './MovieSearch'
import Right from './Right'

export default function Header({MooviesAraay,MaxRating,AverageCalculationAndRankingNumber,ChangeDheDisplayedMovie, SearchDisplay,}) {
 

  MooviesAraay.sort((a, b) => a.name.localeCompare(b.name))
  
    return (
    <div id='home'>
        

      <div id='left'>
        <div>
      <h1 id='titlemoovie'>The name of the movie : {MaxRating ? MaxRating.name : 'Loading...'}</h1>
      {MaxRating ? <img id='TheHighestFilmImage' src={MaxRating.img} alt={MaxRating.alt} /> : 'Loading...'}
      <h3 id='DescriptionBottom'>{MaxRating ? MaxRating.Description : 'Loading...'}</h3>
        </div>
        <div id='GivingARating'>
           <p id='Average'>Average rating:{MaxRating ? MaxRating.rating / MaxRating.NumberOfRatings : 'Loading...'} </p>
          <button className='RatingButtons' onClick={()=>{AverageCalculationAndRankingNumber(1,MaxRating)}}>1</button>
          <button className='RatingButtons' onClick={()=>{AverageCalculationAndRankingNumber(2,MaxRating)}}>2</button>
          <button className='RatingButtons' onClick={()=>{AverageCalculationAndRankingNumber(3,MaxRating)}}>3</button>
          <button className='RatingButtons' onClick={()=>{AverageCalculationAndRankingNumber(4,MaxRating)}}>4</button>
          <button className='RatingButtons' onClick={()=>{AverageCalculationAndRankingNumber(5,MaxRating)}}>5</button>
        </div>
      </div>

      <div id='right'>
        {SearchDisplay ? <MovieSearch MooviesAraay={MooviesAraay} ChangeDheDisplayedMovie={ChangeDheDisplayedMovie}/> : <Right ChangeDheDisplayedMovie={ChangeDheDisplayedMovie} MooviesAraay={MooviesAraay}/>}
      </div>

      
    </div>
  )
}
