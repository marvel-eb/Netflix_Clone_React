import React from "react";

import { FaSearch } from "react-icons/fa";

const SearchBar = (props) => {
    return (
        <form className="search-container my-2- my-lg-0-">
            <input
                id="search-box"
                className="search-box form-control- mr-sm-2"
                type="search"
                placeholder="Titels, personen, genres"
                aria-label="Search"
            />

            <label className="search-icon-container" htmlFor="search-box">
                <span className="search-icon">

                    <FaSearch />
                </span>
            </label>

            <button
                className="search-btn btn- btn-outline-success- my-2- my-sm-0-"
                type="submit"
            >
                Search movie...
            </button>
        </form>
    );
};

export default SearchBar;
