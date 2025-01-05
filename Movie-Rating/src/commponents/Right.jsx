import React from 'react'

export default function Right({MooviesAraay, ChangeDheDisplayedMovie}) {

  return (
    <div>
        <h4>Available for viewing:</h4>
        { MooviesAraay?.map(moovie=>
        <div id='allMoovies'>
          <button className='AllMovieButtons' onClick={()=>{ChangeDheDisplayedMovie(moovie)}}><img className='PicturesOfAllTheMovies' src={moovie.img} alt={moovie.alt} /><div className='nameMoovie'>{moovie.name}</div></button>
          </div>
        )}
    </div>
  )
}
