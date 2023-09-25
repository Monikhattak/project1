import React from "react";
import './Search.css';

const SearchBox = ({ onInputChage }) => {


    return (

        <div className=" search-container">

            <input
                onChange={(event) => onInputChage(event.target.value)}
                placeholder="Type Keywords"
                className="search-input" />
        </div>
    );
};

export default SearchBox