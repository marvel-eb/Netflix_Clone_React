import React from "react";

import FeaturedSlider from "../Contents/FeaturedSlider";
import CatSlider from "../Contents/CatSlider";
import HomeImage from "../../Assets/images/slider/netflix-home-banner-02.jpg";


const Home = (props) => {
  return (
   <div className="home-container">
      <FeaturedSlider  image={HomeImage} />
      <CatSlider />
  </div>
  );
};

export default Home;
