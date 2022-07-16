import React from "react";
import movieDataRequests from "../../../utilities/config";
import CatSlider from "./CatSlider";
// import DemoEphrem from "../DemoEphrem";
export default function HomeCategories(props) {
    return (
        <>

            {/* <DemoEphrem
                title="Zeroes"
                fetchUrl={movieDataRequests.fetchZeroes}
                isLargeRow
            /> */}


            <CatSlider
                props={props}
                title="Zeroes"
                fetchUrl={movieDataRequests.fetchZeroes}
            // isLargeRow
            />

            <CatSlider
                props={props}
                title="Nineties"
                fetchUrl={movieDataRequests.fetchNineties}
            // isLargeRow
            />
            <CatSlider
                props={props}
                title="Eighties"
                fetchUrl={movieDataRequests.fetchEighties}
            // isLargeRow
            />
            <CatSlider
                props={props}
                title="Disney"
                fetchUrl={movieDataRequests.fetchDisney}
            // isLargeRow
            />
            <CatSlider
                props={props}
                title="Ryan Reynolds"
                fetchUrl={movieDataRequests.fetchActor}
            // isLargeRow
            />



        </>
    );
}
