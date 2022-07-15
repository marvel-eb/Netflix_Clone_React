import React from "react";
import movieDataRequests from "../../utilities/config";
import CatSlider from "../Contents/MovieContents/CatSlider";
import DemoEphrem from "./DemoEphrem";
export default function HomeCategories(props) {
    return (
        <>

            <DemoEphrem
                title="Zeroes"
                fetchUrl={movieDataRequests.fetchZeroes}
                isLargeRow
            />


            <CatSlider
                props={props}
                title="Zeroes"
                fetchUrl={movieDataRequests.fetchZeroes}
            // isLargeRow
            />




        </>
    );
}
