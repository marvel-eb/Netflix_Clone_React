import React from 'react'
import movieDataRequests from "../../../utilities/config";
import CatSlider from "./CatSlider";



export default function FilmsCategories(props) {
    return (
        <>
            <CatSlider
                props={props}
                title="Comedy"
                fetchUrl={movieDataRequests.fetchComedy}
                // isLargeRow
            />

            <CatSlider
                props={props}
                title="Action"
                fetchUrl={movieDataRequests.fetchAction}
                // isLargeRow
            />
            <CatSlider
                props={props}
                title="Thriller"
                fetchUrl={movieDataRequests.fetchThriller}
                // isLargeRow
            />
            <CatSlider
                props={props}
                title="Family"
                fetchUrl={movieDataRequests.fetchFamily}
                // isLargeRow
            />
            <CatSlider
                props={props}
                title="Fantasy  "
                fetchUrl={movieDataRequests.fetchFantasy}
                // isLargeRow
            />
            <CatSlider
                props={props}
                title="Crime"
                fetchUrl={movieDataRequests.fetchCrime}
                // isLargeRow
            />
            <CatSlider
                props={props}
                title="Adventure"
                fetchUrl={movieDataRequests.fetchAdventure}
                // isLargeRow
            />
        </>
    )
}
