import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Home() {

    const [trendingMovies, setTrendingMovies] = useState([])
    const [trendingTv, setTrendingTv] = useState([])
    const [trendingpeoople, setTrendingPeople] = useState([])
    async function getTrending(mediatype, call) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediatype}/week?api_key=b94f5026a279ba91d02a09e19bae6114`)
        call(data.results)
    }
    useEffect(() => {
        getTrending('movie', setTrendingMovies)
        getTrending('tv', setTrendingTv)
        getTrending('person', setTrendingPeople)

    }, [])
    return (<><div className='row my-5 '>
        <div className='col-md-4'>
            <div className='brbr w-25 my-3'></div>
            <h2>Trending movies</h2>
            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cupiditate consectetur, iure expedita magnam rerum omnis alias. Voluptatem, sit, nesciunt at accusantium itaque, cum expedita natus rem ab modi totam?</p>
            <div className='brbr'></div>
        
        </div>
        {
            trendingMovies.map((movie) => 
                <div className='col-md-2 '>
                    <Link to={`/movietetail/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="w-100" alt="" />
                        <h6>{movie.title}</h6></Link>
                </div>)
        }
    </div>
        <div className='row my-5 align-items-stretch'>
            <div className='col-md-4'>
                <h2>Trending movies</h2>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cupiditate consectetur, iure expedita magnam rerum omnis alias. Voluptatem, sit, nesciunt at accusantium itaque, cum expedita natus rem ab modi totam?</p>
            </div>
            {
                trendingTv.map((tv) => <div className='col-md-2'>
                    <div className='tv'>
                        <img src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}className="w-100" alt="" />
                        <h6>{tv.name}</h6>

                    </div>
                </div>)
            }
        </div>
        <div className='row my-5 '>
            <div className='col-md-4'>
                <h2>Trending movies</h2>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cupiditate consectetur, iure expedita magnam rerum omnis alias. Voluptatem, sit, nesciunt at accusantium itaque, cum expedita natus rem ab modi totam?</p>
            </div>
            {
                trendingpeoople.map((person) => <div className='col-md-2'>
                   
                        <img src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}className="w-100" alt="" />
                        <h6>{person.name}</h6>

                
                </div>)
            }
        </div>
        </>

    )
}
