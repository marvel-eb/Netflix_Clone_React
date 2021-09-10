import React from "react";
import Header from "../Layout/Header";
import Slider from "../Contents/HomeSlider";
import FilmGenre from "../Contents/FilmGenre";
import Footer from "../Layout/Footer";
import Row from "../Contents/row"
import requests from "../Contents/requests"




const Home = (props) => {
  return (
    <>
      <Header {...props} />
      <Slider {...props} />
   
      <Row title="Frankie's Originals"  fetchUrl={requests.fetchNetflixOriginals}
      issmallRow={true}
    />
    <Row title="Trending Now"  fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated"  fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies"  fetchUrl={requests.fetchActionMovies}/>

      <FilmGenre {...props} />
      <Footer {...props} />
    </>
  );
};

export default Home;
