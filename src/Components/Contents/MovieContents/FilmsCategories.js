import React from 'react'
import movieDataRequests from "../../../utilities/config";
import CatSlider from "./CatSlider";



export default function FilmsCategories() {
    return (
        <>
            <CatSlider
                title="Comedy"
                fetchUrl={movieDataRequests.fetchComedy}
                // isLargeRow
            />

            <CatSlider
                title="Action"
                fetchUrl={movieDataRequests.fetchAction}
                // isLargeRow
            />
            <CatSlider
                title="Thriller"
                fetchUrl={movieDataRequests.fetchThriller}
                // isLargeRow
            />
            <CatSlider
                title="Family"
                fetchUrl={movieDataRequests.fetchFamily}
                // isLargeRow
            />
            <CatSlider
                title="Fantasy  "
                fetchUrl={movieDataRequests.fetchFantasy}
                // isLargeRow
            />
            <CatSlider
                title="Crime"
                fetchUrl={movieDataRequests.fetchCrime}
                // isLargeRow
            />
            <CatSlider
                title="Adventure"
                fetchUrl={movieDataRequests.fetchAdventure}
                // isLargeRow
            />
        </>
    )
}
