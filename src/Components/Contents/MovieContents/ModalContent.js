import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ModalFilmCard from './ModalFilmCard';
import Modal from './ModalContainer'
import { FaChevronDown, FaChevronUp, FaVolumeMute, FaRegThumbsDown, FaRegThumbsUp, FaPlus, FaPlay } from "react-icons/fa";
import { baseInstance } from '../../../utilities/axios';

export default function ModalContent(props) {
    const [toggleExpanded, setToggleExpanded] = useState(false);
    const [mainTrailerLink, setMainTrailerLink] = useState();
    const [mainTrailerHeight, setMainTrailerHeight] = useState();
    const [trailerLinks, setTrailerLinks] = useState();
    const [filmGenres, setfilmGenres] = useState([]);
    const [tmdbGenres, setTmdbGenres] = useState([]);
    const [realGenres, setRealGenres] = useState([]);
    const [similarContent, setSimilarContent] = useState();
    const [cast, setCast] = useState([]);
    const [director, setDirector] = useState("-");
    const [runtime, setRuntime] = useState(null);
    const [theID, setTheID] = useState();

    const movie = props.location.movie;
    let element = document.getElementsByClassName("meer-zoals-dit-container");
    let params = new URLSearchParams(props.location.search);

    // console.log(props.location.search)
    // console.log(movie)
    // console.log(props.location.pathname)
    // console.log(props.history)
    // console.log(props)
    // console.log(movie)
    if (movie !== undefined || null) {
        console.log(params.get(`id=${movie.id}`))
    } else {
        // return null
    }


    if (movie !== undefined) {
        if (theID === undefined || theID !== movie.id) {
            setTheID(movie.id);
            setfilmGenres(movie.genre_ids);
        }
    }

    useEffect(() => {
        if (movie !== undefined) {
            const axios = require('axios');

            // Get link to trailer to auto play
            axios.get(`https://api.themoviedb.org/3/movie/${movie?.id}/videos?api_key=${process.env.REACT_APP_NETFLIX_CLONE_API_KEY}&language=en-US`)
                .then(function (response) {
                    // handle success
                    setMainTrailerLink(response.data.results[0].key);
                    response.data.results[0].size < 721 ? setMainTrailerHeight(response.data.results[0].size) : setMainTrailerHeight(720);
                    let tempArray = [];
                    response.data.results.forEach(element => {
                        tempArray.push({
                            key: element.key,
                            type: element.type
                        });
                    });
                    setTrailerLinks(tempArray);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });

            // Get list of genres
            axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_NETFLIX_CLONE_API_KEY}`)
                .then(function (response) {
                    // handle success
                    setTmdbGenres(response.data.genres);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });

            // Get names of the cast
            axios.get(`https://api.themoviedb.org/3/movie/${movie?.id}/credits?api_key=${process.env.REACT_APP_NETFLIX_CLONE_API_KEY}&language=en-US`)
                .then(function (response) {
                    // handle success
                    setCast(response.data.cast);

                    for (let index = 0; index < response.data.crew.length; index++) {
                        const element = response.data.crew[index];
                        if (element.job === "Director") {
                            setDirector(element.name);
                        }
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });

            // Get runtime
            axios.get(`https://api.themoviedb.org/3/movie/${movie?.id}?api_key=${process.env.REACT_APP_NETFLIX_CLONE_API_KEY}&language=en-US`)
                .then(function (response) {
                    // handle success
                    setRuntime(response.data.runtime);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });

            // Get similar movies
            axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=${process.env.REACT_APP_NETFLIX_CLONE_API_KEY}&language=en-US&page=1`)
                .then(function (response) {
                    console.log(response.data);
                    setSimilarContent(response.data.results);
                })
                .catch(function (error) {

                })
                .then(function () {

                });

        }

        return () => {

        }
    }, [theID])

    useEffect(() => {
        if (filmGenres.length !== 0) {
            console.log("er zijn genres!");
            console.log(filmGenres);

            // setRealGenres(ConvertNumberArrayToGenreArray());
            let tempArray = ConvertNumberArrayToGenreArray();
            const axios = require('axios');

            tempArray.forEach(element => {
                axios.get(`https://immense-garden-85870.herokuapp.com/api/v1/discovery/desc/true/1/2021/${element}`)
                    .then(function (response) {
                        // handle success
                        console.log(response.data.results[0]);
                        console.log(response.data.results[1]);
                        console.log(response.data.results[2]);
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    });
            });



            async function fetchData(slug) {
                // const request = await baseInstance.get(`/discovery/esc/true/1/2021/${slug}`);
                // setMovies(request.data.results);
                // return request;
            }

            // fetchData(genresArray[0]);
            // console.log(relatedContent);

        }
        return () => {
            //clean up
        }
    }, [filmGenres])

    // useEffect(() => {
    //     console.log("Real genres heeft: "+realGenres?.length);
    //     if(realGenres?.length !== 0){
    //         console.log("er is related content gevonden");
    //         console.log(relatedContent);
    //     }
    //     return () => {
    //         // cleanup
    //     }
    // }, [realGenres])


    const ratingToPercentage = (rating) => {
        return (rating * 10).toFixed(0);
    }


    function ShowCast(all) {

        if (all) {
            let tempArray = [];

            for (let i = 0; i < cast.length; i++) {
                const element = cast[i];
                if (i === cast.length - 1) {
                    tempArray.push(element.name);
                } else {
                    tempArray.push(element.name + ", ");
                }
            }
            let stringOfCast = tempArray.join("");
            return stringOfCast;
        }
        else {
            if (cast.length > 3) {
                return <>
                    <span>{cast[0].name + ", "}</span>
                    <span>{cast[1].name + ", "}</span>
                    <span>{cast[2].name + ", "}</span>
                    <span className="font-italic">more</span>
                </>
            } else {

                let tempArray = [];

                for (let i = 0; i < cast.length; i++) {
                    const element = cast[i];
                    if (i === cast.length - 1) {
                        tempArray.push(element.name);
                    } else {
                        tempArray.push(element.name + ", ");
                    }
                }

                return tempArray.forEach(element => {
                    <span>{element}</span>
                });
            }
        }
    }

    function ShowGenres() {
        let tempArray = [];
        for (let i = 0; i < filmGenres.length; i++) {
            const element = filmGenres[i];

            for (let j = 0; j < tmdbGenres.length; j++) {
                const tmdbElement = tmdbGenres[j];
                if (element === tmdbElement.id) {
                    if (i === filmGenres.length - 1) {
                        tempArray.push(tmdbElement.name);
                    } else {
                        tempArray.push(tmdbElement.name + ", ");
                    }
                }
            }
        }

        return tempArray.map(element => {
            return <span>{element}</span>
        });
    }

    function ConvertNumberArrayToGenreArray() {
        let tempArray = [];
        for (let i = 0; i < filmGenres.length; i++) {
            const element = filmGenres[i];

            for (let j = 0; j < tmdbGenres.length; j++) {
                const tmdbElement = tmdbGenres[j];
                if (element === tmdbElement.id) {
                    tempArray.push(tmdbElement.name);
                }
            }
        }

        return tempArray;
    }

    function GetRuntime() {
        let hours = Math.floor(runtime / 60);
        let minutes = runtime % 60;

        if (hours === 0) {
            return <>
                <span>{minutes + "m"}</span>
            </>
        } else {
            return <>
                <span>{hours + " u " + minutes + "m"}</span>
            </>
        }
    }





    // console.log(params.get(`id=${movie.id}`))

    function toggleButton() {
        if (toggleExpanded) {
            element[0].style.height = "400px";
            element[0].style.marginBottom = "0px";
        }
        else {
            element[0].style.height = "auto";
            element[0].style.marginBottom = "100px";
        }
        setToggleExpanded(!toggleExpanded);
    };

    return (

        // In case the modal link is found (which is created on click), a modal is created with this information. 
        params.get("id") && (
            <Modal
                onClick={() => {
                    props.history.push(props.location.pathname);
                }}
            >
                <Container fluid id="modal-container" >

                    <Container fluid>
                        <Row xs={1} className="px-0">
                            <Col className="video-container px-0">
                                <iframe src={`https://www.youtube.com/embed/${mainTrailerLink}?autoplay=1&mute=1&controls=0`} title="YouTube trailer for the current video" width="100%" height={mainTrailerHeight}>
                                </iframe>
                            </Col>
                            <Col id="video-controls" className="bg-transparent">
                                <h1>{movie?.title}</h1>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <button className="d-inline-block btn bg-white py-2 px-3 mr-3" ><FaPlay className="mr-3" />Afspelen</button>
                                        <button className="circle-button mr-1"><FaPlus color="white" /></button>
                                        <button className="circle-button mr-1"><FaRegThumbsUp color="white" /></button>
                                        <button className="circle-button mr-1"><FaRegThumbsDown color="white" /></button>
                                    </div>
                                    <div>
                                        <button className="circle-button mr-5"><FaVolumeMute color="white" /></button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row id="film-summary" className="px-5 mb-4">
                            <Col xs={8}>
                                <span className="match-text mr-2">{ratingToPercentage(movie?.vote_average)}% match</span>
                                <span className="mr-2">{movie?.release_date.slice(0, 4)}</span>
                                <Image className="age-pic mr-2" src="https://www.kijkwijzer.nl/upload/pictogrammen/1_120_AL.png" />
                                <span>{GetRuntime()}</span>
                                <p className="">{movie.overview}</p>
                            </Col>
                            <Col xs={4} className="summary-details">
                                <p><span>Cast: </span>{
                                    cast !== undefined ? ShowCast() : null
                                }</p>

                                <p>
                                    <span>Genres: </span>{
                                        tmdbGenres !== undefined ? ShowGenres() : null
                                    }
                                </p>

                                <p><span>Deze titel is: </span>{"category?"}</p>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="meer-zoals-dit-container">
                        <Row className="px-5">
                            <Col>
                                <h2>Meer zoals dit</h2>
                            </Col>
                        </Row>
                        <Row xs={1} sm={2} md={3} lg={4} className="d-flex justify-content-between px-5">
                            {similarContent?.map(element =>{
                                return <ModalFilmCard movie={movie} imgSrc={element.poster_path} releaseDate={element.release_date} overview={element.overview} voteAverage={element.vote_average} />
                            })}
                        </Row>
                    </Container>
                    <Container fluid>
                        <Row className="px-5">
                            <Col>
                                {/* <hr /> */}
                                <div className="my-hr" />
                                <button className="expand-mzd-button" onClick={toggleButton}>
                                    {toggleExpanded ? <FaChevronUp color="white" /> : <FaChevronDown color="white" />}
                                </button>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="trailers-en-meer-container">
                        <Row className="px-5 mt-5">
                            <Col>
                                <h2>Trailers en meer</h2>
                            </Col>
                        </Row>
                        <Row xs={3} className="px-5">
                            {trailerLinks?.map(element => {
                                return <Col><iframe src={`https://www.youtube.com/embed/${element.key}?autoplay=0&mute=0&controls=1`} title="YouTube clips with related content" width="100%" height="100%">
                                </iframe><span>{movie?.title + " (" + element.type + ")"}</span></Col>
                            })}
                        </Row>
                    </Container>

                    <Container fluid className="modal-content-footer">
                        <Row xs={1} className="px-5">
                            <Col>
                                <h2>Over {movie.title}</h2>
                            </Col>
                            <Col>
                                <p><span>Regisseur: </span>{director}</p>
                                <p><span>Cast: </span>{ShowCast(true)}</p>
                                <p><span>Genres: </span>{ShowGenres()}</p>
                                <p><span>Deze titel is: </span>{"category?"}</p>
                            </Col>
                        </Row>
                        <Row className="px-5">
                            <Col xs="auto">
                                <span>Leeftijdsclassificatie:</span>
                            </Col>
                            <Col xs="auto" className="px-0">
                                <Image className="age-pic" src="https://www.kijkwijzer.nl/upload/pictogrammen/1_120_AL.png" />
                            </Col>
                            <Col>
                                <p>{"Geschikt voor ..."}</p>
                            </Col>
                        </Row>
                    </Container>
                </Container>

            </Modal>
        )
    )
}
