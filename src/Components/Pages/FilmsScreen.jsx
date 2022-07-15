import React from "react";
import FeaturedSlider from "../Contents/FeaturedSlider";
import CatSlider from "../Contents/CatSlider";
import FilmsImage from "../../Assets/images/slider/netflix-films-banner-01.jpg";


const Films = () => {
  return (
   <div className="films-container">
      <FeaturedSlider  image={FilmsImage} />
      <CatSlider  />
  </div>
  );
};

export default Films;
