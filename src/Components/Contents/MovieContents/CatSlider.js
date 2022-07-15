import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import MovieCard from "./MovieCard";
import { baseInstance } from "../../../utilities/axios";

export default function CatSlider({ title, fetchUrl, isLargeRow, id,  props}) {
  const [movies, setMovies] = useState([]);
  const [active, setActive] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const request = await baseInstance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);




  
  return (
    <div className="cat-slider-container container-fluid py-5">
      <h2 className="movie__title text-secondary px-4">{title}</h2>
      <Carousel show={6} infiniteLoop={true} active={active}>
        {movies.map((movie, index) => (
          <MovieCard movie={movie} index={index} isLargeRow={isLargeRow} id={movie.id} props={props} setActive={setActive} />
        ))}
      </Carousel>
    </div>
  );
}
