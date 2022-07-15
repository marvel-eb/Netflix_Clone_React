import React from "react";

// === R E S E R V ED ===
// import thumbnail from "../../Assets/images/slider/40X40.gif";
// import Toast from 'react-bootstrap/Toast';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Carousel from 'react-bootstrap/Carousel';

import movieDataRequests from "../utilities/config";
import Main from "../Contents/main";

const CatSlider = (props) => {
    return (
        <>
            <Main
                title="NETFLIX ORIGINALS"
                fetchUrl={movieDataRequests.fetchNetflixOriginals}
                isLargeRow
            />

            <Main
                title="TRENDING NOW"
                fetchUrl={movieDataRequests.fetchTrending}
                isLargeRow
            />
            {/* <Main
                title="TOP RATED"

                fetchUrl={movieDataRequests.fetchTopRated}
                isLargeRow
            />
            <Main
                title="ACTION MOVIES"

                fetchUrl={movieDataRequests.fetchActionMovies}
                isLargeRow
            />
             <Main
                title="COMEDY MOVIES"

                fetchUrl={movieDataRequests.fetchComedyMovies}
                isLargeRow
            />

            <Main
                title="HORROR MOVIES"

                fetchUrl={movieDataRequests.fetchHorrorMovies}
                isLargeRow
            />
            <Main
                title="ROMANCE MOVIES"

                fetchUrl={movieDataRequests.fetchRomanceMovies}
                isLargeRow
            />

            <Main
                title="DOCUMENTARIES"

                fetchUrl={movieDataRequests.fetchDocumentaries}
                isLargeRow
            /> */}
        </>
    );
};

export default CatSlider;
