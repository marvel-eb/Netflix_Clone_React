import React, { useState, useEffect } from 'react'
import { FaPlay, FaPlus, FaChevronDown, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { movieInstance } from '../../../utilities/axios'



export default function MovieCard({ movie, index, isLargeRow, id }) {
    const [isHovered, setIsHovered] = useState(false);
    const [trailerLink, setTrailerLink] = useState();


    const img_url = "https://image.tmdb.org/t/p/original/";

    const video_url = "https://www.youtube.com/watch?v="







    const ratingToPercentage = (rating) => {
        return (rating * 10).toFixed(0);
    }




    useEffect(() => {
        async function fetchData() {
            const request = await movieInstance.get(`${id}`)
            .then(function (request) {
                        // handle success
                        console.log(request.data.results[0].key);
                        setTrailerLink(request.data.results[0].key);
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                        // console.log('always executed?');
                    });
            
           
        }

        fetchData();
    }, [id]);


    console.log(trailerLink)

 



    return (
        <div
            className="movie-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                key={movie.id}
                src={`${img_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                alt={movie.name}
                loading="lazy"
            />

            {isHovered && (
                <div className="movie-card-pop-up">
                    
                    {trailerLink ? 
                    <iframe autoPlay muted src={`https://www.youtube.com/embed/${trailerLink}?autoplay=1&mute=1&controls=0`}></iframe>
                    :
                    <img
                    key={movie.id}
                    src={`${img_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                    alt={movie.name}
                    loading="lazy"
                />
                    }

                    <div className="itemInfo">
                        <div className="movie-card-buttons-container">
                            <div className="movie-card-buttons-left">
                                <div className="movie-card-button">
                                    <FaPlus className="movie-card-button-icon" />
                                </div>
                                <div className="movie-card-button">
                                    <FaPlay className="movie-card-button-icon" />
                                </div>
                                <div className="movie-card-button">
                                    <FaThumbsUp className="movie-card-button-icon" />
                                </div>
                                <div className="movie-card-button">
                                    <FaThumbsDown className="movie-card-button-icon" />
                                </div>
                            </div>
                            <div className="movie-card-buttons-right">
                                <div className="movie-card-button">
                                    <FaChevronDown className="movie-card-button-icon" />
                                </div>
                            </div>
                        </div>

                        <div className="movie-card-info">

                            <h2 className="movie-title">{movie.title}</h2>
                            <div className="movie-details">
                                <p>1h 17m</p>
                                <p>PG12</p>
                                <p className="match-percentage">
                                    {ratingToPercentage(movie.vote_average)}% Match
                                </p>
                                <p>{movie.genre_ids}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}