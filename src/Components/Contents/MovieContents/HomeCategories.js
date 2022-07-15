import React from "react";
import movieDataRequests from "../../../utilities/config";
import CatSlider from "./CatSlider";
import DemoEphrem from "../DemoEphrem";
export default function HomeCategories() {
    return (
        <>

            <DemoEphrem
                title="Zeroes"
                fetchUrl={movieDataRequests.fetchZeroes}
                isLargeRow
            />


            <CatSlider
                title="Zeroes"
                fetchUrl={movieDataRequests.fetchZeroes}
            // isLargeRow
            />

            <CatSlider
                title="Nineties"
                fetchUrl={movieDataRequests.fetchNineties}
            // isLargeRow
            />
            <CatSlider
                title="Eighties"
                fetchUrl={movieDataRequests.fetchEighties}
            // isLargeRow
            />



        </>
    );
}
