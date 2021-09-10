import React from "react";
import FeaturedSlider from "../Contents/FeaturedSlider";
import CatSlider from "../Contents/CatSlider";
import homeImage from "../../Assets/images/slider/netflix-home-banner-02.jpg";



import Footer from "../Layout/Footer";

// Frankies code ==============================================
// import Row from "../Contents/row"
// import FilmGenre from "../Contents/FilmGenre";
// import requests from "../Contents/requests"





const Home = (props) => {
  return (
    <>

    
      <FeaturedSlider image={homeImage} {...props} />
      <CatSlider {...props} />
     

//     Frankies MovieRequest code. =========================================================
//       <Slider {...props} />
   
//       <Row title="Frankie's Originals"  fetchUrl={requests.fetchNetflixOriginals}
//       issmallRow={true}
//     />
//     <Row title="Trending Now"  fetchUrl={requests.fetchTrending}/>
//     <Row title="Top Rated"  fetchUrl={requests.fetchTopRated}/>
//     <Row title="Action Movies"  fetchUrl={requests.fetchActionMovies}/>

//       <FilmGenre {...props} />
//       <Footer {...props} />

    </>
  );
};

export default Home;
