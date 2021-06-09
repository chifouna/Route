import React, { useState,useEffect } from 'react'
import Head from './component/Header'
import List from './component/MovieList'
import Add from './component/Modal'
import { data } from './component/data'
import Moviecard from './component/Moviecard'
import { Button } from 'react-bootstrap'

const App = () => {

  const [input, setInput] = useState('')
  const [titre, setTitre] = useState('')
  const [image, setImage] = useState('')
  const [desc, setDesc] = useState('')
  const [rating, setRating] = useState('')

  const [rateFilter,setRateFilter]=useState('')
  const [starValue,setStarValue]=useState('')
  const [movies, setMovies] = useState(data)
  /*  const rate = (x) => {
   setMovies.filter((el)=>el.rating== x)}; */


  const addItems = (e) => {

    e.preventDefault()

    let newMovie={
      titre,
      image,
      desc,
      rating
    }
    setMovies([...movies,newMovie])
  } 



  useEffect(() => {
    console.log('fares')
    movies.map((movie, index) => (
        <Moviecard movie={movie} />

    ))
    console.log('larouchi')
},[movies])
 




  return (
    <div>
      <Head setinput={setInput}  ></Head>
      <Add setTitre={setTitre} setImage={setImage}
        setDesc={setDesc} setRating={setRating} addItems={addItems} setRateFilter={setRateFilter} movies={movies} setMovies={setMovies}></Add>

      <List data={data} movies={movies}  input={input} rateFilter={rateFilter}></List>
    </div>
  )
}

export default App


