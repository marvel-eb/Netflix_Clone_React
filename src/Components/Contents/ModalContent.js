import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ModalFilmCard from './ModalFilmCard';
import Modal from './ModalContainer'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function ModalContent(props) {
    const [toggleExpanded, setToggleExpanded] = useState(false);
    const movie = props.location.movie;
    let element = document.getElementsByClassName("meer-zoals-dit-container");
    let params = new URLSearchParams(props.location.search);
    // console.log(props.location.search)
    // console.log(movie)
    // console.log(props.location.pathname)
    // console.log(props.history)
    console.log(props)
    console.log(movie)
    if(movie !== undefined || null ){
        console.log(params.get(`id=${movie.id}`))
    } else {
        return null
    }
    

    
    // console.log(params.get(`id=${movie.id}`))

    function toggleButton() {
        if (toggleExpanded) {
            element[0].style.height = "400px";
        }
        else {
            element[0].style.height = "auto";
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
                        <Row>
                            <Col className="px-0">
                                <video controls autoPlay muted src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" width="100%" height="auto">
                                </video>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="meer-zoals-dit-container">
                        <Row>
                            <Col>
                                <h2>{movie.title}</h2>
                            </Col>
                        </Row>
                        <Row xs={1} sm={2} md={3} lg={4}>
                            <ModalFilmCard />
                            <ModalFilmCard />
                            <ModalFilmCard />
                            <ModalFilmCard />
                            <ModalFilmCard />
                            <ModalFilmCard />
                            <ModalFilmCard />
                            <ModalFilmCard />
                            <ModalFilmCard />
                            <ModalFilmCard />
                            <ModalFilmCard />
                            <ModalFilmCard />
                            <ModalFilmCard />
                            <ModalFilmCard />
                            <ModalFilmCard />
                            <ModalFilmCard />
                            <ModalFilmCard />
                            <ModalFilmCard />
                            <ModalFilmCard />
                        </Row>
                    </Container>
                    <Container fluid>
                        <Row className="">
                            <Col className="px-0">
                                {/* <hr /> */}
                                <div className="my-hr" />
                                <button className="expand-mzd-button" onClick={toggleButton}>
                                    {toggleExpanded ? <FaChevronUp color="white" /> : <FaChevronDown color="white" />}
                                </button>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="trailers-en-meer-container">
                        <Row>
                            <Col>
                                <h2>Trailers en meer</h2>
                            </Col>
                        </Row>
                        <Row xs={3}>
                            <Col>
                                <iframe width="200" height="auto" src="https://www.youtube.com/embed/DGX9UogxXeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <p>{"Film title"} (clip)/(trailer)</p>
                            </Col>
                            <Col>
                                <iframe width="200" height="auto" src="https://www.youtube.com/embed/DGX9UogxXeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <p>{"Film title"} (clip)/(trailer)</p>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="modal-content-footer">
                        <Row xs={1}>
                            <Col>
                                <h2>Over {"filmtitle"}</h2>
                            </Col>
                            <Col>
                                <p><span>Regisseur: </span>{"naam regiseur"}</p>
                                <p><span>Cast: </span>{"namen cast"}</p>
                                <p><span>Genres: </span>{"genres"}</p>
                                <p><span>Deze titel is: </span>{"category?"}</p>
                            </Col>
                        </Row>
                        <Row>
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