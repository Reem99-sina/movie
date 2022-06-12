import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieTetail() {
  let params = useParams()
  const [date, setDate] = useState("")
  const [product, setProduct] = useState([])
  async function getDetualt() {
    let details = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=b94f5026a279ba91d02a09e19bae6114&language=en-US`)
    console.log(details.data)
    setDate(details.data)
    setProduct(details.data.homepage)
  }
  useEffect(() => getDetualt(), [])
  return (<>
    <div className='my-5 d-flex justify-content-center align-items-center h-100' >
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <img src={`https://image.tmdb.org/t/p/w500/${date.backdrop_path}`} alt="" className='w-100' />
        </div>
        <div className='col-md-6'>
          <h4>{date.original_title}</h4>
          <p className='text-muted'>{date.overview}</p>
          <a href={product} target="_blank">go to link in netflex</a>
          {/* <span>{product.map((product)=>{product.logo_path?<img  className='w-100' src={`https://image.tmdb.org/t/p/w500/${product.logo_path}`}/>:""})}</span> */}
        </div>
      </div></div>
  </>

  )
}
