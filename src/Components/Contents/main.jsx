import React, { useState, useEffect } from "react";
import axios from "../utilities/axios";

// import MovieModal from "./MovieModal";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Main = ({ title, fetchUrl, isLargeRow, id }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [movieSelected, setMovieSelection] = useState({});

  //A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    //if [], run once when the row loads, and dont run again

    async function fetchData() {
      // WAIT UNTILL WE GET RESPONSE FROM API
      const request = await axios.get(fetchUrl);
      // GET REQUEST & FETCH = "https://api.themoviedb.org/3/fetchUrl"
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    setModalVisibility(true);
    setMovieSelection(movie);
  };
  return (
    <div className="container-fluid bg-dark py-5">
      <section className="row">
        <h2 className="movie__title text-secondary px-4">{title}</h2>
        <div class="cat-slider">
          <div className="cat-slider__arrow-left">
            <span
              className="arrow"
              onClick={() => {
                document.getElementById(id).scrollLeft -=
                  window.innerWidth - 80;
              }}
            >
              <FaArrowLeft />
            </span>
          </div>
          <div id={id} className="movie__posters">
            {/**Maping movie Thumbnails */}
            {movies.map((movie) => (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`movie__poster ${isLargeRow && "movie__poster_lg"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                loading="lazy"
                alt={movie.name}
              />
            ))}
          </div>
          <div className="cat-slider__arrow-right">
            <span
              className="arrow"
              onClick={() => {
                document.getElementById(id).scrollLeft +=
                  window.innerWidth - 80;
              }}
            >
              <FaArrowRight />
            </span>
          </div>
        </div>
        {/* {modalVisibility && (
        <MovieModal
          {...movieSelected}
          setModalVisibility={setModalVisibility}
        />
      )} */}{" "}
      </section>
    </div>
  );
};

export default Main;
